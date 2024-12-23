import * as better_call from 'better-call';
import { H as HookEndpointContext } from './auth-vURrZfZU.js';
import 'kysely';
import 'zod';
import './helper-Bi8FQwDD.js';
import './index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

declare function toNextJsHandler(auth: {
    handler: (request: Request) => Promise<Response>;
} | ((request: Request) => Promise<Response>)): {
    GET: (request: Request) => Promise<Response>;
    POST: (request: Request) => Promise<Response>;
};
declare const nextCookies: () => {
    id: "next-cookies";
    hooks: {
        after: {
            matcher(ctx: HookEndpointContext<{
                returned: better_call.APIError | Response | Record<string, any>;
                endpoint: better_call.Endpoint;
            }>): true;
            handler: (ctx: HookEndpointContext) => Promise<void>;
        }[];
    };
};

export { nextCookies, toNextJsHandler };
