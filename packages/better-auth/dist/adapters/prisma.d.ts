import { B as BetterAuthOptions, W as Where } from '../auth-vURrZfZU.js';
import 'kysely';
import 'better-call';
import 'zod';
import '../helper-Bi8FQwDD.js';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

interface PrismaConfig {
    /**
     * Database provider.
     */
    provider: "sqlite" | "cockroachdb" | "mysql" | "postgresql" | "sqlserver" | "mongodb";
}
interface PrismaClient {
}
declare const prismaAdapter: (prisma: PrismaClient, config: PrismaConfig) => (options: BetterAuthOptions) => {
    id: string;
    create<T extends Record<string, any>, R = T>(data: {
        model: string;
        data: T;
        select?: string[];
    }): Promise<any>;
    findOne<T>(data: {
        model: string;
        where: Where[];
        select?: string[];
    }): Promise<any>;
    findMany<T>(data: {
        model: string;
        where?: Where[];
        limit?: number;
        sortBy?: {
            field: string;
            direction: "asc" | "desc";
        };
        offset?: number;
    }): Promise<any[]>;
    update<T>(data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }): Promise<any>;
    updateMany(data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }): Promise<number>;
    delete<T>(data: {
        model: string;
        where: Where[];
    }): Promise<void>;
    deleteMany(data: {
        model: string;
        where: Where[];
    }): Promise<number>;
    options: PrismaConfig;
};

export { type PrismaConfig, prismaAdapter };
