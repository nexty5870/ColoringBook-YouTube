"use client";
import React, { useEffect, useState } from "react";
import config from "@/config";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

const GetStartedButton1 = () => {
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      setUser(data.user);
    };

    getUser();
  }, [supabase]);

  return (
    <Link
      className="h-11 w-[200px] text-sm mt-6 font-medium rounded-sm px-xs text-content-on-brand bg-surface-brand flex justify-center items-center hover:opacity-90 active:opacity-80 disabled:bg-surface-disabled disabled:text-content-disabled disabled:cursor-not-allowed disabled:border-none gap-2"
      href={user ? config.auth.callbackUrl : config.auth.loginUrl}
    >
      Get Started
    </Link>
  );
};

export default GetStartedButton1;
