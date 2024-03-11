import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const decreaseCredit: () => any = async () => {
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    let { error } = await supabase
        .rpc('add_credits', { x: -1, user_id: session.user.id })

    if (error) console.error(error)
    console.log("1 credit decreased from user: ", session.user.id)
};