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
        const userDB = await db.user.create({
            ...user
        })

        return {success:true, user}
    })
});

export type AppRouter = typeof appRouter;