
'use client'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect, useRouter, useSearchParams} from "next/navigation";
import {trpc} from "@/app/_trpc/client";

const AuthPage = () => {
  const router = useRouter()
    const searchParms = useSearchParams()
    const origin = searchParms.get('origin')
    const { data } = trpc.authCallback.useQuery(undefined, {
      onSuccess:({success})=>{
        if (success) {
          router.push(origin?`/${origin}`:'/dashboard')
        }
      }
    })
    return (
        <>{origin}</>
    );
};
export  default AuthPage