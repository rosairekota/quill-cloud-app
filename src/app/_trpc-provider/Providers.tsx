'use client'
import React, {ReactNode, useState} from "react";
import {QueryClient} from "@tanstack/query-core";
import {trpc} from "@/app/_trpc-provider/client";
import {httpBatchLink} from "@trpc/client";
import {QueryClientProvider} from "@tanstack/react-query";

export type Props ={
    children: ReactNode
}
export const Providers :React.FC<Props>= ({children}) => {
    const [queryClient] = useState(()=>new QueryClient())
    const [trpcClient] = useState(()=> trpc.createClient(
        {
            links:[
                httpBatchLink({
                    url:'http://localhost:3000/api/trpc'
                })
            ]
        }
    ))
    return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
      </trpc.Provider>
    );
};