import * as better_call from 'better-call';
import { z } from 'zod';
import { a as OAuth2Tokens } from '../index-BxVuNcHr.cjs';
import { U as User } from '../auth-CfuNyKFj.cjs';
import '../helper-Bi8FQwDD.cjs';
import 'jose';
import 'kysely';
import 'better-sqlite3';

interface SSOOptions {
    /**
     * custom function to provision a user when they sign in with an SSO provider.
     */
    provisionUser?: (data: {
        /**
         * The user object from the database
         */
        user: User & Record<string, any>;
        /**
         * The user info object from the provider
         */
        userInfo: Record<string, any>;
        /**
         * The OAuth2 tokens from the provider
         */
        token: OAuth2Tokens;
        /**
         * The SSO provider
         */
        provider: SSOProvider;
    }) => Promise<void>;
    /**
     * Organization provisioning options
     */
    organizationProvisioning?: {
        disabled?: boolean;
        defaultRole?: "member" | "admin";
        getRole?: (data: {
            /**
             * The user object from the database
             */
            user: User & Record<string, any>;
            /**
             * The user info object from the provider
             */
            userInfo: Record<string, any>;
            /**
             * The OAuth2 tokens from the provider
             */
            token: OAuth2Tokens;
            /**
             * The SSO provider
             */
            provider: SSOProvider;
        }) => Promise<"member" | "admin">;
    };
}
declare const sso: (options?: SSOOptions) => {
    id: "sso";
    endpoints: {
        createOIDCProvider: {
            <C extends [better_call.Context<"/sso/register", {
                method: "POST";
                body: z.ZodObject<{
                    providerId: z.ZodString;
                    issuer: z.ZodString;
                    domain: z.ZodString;
                    clientId: z.ZodString;
                    clientSecret: z.ZodString;
                    authorizationEndpoint: z.ZodOptional<z.ZodString>;
                    tokenEndpoint: z.ZodOptional<z.ZodString>;
                    userInfoEndpoint: z.ZodOptional<z.ZodString>;
                    tokenEndpointAuthentication: z.ZodOptional<z.ZodEnum<["client_secret_post", "client_secret_basic"]>>;
                    jwksEndpoint: z.ZodOptional<z.ZodString>;
                    discoveryEndpoint: z.ZodOptional<z.ZodString>;
                    scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    pkce: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                    mapping: z.ZodOptional<z.ZodObject<{
                        id: z.ZodString;
                        email: z.ZodString;
                        emailVerified: z.ZodOptional<z.ZodString>;
                        name: z.ZodString;
                        image: z.ZodOptional<z.ZodString>;
                        extraFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    }, {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    }>>;
                    organizationId: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    providerId: string;
                    domain: string;
                    issuer: string;
                    clientId: string;
                    clientSecret: string;
                    authorizationEndpoint?: string | undefined;
                    scopes?: string[] | undefined;
                    tokenEndpoint?: string | undefined;
                    organizationId?: string | undefined;
                    pkce?: boolean | undefined;
                    userInfoEndpoint?: string | undefined;
                    tokenEndpointAuthentication?: "client_secret_basic" | "client_secret_post" | undefined;
                    jwksEndpoint?: string | undefined;
                    discoveryEndpoint?: string | undefined;
                    mapping?: {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    } | undefined;
                }, {
                    providerId: string;
                    domain: string;
                    issuer: string;
                    clientId: string;
                    clientSecret: string;
                    authorizationEndpoint?: string | undefined;
                    scopes?: string[] | undefined;
                    tokenEndpoint?: string | undefined;
                    organizationId?: string | undefined;
                    pkce?: boolean | undefined;
                    userInfoEndpoint?: string | undefined;
                    tokenEndpointAuthentication?: "client_secret_basic" | "client_secret_post" | undefined;
                    jwksEndpoint?: string | undefined;
                    discoveryEndpoint?: string | undefined;
                    mapping?: {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    } | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            createdAt: Date;
                            updatedAt: Date;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                oidcConfig: OIDCConfig;
                redirectURI: string;
                issuer: string;
                domain: string;
                organizationId: string | undefined;
                userId: string;
                providerId: string;
            }>;
            path: "/sso/register";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    providerId: z.ZodString;
                    issuer: z.ZodString;
                    domain: z.ZodString;
                    clientId: z.ZodString;
                    clientSecret: z.ZodString;
                    authorizationEndpoint: z.ZodOptional<z.ZodString>;
                    tokenEndpoint: z.ZodOptional<z.ZodString>;
                    userInfoEndpoint: z.ZodOptional<z.ZodString>;
                    tokenEndpointAuthentication: z.ZodOptional<z.ZodEnum<["client_secret_post", "client_secret_basic"]>>;
                    jwksEndpoint: z.ZodOptional<z.ZodString>;
                    discoveryEndpoint: z.ZodOptional<z.ZodString>;
                    scopes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    pkce: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
                    mapping: z.ZodOptional<z.ZodObject<{
                        id: z.ZodString;
                        email: z.ZodString;
                        emailVerified: z.ZodOptional<z.ZodString>;
                        name: z.ZodString;
                        image: z.ZodOptional<z.ZodString>;
                        extraFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    }, {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    }>>;
                    organizationId: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    providerId: string;
                    domain: string;
                    issuer: string;
                    clientId: string;
                    clientSecret: string;
                    authorizationEndpoint?: string | undefined;
                    scopes?: string[] | undefined;
                    tokenEndpoint?: string | undefined;
                    organizationId?: string | undefined;
                    pkce?: boolean | undefined;
                    userInfoEndpoint?: string | undefined;
                    tokenEndpointAuthentication?: "client_secret_basic" | "client_secret_post" | undefined;
                    jwksEndpoint?: string | undefined;
                    discoveryEndpoint?: string | undefined;
                    mapping?: {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    } | undefined;
                }, {
                    providerId: string;
                    domain: string;
                    issuer: string;
                    clientId: string;
                    clientSecret: string;
                    authorizationEndpoint?: string | undefined;
                    scopes?: string[] | undefined;
                    tokenEndpoint?: string | undefined;
                    organizationId?: string | undefined;
                    pkce?: boolean | undefined;
                    userInfoEndpoint?: string | undefined;
                    tokenEndpointAuthentication?: "client_secret_basic" | "client_secret_post" | undefined;
                    jwksEndpoint?: string | undefined;
                    discoveryEndpoint?: string | undefined;
                    mapping?: {
                        id: string;
                        email: string;
                        name: string;
                        emailVerified?: string | undefined;
                        image?: string | undefined;
                        extraFields?: Record<string, string> | undefined;
                    } | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
                        session: Record<string, any> & {
                            id: string;
                            userId: string;
                            createdAt: Date;
                            updatedAt: Date;
                            expiresAt: Date;
                            token: string;
                            ipAddress?: string | null | undefined;
                            userAgent?: string | null | undefined;
                        };
                        user: Record<string, any> & {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            image?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        signInSSO: {
            <C extends [better_call.Context<"/sign-in/sso", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodOptional<z.ZodString>;
                    organizationSlug: z.ZodOptional<z.ZodString>;
                    domain: z.ZodOptional<z.ZodString>;
                    callbackURL: z.ZodString;
                    errorCallbackURL: z.ZodOptional<z.ZodString>;
                    newUserCallbackURL: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    callbackURL: string;
                    email?: string | undefined;
                    domain?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    organizationSlug?: string | undefined;
                }, {
                    callbackURL: string;
                    email?: string | undefined;
                    domain?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    organizationSlug?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            issuer: {
                                                type: string;
                                                description: string;
                                            };
                                            providerId: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                            errorCallbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                            newUserCallbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                url: string;
                redirect: boolean;
            }>;
            path: "/sign-in/sso";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodOptional<z.ZodString>;
                    organizationSlug: z.ZodOptional<z.ZodString>;
                    domain: z.ZodOptional<z.ZodString>;
                    callbackURL: z.ZodString;
                    errorCallbackURL: z.ZodOptional<z.ZodString>;
                    newUserCallbackURL: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    callbackURL: string;
                    email?: string | undefined;
                    domain?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    organizationSlug?: string | undefined;
                }, {
                    callbackURL: string;
                    email?: string | undefined;
                    domain?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    organizationSlug?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        summary: string;
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            issuer: {
                                                type: string;
                                                description: string;
                                            };
                                            providerId: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                            errorCallbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                            newUserCallbackURL: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
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
        callbackSSO: {
            <C extends [better_call.Context<"/sso/callback/:providerId", {
                method: "GET";
                query: z.ZodObject<{
                    code: z.ZodOptional<z.ZodString>;
                    state: z.ZodString;
                    error: z.ZodOptional<z.ZodString>;
                    error_description: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    state: string;
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state: string;
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>;
                metadata: {
                    isAction: boolean;
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            "302": {
                                description: string;
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : never>;
            path: "/sso/callback/:providerId";
            options: {
                method: "GET";
                query: z.ZodObject<{
                    code: z.ZodOptional<z.ZodString>;
                    state: z.ZodString;
                    error: z.ZodOptional<z.ZodString>;
                    error_description: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    state: string;
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }, {
                    state: string;
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                }>;
                metadata: {
                    isAction: boolean;
                    openapi: {
                        summary: string;
                        description: string;
                        responses: {
                            "302": {
                                description: string;
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    };
    schema: {
        ssoProvider: {
            fields: {
                issuer: {
                    type: "string";
                    required: true;
                };
                oidcConfig: {
                    type: "string";
                    required: false;
                };
                samlConfig: {
                    type: "string";
                    required: false;
                };
                userId: {
                    type: "string";
                    references: {
                        model: string;
                        field: string;
                    };
                };
                providerId: {
                    type: "string";
                    required: true;
                    unique: true;
                };
                organizationId: {
                    type: "string";
                    required: false;
                };
                domain: {
                    type: "string";
                    required: true;
                };
            };
        };
    };
};
interface SSOProvider {
    issuer: string;
    oidcConfig: OIDCConfig;
    userId: string;
    providerId: string;
    organizationId?: string;
}
interface OIDCConfig {
    issuer: string;
    pkce: boolean;
    clientId: string;
    clientSecret: string;
    authorizationEndpoint?: string;
    discoveryEndpoint: string;
    userInfoEndpoint?: string;
    scopes?: string[];
    tokenEndpoint?: string;
    tokenEndpointAuthentication?: "client_secret_post" | "client_secret_basic";
    jwksEndpoint?: string;
    mapping?: {
        id?: string;
        email?: string;
        emailVerified?: string;
        name?: string;
        image?: string;
        extraFields?: Record<string, string>;
    };
}

export { sso };
