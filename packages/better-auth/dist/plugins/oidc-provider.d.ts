import * as better_call from 'better-call';
import { z } from 'zod';
import { H as HookEndpointContext } from '../auth-BcCDy1CJ.js';
import 'kysely';
import '../helper-Bi8FQwDD.js';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

interface OIDCOptions {
    /**
     * The amount of time in seconds that the access token is valid for.
     *
     * @default 3600 (1 hour) - Recommended by the OIDC spec
     */
    accessTokenExpiresIn?: number;
    /**
     * Allow dynamic client registration.
     */
    allowDynamicClientRegistration?: boolean;
    /**
     * The metadata for the OpenID Connect provider.
     */
    metadata?: Partial<OIDCMetadata>;
    /**
     * The amount of time in seconds that the refresh token is valid for.
     *
     * @default 604800 (7 days) - Recommended by the OIDC spec
     */
    refreshTokenExpiresIn?: number;
    /**
     * The amount of time in seconds that the authorization code is valid for.
     *
     * @default 600 (10 minutes) - Recommended by the OIDC spec
     */
    codeExpiresIn?: number;
    /**
     * The scopes that the client is allowed to request.
     *
     * @see https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims
     * @default
     * ```ts
     * ["openid", "profile", "email", "offline_access"]
     * ```
     */
    scopes?: string[];
    /**
     * The default scope to use if the client does not provide one.
     *
     * @default "openid"
     */
    defaultScope?: string;
    /**
     * A URL to the consent page where the user will be redirected if the client
     * requests consent.
     *
     * After the user consents, they should be redirected by the client to the
     * `redirect_uri` with the authorization code.
     *
     * When the server redirects the user to the consent page, it will include the
     * following query parameters:
     * authorization code.
     * - `client_id` - The ID of the client.
     * - `scope` - The requested scopes.
     * - `code` - The authorization code.
     *
     * once the user consents, you need to call the `/oauth2/consent` endpoint
     * with the code and `accept: true` to complete the authorization. Which will
     * then return the client to the `redirect_uri` with the authorization code.
     *
     * @example
     * ```ts
     * consentPage: "/oauth/authorize"
     * ```
     */
    consentPage?: string;
    /**
     * The HTML for the consent page. This is used if `consentPage` is not
     * provided. This should be a function that returns an HTML string.
     * The function will be called with the following props:
     */
    getConsentHTML?: (props: {
        clientId: string;
        clientName: string;
        clientIcon?: string;
        clientMetadata: Record<string, any> | null;
        code: string;
        scopes: string[];
    }) => string;
    /**
     * The URL to the login page. This is used if the client requests the `login`
     * prompt.
     */
    loginPage: string;
    /**
     * Weather to require PKCE (proof key code exchange) or not
     *
     * According to OAuth2.1 spec this should be required. But in any
     * case if you want to disable this you can use this options.
     *
     * @default true
     */
    requirePKCE?: boolean;
    /**
     * Allow plain to be used as a code challenge method.
     *
     * @default true
     */
    allowPlainCodeChallengeMethod?: boolean;
    /**
     * Custom function to generate a client ID.
     */
    generateClientId?: () => string;
    /**
     * Custom function to generate a client secret.
     */
    generateClientSecret?: () => string;
}
interface Client {
    /**
     * Client ID
     *
     * size 32
     *
     * as described on https://www.rfc-editor.org/rfc/rfc6749.html#section-2.2
     */
    clientId: string;
    /**
     * Client Secret
     *
     * A secret for the client, if required by the authorization server.
     *
     * size 32
     */
    clientSecret: string;
    /**
     * The client type
     *
     * as described on https://www.rfc-editor.org/rfc/rfc6749.html#section-2.1
     *
     * - web - A web application
     * - native - A mobile application
     * - user-agent-based - A user-agent-based application
     */
    type: "web" | "native" | "user-agent-based";
    /**
     * List of registered redirect URLs. Must include the whole URL, including the protocol, port,
     * and path.
     *
     * For example, `https://example.com/auth/callback`
     */
    redirectURLs: string[];
    /**
     * The name of the client.
     */
    name: string;
    /**
     * The icon of the client.
     */
    icon?: string;
    /**
     * Additional metadata about the client.
     */
    metadata: {
        [key: string]: any;
    } | null;
    /**
     * Whether the client is disabled or not.
     */
    disabled: boolean;
}
interface OIDCMetadata {
    /**
     * The issuer identifier, this is the URL of the provider and can be used to verify
     * the `iss` claim in the ID token.
     *
     * default: the base URL of the server (e.g. `https://example.com`)
     */
    issuer: string;
    /**
     * The URL of the authorization endpoint.
     *
     * @default `/oauth2/authorize`
     */
    authorization_endpoint: string;
    /**
     * The URL of the token endpoint.
     *
     * @default `/oauth2/token`
     */
    token_endpoint: string;
    /**
     * The URL of the userinfo endpoint.
     *
     * @default `/oauth2/userinfo`
     */
    userInfo_endpoint: string;
    /**
     * The URL of the jwks_uri endpoint.
     *
     * For JWKS to work, you must install the `jwt` plugin.
     *
     * This value is automatically set to `/jwks` if the `jwt` plugin is installed.
     *
     * @default `/jwks`
     */
    jwks_uri: string;
    /**
     * The URL of the dynamic client registration endpoint.
     *
     * @default `/oauth2/register`
     */
    registration_endpoint: string;
    /**
     * Supported scopes.
     */
    scopes_supported: string[];
    /**
     * Supported response types.
     *
     * only `code` is supported.
     */
    response_types_supported: ["code"];
    /**
     * Supported response modes.
     *
     * `query`: the authorization code is returned in the query string
     *
     * only `query` is supported.
     */
    response_modes_supported: ["query"];
    /**
     * Supported grant types.
     *
     * only `authorization_code` is supported.
     */
    grant_types_supported: ["authorization_code"];
    /**
     * acr_values supported.
     *
     * - `urn:mace:incommon:iap:silver`: Silver level of assurance
     * - `urn:mace:incommon:iap:bronze`: Bronze level of assurance
     *
     * only `urn:mace:incommon:iap:silver` and `urn:mace:incommon:iap:bronze` are supported.
     *
     *
     * @default
     * ["urn:mace:incommon:iap:silver", "urn:mace:incommon:iap:bronze"]
     * @see https://incommon.org/federation/attributes.html
     */
    acr_values_supported: string[];
    /**
     * Supported subject types.
     *
     * pairwise: the subject identifier is unique to the client
     * public: the subject identifier is unique to the server
     *
     * only `public` is supported.
     */
    subject_types_supported: ["public"];
    /**
     * Supported ID token signing algorithms.
     *
     * only `RS256` and `none` are supported.
     *
     * @default
     * ["RS256", "none"]
     */
    id_token_signing_alg_values_supported: ("RS256" | "none")[];
    /**
     * Supported token endpoint authentication methods.
     *
     * only `client_secret_basic` and `client_secret_post` are supported.
     *
     * @default
     * ["client_secret_basic", "client_secret_post"]
     */
    token_endpoint_auth_methods_supported: [
        "client_secret_basic",
        "client_secret_post"
    ];
    /**
     * Supported claims.
     *
     * @default
     * ["sub", "iss", "aud", "exp", "nbf", "iat", "jti", "email", "email_verified", "name"]
     */
    claims_supported: string[];
}

/**
 * OpenID Connect (OIDC) plugin for Better Auth. This plugin implements the
 * authorization code flow and the token exchange flow. It also implements the
 * userinfo endpoint.
 *
 * @param options - The options for the OIDC plugin.
 * @returns A Better Auth plugin.
 */
declare const oidcProvider: (options: OIDCOptions) => {
    id: "oidc";
    hooks: {
        after: {
            matcher(): true;
            handler: (ctx: HookEndpointContext) => Promise<Response | undefined>;
        }[];
    };
    endpoints: {
        getOpenIdConfig: {
            <C extends [(better_call.Context<"/.well-known/openid-configuration", {
                method: "GET";
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : OIDCMetadata>;
            path: "/.well-known/openid-configuration";
            options: {
                method: "GET";
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        oAuth2authorize: {
            <C extends [better_call.Context<"/oauth2/authorize", {
                method: "GET";
                query: z.ZodRecord<z.ZodString, z.ZodAny>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : Response>;
            path: "/oauth2/authorize";
            options: {
                method: "GET";
                query: z.ZodRecord<z.ZodString, z.ZodAny>;
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        oAuthConsent: {
            <C extends [better_call.Context<"/oauth2/consent", {
                method: "POST";
                body: z.ZodObject<{
                    accept: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    accept: boolean;
                }, {
                    accept: boolean;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
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
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                redirectURI: string;
            }>;
            path: "/oauth2/consent";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    accept: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    accept: boolean;
                }, {
                    accept: boolean;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
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
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        oAuth2token: {
            <C extends [better_call.Context<"/oauth2/token", {
                method: "POST";
                body: z.ZodAny;
                metadata: {
                    isAction: boolean;
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                access_token: string;
                token_type: string;
                expires_in: number;
                refresh_token: string;
                scope: string;
            } | {
                access_token: string;
                token_type: string;
                expires_in: number;
                refresh_token: string | undefined;
                scope: string;
                id_token: string | undefined;
            }>;
            path: "/oauth2/token";
            options: {
                method: "POST";
                body: z.ZodAny;
                metadata: {
                    isAction: boolean;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        oAuth2userInfo: {
            <C extends [(better_call.Context<"/oauth2/userinfo", {
                method: "GET";
                metadata: {
                    isAction: boolean;
                };
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                email: string | undefined;
                name: string | undefined;
                picture: string | null | undefined;
                given_name: string | undefined;
                family_name: string | undefined;
                email_verified: boolean | undefined;
            }>;
            path: "/oauth2/userinfo";
            options: {
                method: "GET";
                metadata: {
                    isAction: boolean;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        registerOAuthApplication: {
            <C extends [better_call.Context<"/oauth2/register", {
                method: "POST";
                body: z.ZodObject<{
                    name: z.ZodString;
                    icon: z.ZodOptional<z.ZodString>;
                    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    redirectURLs: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    redirectURLs: string[];
                    metadata?: Record<string, any> | undefined;
                    icon?: string | undefined;
                }, {
                    name: string;
                    redirectURLs: string[];
                    metadata?: Record<string, any> | undefined;
                    icon?: string | undefined;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : Client>;
            path: "/oauth2/register";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    name: z.ZodString;
                    icon: z.ZodOptional<z.ZodString>;
                    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    redirectURLs: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    redirectURLs: string[];
                    metadata?: Record<string, any> | undefined;
                    icon?: string | undefined;
                }, {
                    name: string;
                    redirectURLs: string[];
                    metadata?: Record<string, any> | undefined;
                    icon?: string | undefined;
                }>;
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        getOAuthClient: {
            <C extends [better_call.Context<"/oauth2/client/:id", {
                method: "GET";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
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
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                clientId: string;
                name: string;
                icon: string;
            }>;
            path: "/oauth2/client/:id";
            options: {
                method: "GET";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    session: {
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
                        user: Record<string, any> & {
                            id: string;
                            email: string;
                            emailVerified: boolean;
                            name: string;
                            createdAt: Date;
                            updatedAt: Date;
                            image?: string | null | undefined;
                        };
                    };
                }>, better_call.EndpointOptions>[];
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    };
    schema: {
        oauthApplication: {
            modelName: string;
            fields: {
                name: {
                    type: "string";
                };
                icon: {
                    type: "string";
                    required: false;
                };
                metadata: {
                    type: "string";
                    required: false;
                };
                clientId: {
                    type: "string";
                    unique: true;
                };
                clientSecret: {
                    type: "string";
                };
                redirectURLs: {
                    type: "string";
                };
                type: {
                    type: "string";
                };
                disabled: {
                    type: "boolean";
                    required: false;
                    defaultValue: false;
                };
                userId: {
                    type: "string";
                    required: false;
                };
                createdAt: {
                    type: "date";
                };
                updatedAt: {
                    type: "date";
                };
            };
        };
        oauthAccessToken: {
            modelName: string;
            fields: {
                accessToken: {
                    type: "string";
                    unique: true;
                };
                refreshToken: {
                    type: "string";
                    unique: true;
                };
                accessTokenExpiresAt: {
                    type: "date";
                };
                refreshTokenExpiresAt: {
                    type: "date";
                };
                clientId: {
                    type: "string";
                };
                userId: {
                    type: "string";
                    required: false;
                };
                scopes: {
                    type: "string";
                };
                createdAt: {
                    type: "date";
                };
                updatedAt: {
                    type: "date";
                };
            };
        };
        oauthConsent: {
            modelName: string;
            fields: {
                clientId: {
                    type: "string";
                };
                userId: {
                    type: "string";
                };
                scopes: {
                    type: "string";
                };
                createdAt: {
                    type: "date";
                };
                updatedAt: {
                    type: "date";
                };
                consentGiven: {
                    type: "boolean";
                };
            };
        };
    };
};

export { oidcProvider };
