
'use client'
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect, useRouter, useSearchParams} from "next/navigation";
import {trpc} from "@/app/_trpc-provider/client";
import {Loader2} from "lucide-react";

const AuthPage = () => {
  const router = useRouter()
    const searchParms = useSearchParams()
    const origin = searchParms.get('origin')
    const { data } = trpc.authCallback.useQuery(undefined, {
      onSuccess:({success})=>{
        if (success) {
          router.push(origin?`/${origin}`:'/dashboard')
        }
      },
      onError:(error)=>{
        if (error.data?.code==='') {
          router.push('/signin')
        }
      },
      retry:true,
      retryDelay: 500
    })
    return (
       <div className="w-full mt-24 flex justify-center">
       <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800"/>
         <h3>Setting up your account </h3>
       </div>
       </div>
    );
};
export  default AuthPage