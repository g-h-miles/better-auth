import { Db } from 'mongodb';
import { B as BetterAuthOptions, W as Where } from '../auth-CfuNyKFj.cjs';
import 'kysely';
import 'better-call';
import 'zod';
import '../helper-Bi8FQwDD.cjs';
import '../index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

declare const mongodbAdapter: (db: Db) => (options: BetterAuthOptions) => {
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
    }): Promise<any>;
    deleteMany(data: {
        model: string;
        where: Where[];
    }): Promise<number>;
};

export { mongodbAdapter };
