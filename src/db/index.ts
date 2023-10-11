import { PrismaClient } from '@prisma/client'

declare global {
    // eslint-disable-next-line no-var
    export const cachedPrisma: PrismaClient;
}

let prisma: PrismaClient
prisma = new PrismaClient()

export const db = prisma