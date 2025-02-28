// server/index.ts

import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
    hello: publicProcedure.input(z.object({
        name: z.string(),
    })).query((opt) => {
        const { input } = opt;
        return `Hello, ${input.name}!`;
    }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
    router: appRouter,
});

server.listen(3000);