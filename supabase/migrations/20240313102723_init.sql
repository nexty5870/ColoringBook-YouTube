
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE SCHEMA IF NOT EXISTS "public";

ALTER SCHEMA "public" OWNER TO "pg_database_owner";

CREATE TYPE "public"."lemon_squeezy_subscription_status" AS ENUM (
    'active',
    'unpaid',
    'paused',
    'on_trial',
    'cancelled',
    'expired'
);

ALTER TYPE "public"."lemon_squeezy_subscription_status" OWNER TO "postgres";

CREATE TYPE "public"."stripe_subscription_status" AS ENUM (
    'trialing',
    'active',
    'canceled',
    'incomplete',
    'incomplete_expired',
    'past_due',
    'unpaid',
    'paused'
);

ALTER TYPE "public"."stripe_subscription_status" OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."add_credits"("x" integer, "user_id" "uuid") RETURNS "void"
    LANGUAGE "sql"
    AS $$
  update users 
  set credits = credits + x
  where id = user_id;
$$;

ALTER FUNCTION "public"."add_credits"("x" integer, "user_id" "uuid") OWNER TO "postgres";

CREATE OR REPLACE FUNCTION "public"."handle_new_user"() RETURNS "trigger"
    LANGUAGE "plpgsql" SECURITY DEFINER
    AS $$
begin
  insert into public.users (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$;

ALTER FUNCTION "public"."handle_new_user"() OWNER TO "postgres";

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.handle_new_user();

SET default_tablespace = '';

SET default_table_access_method = "heap";

CREATE TABLE IF NOT EXISTS "public"."leads" (
    "email" "text" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"() NOT NULL
);

ALTER TABLE "public"."leads" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."lemon_squeezy_customers" (
    "id" "uuid" NOT NULL,
    "customer_id" numeric
);

ALTER TABLE "public"."lemon_squeezy_customers" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."lemon_squeezy_subscriptions" (
    "id" numeric NOT NULL,
    "user_id" "uuid" NOT NULL,
    "status" "public"."lemon_squeezy_subscription_status",
    "metadata" "jsonb",
    "variant_id" numeric,
    "cancelled" boolean,
    "created_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "updated_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "renews_at" timestamp with time zone,
    "ends_at" timestamp with time zone
);

ALTER TABLE "public"."lemon_squeezy_subscriptions" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."stripe_customers" (
    "id" "uuid" NOT NULL,
    "customer_id" "text"
);

ALTER TABLE "public"."stripe_customers" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."stripe_subscriptions" (
    "id" "text" NOT NULL,
    "user_id" "uuid" NOT NULL,
    "status" "public"."stripe_subscription_status",
    "metadata" "jsonb",
    "price_id" "text",
    "cancel_at_period_end" boolean,
    "created" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "current_period_start" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "current_period_end" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()) NOT NULL,
    "ended_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()),
    "cancel_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"()),
    "canceled_at" timestamp with time zone DEFAULT "timezone"('utc'::"text", "now"())
);

ALTER TABLE "public"."stripe_subscriptions" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."users" (
    "id" "uuid" NOT NULL,
    "full_name" "text",
    "avatar_url" "text",
    "created_at" timestamp with time zone DEFAULT ("now"() AT TIME ZONE 'utc'::"text") NOT NULL,
    "credits" numeric DEFAULT '0'::numeric NOT NULL,
    "email" "text" NOT NULL
);

ALTER TABLE "public"."users" OWNER TO "postgres";

ALTER TABLE ONLY "public"."leads"
    ADD CONSTRAINT "leads_pkey" PRIMARY KEY ("email");

ALTER TABLE ONLY "public"."lemon_squeezy_subscriptions"
    ADD CONSTRAINT "lemon_squeezy_subscriptions_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."stripe_customers"
    ADD CONSTRAINT "stripe_customers_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."stripe_subscriptions"
    ADD CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

ALTER TABLE ONLY "public"."stripe_customers"
    ADD CONSTRAINT "stripe_customers_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."stripe_subscriptions"
    ADD CONSTRAINT "subscriptions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "auth"."users"("id");

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id");

CREATE POLICY "Can only view own subs data." ON "public"."lemon_squeezy_subscriptions" FOR SELECT USING (("auth"."uid"() = "user_id"));

CREATE POLICY "Can only view own subs data." ON "public"."stripe_subscriptions" FOR SELECT USING (("auth"."uid"() = "user_id"));

CREATE POLICY "Can update own user data." ON "public"."users" FOR UPDATE USING (("auth"."uid"() = "id"));

CREATE POLICY "Can view own user data." ON "public"."users" FOR SELECT USING (("auth"."uid"() = "id"));

CREATE POLICY "Enable insert for authenticated users only" ON "public"."leads" FOR INSERT WITH CHECK (true);

ALTER TABLE "public"."leads" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."lemon_squeezy_customers" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."lemon_squeezy_subscriptions" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."stripe_customers" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."stripe_subscriptions" ENABLE ROW LEVEL SECURITY;

ALTER TABLE "public"."users" ENABLE ROW LEVEL SECURITY;

GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

GRANT ALL ON FUNCTION "public"."add_credits"("x" integer, "user_id" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."add_credits"("x" integer, "user_id" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."add_credits"("x" integer, "user_id" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "anon";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."handle_new_user"() TO "service_role";

GRANT ALL ON TABLE "public"."leads" TO "anon";
GRANT ALL ON TABLE "public"."leads" TO "authenticated";
GRANT ALL ON TABLE "public"."leads" TO "service_role";

GRANT ALL ON TABLE "public"."lemon_squeezy_customers" TO "anon";
GRANT ALL ON TABLE "public"."lemon_squeezy_customers" TO "authenticated";
GRANT ALL ON TABLE "public"."lemon_squeezy_customers" TO "service_role";

GRANT ALL ON TABLE "public"."lemon_squeezy_subscriptions" TO "anon";
GRANT ALL ON TABLE "public"."lemon_squeezy_subscriptions" TO "authenticated";
GRANT ALL ON TABLE "public"."lemon_squeezy_subscriptions" TO "service_role";

GRANT ALL ON TABLE "public"."stripe_customers" TO "anon";
GRANT ALL ON TABLE "public"."stripe_customers" TO "authenticated";
GRANT ALL ON TABLE "public"."stripe_customers" TO "service_role";

GRANT ALL ON TABLE "public"."stripe_subscriptions" TO "anon";
GRANT ALL ON TABLE "public"."stripe_subscriptions" TO "authenticated";
GRANT ALL ON TABLE "public"."stripe_subscriptions" TO "service_role";

GRANT ALL ON TABLE "public"."users" TO "anon";
GRANT ALL ON TABLE "public"."users" TO "authenticated";
GRANT ALL ON TABLE "public"."users" TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS  TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES  TO "service_role";

RESET ALL;
