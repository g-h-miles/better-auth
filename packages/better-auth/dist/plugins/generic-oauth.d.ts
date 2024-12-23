import * as better_call from 'better-call';
import { j as AuthContext, U as User } from '../auth-BcCDy1CJ.js';
import { z } from 'zod';
import { O as OAuthProvider, a as OAuth2Tokens } from '../index-4d8GiU4g.js';
import 'kysely';
import '../helper-Bi8FQwDD.js';
import 'better-sqlite3';
import 'jose';

/**
 * Configuration interface for generic OAuth providers.
 */
interface GenericOAuthConfig {
    /** Unique identifier for the OAuth provider */
    providerId: string;
    /**
     * URL to fetch OAuth 2.0 configuration.
     * If provided, the authorization and token endpoints will be fetched from this URL.
     */
    discoveryUrl?: string;
    /**
     * URL for the authorization endpoint.
     * Optional if using discoveryUrl.
     */
    authorizationUrl?: string;
    /**
     * URL for the token endpoint.
     * Optional if using discoveryUrl.
     */
    tokenUrl?: string;
    /**
     * URL for the user info endpoint.
     * Optional if using discoveryUrl.
     */
    userInfoUrl?: string;
    /** OAuth client ID */
    clientId: string;
    /** OAuth client secret */
    clientSecret: string;
    /**
     * Array of OAuth scopes to request.
     * @default []
     */
    scopes?: string[];
    /**
     * Custom redirect URI.
     * If not provided, a default URI will be constructed.
     */
    redirectURI?: string;
    /**
     * OAuth response type.
     * @default "code"
     */
    responseType?: string;
    /**
     * Prompt parameter for the authorization request.
     * Controls the authentication experience for the user.
     */
    prompt?: "none" | "login" | "consent" | "select_account";
    /**
     * Whether to use PKCE (Proof Key for Code Exchange)
     * @default false
     */
    pkce?: boolean;
    /**
     * Access type for the authorization request.
     * Use "offline" to request a refresh token.
     */
    accessType?: string;
    /**
     * Custom function to fetch user info.
     * If provided, this function will be used instead of the default user info fetching logic.
     * @param tokens - The OAuth tokens received after successful authentication
     * @returns A promise that resolves to a User object or null
     */
    getUserInfo?: (tokens: OAuth2Tokens) => Promise<User | null>;
    /**
     * Custom function to map the user profile to a User object.
     */
    mapProfileToUser?: (profile: Record<string, any>) => {
        id?: string;
        name?: string;
        email?: string;
        image?: string;
        emailVerified?: boolean;
        [key: string]: any;
    } | Promise<{
        id?: string;
        name?: string;
        email?: string;
        image?: string;
        emailVerified?: boolean;
        [key: string]: any;
    }>;
}
interface GenericOAuthOptions {
    /**
     * Array of OAuth provider configurations.
     */
    config: GenericOAuthConfig[];
}
/**
 * A generic OAuth plugin that can be used to add OAuth support to any provider
 */
declare const genericOAuth: (options: GenericOAuthOptions) => {
    id: "generic-oauth";
    init: (ctx: AuthContext) => {
        context: {
            socialProviders: OAuthProvider<Record<string, any>>[];
        };
    };
    endpoints: {
        signInWithOAuth2: {
            <C extends [better_call.Context<"/sign-in/oauth2", {
                method: "POST";
                query: z.ZodOptional<z.ZodObject<{
                    /**
                     * Redirect to the current URL after the
                     * user has signed in.
                     */
                    currentURL: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: z.ZodObject<{
                    providerId: z.ZodString;
                    callbackURL: z.ZodOptional<z.ZodString>;
                    errorCallbackURL: z.ZodOptional<z.ZodString>;
                    disableRedirect: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    providerId: string;
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    providerId: string;
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
                url: string;
                redirect: boolean;
            }>;
            path: "/sign-in/oauth2";
            options: {
                method: "POST";
                query: z.ZodOptional<z.ZodObject<{
                    /**
                     * Redirect to the current URL after the
                     * user has signed in.
                     */
                    currentURL: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: z.ZodObject<{
                    providerId: z.ZodString;
                    callbackURL: z.ZodOptional<z.ZodString>;
                    errorCallbackURL: z.ZodOptional<z.ZodString>;
                    disableRedirect: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    providerId: string;
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    providerId: string;
                    callbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
        oAuth2Callback: {
            <C extends [better_call.Context<"/oauth2/callback/:providerId", {
                method: "GET";
                query: z.ZodObject<{
                    code: z.ZodOptional<z.ZodString>;
                    error: z.ZodOptional<z.ZodString>;
                    state: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    state?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
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
            }] ? Response : void>;
            path: "/oauth2/callback/:providerId";
            options: {
                method: "GET";
                query: z.ZodObject<{
                    code: z.ZodOptional<z.ZodString>;
                    error: z.ZodOptional<z.ZodString>;
                    state: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    state?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                url: {
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
        readonly INVALID_OAUTH_CONFIGURATION: "Invalid OAuth configuration";
    };
};

export { genericOAuth };
