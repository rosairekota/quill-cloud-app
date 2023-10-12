import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "../trpc";
import { TRPCClientError } from "@trpc/client";
import { db } from "@/server/database";

export const userRouter = router({
    auth:publicProcedure.query(async ()=>{
        const {getUser} = getKindeServerSession()
        const user = getUser()
        if (!user || !user.id) throw  new TRPCClientError({code:"UNAUTHORIZED"})

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
})