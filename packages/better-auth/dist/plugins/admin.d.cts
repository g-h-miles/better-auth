import * as better_call from 'better-call';
import { APIError } from 'better-call';
import { U as User, S as Session, j as AuthContext, H as HookEndpointContext, I as InferOptionSchema } from '../auth-CfuNyKFj.cjs';
import { z } from 'zod';
import 'kysely';
import '../helper-Bi8FQwDD.cjs';
import '../index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

interface UserWithRole extends User {
    role?: string | null;
    banned?: boolean | null;
    banReason?: string | null;
    banExpires?: Date | null;
}
interface SessionWithImpersonatedBy extends Session {
    impersonatedBy?: string;
}
interface AdminOptions {
    /**
     * The default role for a user created by the admin
     *
     * @default "user"
     */
    defaultRole?: string | false;
    /**
     * The role required to access admin endpoints
     *
     * Can be an array of roles
     *
     * @default "admin"
     */
    adminRole?: string | string[];
    /**
     * A default ban reason
     *
     * By default, no reason is provided
     */
    defaultBanReason?: string;
    /**
     * Number of seconds until the ban expires
     *
     * By default, the ban never expires
     */
    defaultBanExpiresIn?: number;
    /**
     * Duration of the impersonation session in seconds
     *
     * By default, the impersonation session lasts 1 hour
     */
    impersonationSessionDuration?: number;
    /**
     * Custom schema for the admin plugin
     */
    schema?: InferOptionSchema<typeof schema>;
}
declare const admin: <O extends AdminOptions>(options?: O) => {
    id: "admin";
    init(ctx: AuthContext): {
        options: {
            databaseHooks: {
                user: {
                    create: {
                        before(user: {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        }): Promise<{
                            data: {
                                id: string;
                                email: string;
                                emailVerified: boolean;
                                name: string;
                                createdAt: Date;
                                updatedAt: Date;
                                image?: string | null | undefined;
                                role: string;
                            };
                        } | undefined>;
                    };
                };
                session: {
                    create: {
                        before(session: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        }): Promise<false | undefined>;
                    };
                };
            };
        };
    };
    hooks: {
        after: {
            matcher(context: HookEndpointContext<{
                returned: APIError | Response | Record<string, any>;
                endpoint: better_call.Endpoint;
            }>): boolean;
            handler: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                response: {
                    body: any;
                    status: number;
                    statusText: string;
                    headers: Record<string, string> | undefined;
                };
                body: SessionWithImpersonatedBy[];
                _flag: "json";
            } | undefined>, better_call.EndpointOptions>;
        }[];
    };
    endpoints: {
        setRole: {
            <C extends [better_call.Context<"/admin/set-role", {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                    role: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                    role: string;
                }, {
                    userId: string;
                    role: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: UserWithRole;
            }>;
            path: "/admin/set-role";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                    role: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                    role: string;
                }, {
                    userId: string;
                    role: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        createUser: {
            <C extends [better_call.Context<"/admin/create-user", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    password: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    /**
                     * extra fields for user
                     */
                    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                    role: string;
                    data?: Record<string, any> | undefined;
                }, {
                    password: string;
                    email: string;
                    name: string;
                    role: string;
                    data?: Record<string, any> | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: UserWithRole;
            }>;
            path: "/admin/create-user";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    password: z.ZodString;
                    name: z.ZodString;
                    role: z.ZodString;
                    /**
                     * extra fields for user
                     */
                    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                    role: string;
                    data?: Record<string, any> | undefined;
                }, {
                    password: string;
                    email: string;
                    name: string;
                    role: string;
                    data?: Record<string, any> | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        listUsers: {
            <C extends [better_call.Context<"/admin/list-users", {
                method: "GET";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                query: z.ZodObject<{
                    searchValue: z.ZodOptional<z.ZodString>;
                    searchField: z.ZodOptional<z.ZodEnum<["email", "name"]>>;
                    searchOperator: z.ZodOptional<z.ZodEnum<["contains", "starts_with", "ends_with"]>>;
                    limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                    offset: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                    sortBy: z.ZodOptional<z.ZodString>;
                    sortDirection: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                    filterField: z.ZodOptional<z.ZodString>;
                    filterValue: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBoolean]>>;
                    filterOperator: z.ZodOptional<z.ZodEnum<["eq", "ne", "lt", "lte", "gt", "gte"]>>;
                }, "strip", z.ZodTypeAny, {
                    limit?: string | number | undefined;
                    offset?: string | number | undefined;
                    sortBy?: string | undefined;
                    searchValue?: string | undefined;
                    searchField?: "email" | "name" | undefined;
                    searchOperator?: "contains" | "starts_with" | "ends_with" | undefined;
                    sortDirection?: "asc" | "desc" | undefined;
                    filterField?: string | undefined;
                    filterValue?: string | number | boolean | undefined;
                    filterOperator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | undefined;
                }, {
                    limit?: string | number | undefined;
                    offset?: string | number | undefined;
                    sortBy?: string | undefined;
                    searchValue?: string | undefined;
                    searchField?: "email" | "name" | undefined;
                    searchOperator?: "contains" | "starts_with" | "ends_with" | undefined;
                    sortDirection?: "asc" | "desc" | undefined;
                    filterField?: string | undefined;
                    filterValue?: string | number | boolean | undefined;
                    filterOperator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | undefined;
                }>;
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                users: {
                                                    type: string;
                                                    items: {
                                                        $ref: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                users: UserWithRole[];
            }>;
            path: "/admin/list-users";
            options: {
                method: "GET";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                query: z.ZodObject<{
                    searchValue: z.ZodOptional<z.ZodString>;
                    searchField: z.ZodOptional<z.ZodEnum<["email", "name"]>>;
                    searchOperator: z.ZodOptional<z.ZodEnum<["contains", "starts_with", "ends_with"]>>;
                    limit: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                    offset: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
                    sortBy: z.ZodOptional<z.ZodString>;
                    sortDirection: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
                    filterField: z.ZodOptional<z.ZodString>;
                    filterValue: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodNumber]>, z.ZodBoolean]>>;
                    filterOperator: z.ZodOptional<z.ZodEnum<["eq", "ne", "lt", "lte", "gt", "gte"]>>;
                }, "strip", z.ZodTypeAny, {
                    limit?: string | number | undefined;
                    offset?: string | number | undefined;
                    sortBy?: string | undefined;
                    searchValue?: string | undefined;
                    searchField?: "email" | "name" | undefined;
                    searchOperator?: "contains" | "starts_with" | "ends_with" | undefined;
                    sortDirection?: "asc" | "desc" | undefined;
                    filterField?: string | undefined;
                    filterValue?: string | number | boolean | undefined;
                    filterOperator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | undefined;
                }, {
                    limit?: string | number | undefined;
                    offset?: string | number | undefined;
                    sortBy?: string | undefined;
                    searchValue?: string | undefined;
                    searchField?: "email" | "name" | undefined;
                    searchOperator?: "contains" | "starts_with" | "ends_with" | undefined;
                    sortDirection?: "asc" | "desc" | undefined;
                    filterField?: string | undefined;
                    filterValue?: string | number | boolean | undefined;
                    filterOperator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | undefined;
                }>;
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                users: {
                                                    type: string;
                                                    items: {
                                                        $ref: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        listUserSessions: {
            <C extends [better_call.Context<"/admin/list-user-sessions", {
                method: "POST";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                sessions: {
                                                    type: string;
                                                    items: {
                                                        $ref: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                sessions: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                }[];
            }>;
            path: "/admin/list-user-sessions";
            options: {
                method: "POST";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                sessions: {
                                                    type: string;
                                                    items: {
                                                        $ref: string;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        unbanUser: {
            <C extends [better_call.Context<"/admin/unban-user", {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: any;
            }>;
            path: "/admin/unban-user";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        banUser: {
            <C extends [better_call.Context<"/admin/ban-user", {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                    /**
                     * Reason for the ban
                     */
                    banReason: z.ZodOptional<z.ZodString>;
                    /**
                     * Number of seconds until the ban expires
                     */
                    banExpiresIn: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                    banReason?: string | undefined;
                    banExpiresIn?: number | undefined;
                }, {
                    userId: string;
                    banReason?: string | undefined;
                    banExpiresIn?: number | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: any;
            }>;
            path: "/admin/ban-user";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                    /**
                     * Reason for the ban
                     */
                    banReason: z.ZodOptional<z.ZodString>;
                    /**
                     * Number of seconds until the ban expires
                     */
                    banExpiresIn: z.ZodOptional<z.ZodNumber>;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                    banReason?: string | undefined;
                    banExpiresIn?: number | undefined;
                }, {
                    userId: string;
                    banReason?: string | undefined;
                    banExpiresIn?: number | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        impersonateUser: {
            <C extends [better_call.Context<"/admin/impersonate-user", {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                session: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
                user: {
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                };
            }>;
            path: "/admin/impersonate-user";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                session: {
                                                    $ref: string;
                                                };
                                                user: {
                                                    $ref: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        stopImpersonating: {
            <C extends [(better_call.Context<"/admin/stop-impersonating", {
                method: "POST";
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                session: Session;
                user: User;
            }>;
            path: "/admin/stop-impersonating";
            options: {
                method: "POST";
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeUserSession: {
            <C extends [better_call.Context<"/admin/revoke-user-session", {
                method: "POST";
                body: z.ZodObject<{
                    sessionToken: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    sessionToken: string;
                }, {
                    sessionToken: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
            }>;
            path: "/admin/revoke-user-session";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    sessionToken: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    sessionToken: string;
                }, {
                    sessionToken: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeUserSessions: {
            <C extends [better_call.Context<"/admin/revoke-user-sessions", {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
            }>;
            path: "/admin/revoke-user-sessions";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        removeUser: {
            <C extends [better_call.Context<"/admin/remove-user", {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
            }>;
            path: "/admin/remove-user";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        user: UserWithRole;
                        session: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            userId: string;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        operationId: string;
                        summary: string;
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                success: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    };
    $ERROR_CODES: {
        readonly FAILED_TO_CREATE_USER: "Failed to create user";
        readonly USER_ALREADY_EXISTS: "User already exists";
        readonly USER_NOT_FOUND: "User not found";
        readonly YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself";
        readonly ONLY_ADMINS_CAN_ACCESS_THIS_ENDPOINT: "Only admins can access this endpoint";
    };
    schema: {
        user: {
            fields: {
                role: {
                    type: "string";
                    required: false;
                    input: false;
                };
                banned: {
                    type: "boolean";
                    defaultValue: false;
                    required: false;
                    input: false;
                };
                banReason: {
                    type: "string";
                    required: false;
                    input: false;
                };
                banExpires: {
                    type: "date";
                    required: false;
                    input: false;
                };
            };
        };
        session: {
            fields: {
                impersonatedBy: {
                    type: "string";
                    required: false;
                };
            };
        };
    };
};
declare const schema: {
    user: {
        fields: {
            role: {
                type: "string";
                required: false;
                input: false;
            };
            banned: {
                type: "boolean";
                defaultValue: false;
                required: false;
                input: false;
            };
            banReason: {
                type: "string";
                required: false;
                input: false;
            };
            banExpires: {
                type: "date";
                required: false;
                input: false;
            };
        };
    };
    session: {
        fields: {
            impersonatedBy: {
                type: "string";
                required: false;
            };
        };
    };
};

export { type SessionWithImpersonatedBy, type UserWithRole, admin };
