import { B as BetterAuthOptions, W as Where } from '../auth-vURrZfZU.js';
import 'kysely';
import 'better-call';
import 'zod';
import '../helper-Bi8FQwDD.js';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

interface MemoryDB {
    [key: string]: any[];
}
declare const memoryAdapter: (db: MemoryDB) => (options: BetterAuthOptions) => {
    id: string;
    create: <T extends Record<string, any>, R = T>({ model, data }: {
        model: string;
        data: T;
        select?: string[];
    }) => Promise<any>;
    findOne: <T>({ model, where, select }: {
        model: string;
        where: Where[];
        select?: string[];
    }) => Promise<any>;
    findMany: <T>({ model, where, sortBy, limit, offset }: {
        model: string;
        where?: Where[];
        limit?: number;
        sortBy?: {
            field: string;
            direction: "asc" | "desc";
        };
        offset?: number;
    }) => Promise<any[]>;
    update: <T>({ model, where, update }: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }) => Promise<any>;
    delete: <T>({ model, where }: {
        model: string;
        where: Where[];
    }) => Promise<void>;
    deleteMany: ({ model, where }: {
        model: string;
        where: Where[];
    }) => Promise<number>;
    updateMany(data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }): any;
};

export { type MemoryDB, memoryAdapter };
