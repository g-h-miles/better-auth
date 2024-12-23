import { Kysely } from 'kysely';
import { B as BetterAuthOptions, K as KyselyDatabaseType, W as Where } from '../auth-vURrZfZU.js';
import 'better-call';
import 'zod';
import '../helper-Bi8FQwDD.js';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

declare const createKyselyAdapter: (config: BetterAuthOptions) => Promise<{
    kysely: Kysely<any> | null;
    databaseType: KyselyDatabaseType | null;
}>;

interface KyselyAdapterConfig {
    /**
     * Database type.
     */
    type?: KyselyDatabaseType;
}
declare const kyselyAdapter: (db: Kysely<any>, config?: KyselyAdapterConfig) => (opts: BetterAuthOptions) => {
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
    options: KyselyAdapterConfig | undefined;
};

export { KyselyDatabaseType, createKyselyAdapter, kyselyAdapter };
