import { B as BetterAuthOptions } from './auth-BqCHpLdr.cjs';
import 'kysely';
import 'better-call';
import 'zod';
import './helper-Bi8FQwDD.cjs';
import './index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

declare const toSvelteKitHandler: (auth: {
    handler: (request: Request) => any;
    options: BetterAuthOptions;
}) => (event: {
    request: Request;
}) => any;
declare const svelteKitHandler: ({ auth, event, resolve, }: {
    auth: {
        handler: (request: Request) => any;
        options: BetterAuthOptions;
    };
    event: {
        request: Request;
        url: URL;
    };
    resolve: (event: any) => any;
}) => Promise<any>;
declare function isAuthPath(url: string, options: BetterAuthOptions): boolean;

export { isAuthPath, svelteKitHandler, toSvelteKitHandler };
