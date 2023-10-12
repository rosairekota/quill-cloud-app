import {createTRPCReact} from "@trpc/react-query";
import {AppRouter} from "@/app/api/trpc";

export const trpc   = createTRPCReact<AppRouter>({})