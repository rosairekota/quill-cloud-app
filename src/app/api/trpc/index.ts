import {publicProcedure, router} from './trpc';
import {z} from "zod";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {TRPCError} from "@trpc/server";
import {db} from "@/db";

export const appRouter= router({
    authCallback:publicProcedure.query(async ()=>{
        const {getUser} = getKindeServerSession()
        const user = getUser()
        if (!user || !user.id) throw  new TRPCError({code:"UNAUTHORIZED"})

        const dbUser = await db.user.findFirst({
            where:{
                id:user.id
            }
        })
        if ( typeof  dbUser === "undefined" ){
        const userCreate = await db.user.create({
            data:{
                id:user.id,
                email:user.email
            }
        })
        }
        return {success:true, user:user}
    })
});

export type AppRouter = typeof appRouter;