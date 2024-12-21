import * as better_call from 'better-call';
import { z } from 'zod';
import { B as BetterAuthOptions, k as InferUser, l as InferSession } from '../auth-vURrZfZU.js';
import 'kysely';
import '../helper-Bi8FQwDD.js';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

declare const customSession: <Returns extends Record<string, any>, O extends BetterAuthOptions = BetterAuthOptions>(fn: (session: {
    user: InferUser<O>;
    session: InferSession<O>;
}) => Promise<Returns>, options?: O) => {
    id: "custom-session";
    endpoints: {
        getSession: {
            <C extends [(better_call.Context<"/get-session", {
                method: "GET";
                metadata: {
                    CUSTOM_SESSION: boolean;
                };
                query: z.ZodOptional<z.ZodObject<{
                    /**
                     * If cookie cache is enabled, it will disable the cache
                     * and fetch the session from the database
                     */
                    disableCookieCache: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>;
                    disableRefresh: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : Returns | null>;
            path: "/get-session";
            options: {
                method: "GET";
                metadata: {
                    CUSTOM_SESSION: boolean;
                };
                query: z.ZodOptional<z.ZodObject<{
                    /**
                     * If cookie cache is enabled, it will disable the cache
                     * and fetch the session from the database
                     */
                    disableCookieCache: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>;
                    disableRefresh: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    };
};

export { customSession };
