import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {db} from "@/server/database";
import {Dashboard} from "@/components/Dashboard";


const DashboardPage = () => {
    const {getUser} = getKindeServerSession()
    const user = getUser()
    if (!user || !user.id) redirect('auth-callback?origin=dashboard')
    const dbUser = db.user.findUnique({
        where:{
            id: user.id
        }
    })
    if(!dbUser) redirect('auth-callback?origin=dashboard')
    return (
        <><Dashboard/></>
    );
};
export  default DashboardPage