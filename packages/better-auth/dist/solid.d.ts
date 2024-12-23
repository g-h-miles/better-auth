import * as zod from 'zod';
import * as _better_fetch_fetch from '@better-fetch/fetch';
import { BetterFetchError } from '@better-fetch/fetch';
import { ClientOptions, InferClientAPI, InferActions, InferErrorCodes, BetterAuthClientPlugin, IsSignal } from './types.js';
import { Accessor } from 'solid-js';
import { U as UnionToIntersection, P as PrettifyDeep } from './helper-Bi8FQwDD.js';
import { a as BASE_ERROR_CODES } from './auth-BcCDy1CJ.js';
import 'nanostores';
import 'better-call';
import 'kysely';
import './index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

type InferResolvedHooks<O extends ClientOptions> = O["plugins"] extends Array<infer Plugin> ? Plugin extends BetterAuthClientPlugin ? Plugin["getAtoms"] extends (fetch: any) => infer Atoms ? Atoms extends Record<string, any> ? {
    [key in keyof Atoms as IsSignal<key> extends true ? never : key extends string ? `use${Capitalize<key>}` : never]: () => Accessor<ReturnType<Atoms[key]["get"]>>;
} : {} : {} : {} : {};
declare function createAuthClient<Option extends ClientOptions>(options?: Option): UnionToIntersection<InferResolvedHooks<Option>> & InferClientAPI<Option> & InferActions<Option> & {
    useSession: () => Accessor<{
        data: InferClientAPI<Option> extends {
            getSession: () => Promise<infer Res>;
        } ? Res extends {
            data: infer S;
            error: null;
        } | {
            data: null;
            error: {
                message?: string | undefined;
                status: number;
                statusText: string;
            };
        } ? S : Res extends Record<string, any> ? Res : never : never;
        isPending: boolean;
        isRefetching: boolean;
        error: BetterFetchError | null;
    }>;
    $Infer: {
        Session: NonNullable<InferClientAPI<Option> extends {
            getSession: () => Promise<infer Res>;
        } ? Res extends {
            data: infer S;
            error: null;
        } | {
            data: null;
            error: {
                message?: string | undefined;
                status: number;
                statusText: string;
            };
        } ? S : Res extends Record<string, any> ? Res : never : never>;
    };
    $fetch: _better_fetch_fetch.BetterFetch<{
        plugins: (_better_fetch_fetch.BetterFetchPlugin | {
            id: string;
            name: string;
            hooks: {
                onSuccess(context: _better_fetch_fetch.SuccessContext<any>): void;
            };
        } | {
            id: string;
            name: string;
            hooks: {
                onRequest<T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>): _better_fetch_fetch.RequestContext<T>;
            };
        })[];
        cache?: RequestCache;
        credentials?: RequestCredentials;
        headers?: (HeadersInit & (HeadersInit | {
            accept: "application/json" | "text/plain" | "application/octet-stream";
            "content-type": "application/json" | "text/plain" | "application/x-www-form-urlencoded" | "multipart/form-data" | "application/octet-stream";
            authorization: "Bearer" | "Basic";
        })) | undefined;
        integrity?: string;
        keepalive?: boolean;
        method: string;
        mode?: RequestMode;
        priority?: RequestPriority;
        redirect?: RequestRedirect;
        referrer?: string;
        referrerPolicy?: ReferrerPolicy;
        signal?: AbortSignal | null;
        window?: null;
        onRequest?: <T extends Record<string, any>>(context: _better_fetch_fetch.RequestContext<T>) => Promise<_better_fetch_fetch.RequestContext | void> | _better_fetch_fetch.RequestContext | void;
        onResponse?: (context: _better_fetch_fetch.ResponseContext) => Promise<Response | void | _better_fetch_fetch.ResponseContext> | Response | _better_fetch_fetch.ResponseContext | void;
        onSuccess?: ((context: _better_fetch_fetch.SuccessContext<any>) => Promise<void> | void) | undefined;
        onError?: (context: _better_fetch_fetch.ErrorContext) => Promise<void> | void;
        onRetry?: (response: _better_fetch_fetch.ResponseContext) => Promise<void> | void;
        hookOptions?: {
            cloneResponse?: boolean;
        };
        timeout?: number;
        customFetchImpl?: _better_fetch_fetch.FetchEsque;
        baseURL: string;
        throw?: boolean;
        auth?: {
            type: "Bearer";
            token: string | (() => string | undefined) | undefined;
        } | {
            type: "Basic";
            username: string | (() => string | undefined) | undefined;
            password: string | (() => string | undefined) | undefined;
        } | {
            type: "Custom";
            prefix: string | (() => string | undefined) | undefined;
            value: string | (() => string | undefined) | undefined;
        };
        body?: any;
        query?: any;
        params?: any;
        duplex?: "full" | "half";
        jsonParser: <T>(text: string) => Promise<T | undefined>;
        retry?: _better_fetch_fetch.RetryOptions;
        retryAttempt?: number;
        output?: zod.ZodType | typeof Blob | typeof File;
        errorSchema?: zod.ZodType;
        disableValidation?: boolean;
    }, unknown, unknown, {}>;
    $ERROR_CODES: PrettifyDeep<InferErrorCodes<Option> & typeof BASE_ERROR_CODES>;
};

export { createAuthClient };
