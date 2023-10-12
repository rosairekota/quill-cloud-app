
import { userRouter } from './routes/users';
import { router } from './trpc';

export const appRouter= router({
    auth: userRouter.auth
});

export type AppRouter = typeof appRouter;