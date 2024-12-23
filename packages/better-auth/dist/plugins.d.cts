export { O as OrganizationOptions, o as organization } from './index-DvinPl7S.cjs';
export { TwoFactorOptions, TwoFactorProvider, TwoFactorTable, UserWithTwoFactor, twoFactor, twoFactorClient } from './plugins/two-factor.cjs';
export { username } from './plugins/username.cjs';
export { bearer } from './plugins/bearer.cjs';
import { H as HookEndpointContext } from './auth-BqCHpLdr.cjs';
export { A as AuthEndpoint, h as AuthMiddleware, d as BetterAuthPlugin, c as HookAfterHandler, b as HookBeforeHandler, I as InferOptionSchema, e as InferPluginErrorCodes, P as PluginSchema, g as createAuthEndpoint, f as createAuthMiddleware, o as optionsMiddleware } from './auth-BqCHpLdr.cjs';
export { H as HIDE_METADATA } from './hide-metadata-DEHJp1rk.cjs';
export { magicLink } from './plugins/magic-link.cjs';
export { UserWithPhoneNumber, phoneNumber } from './plugins/phone-number.cjs';
export { AnonymousOptions, UserWithAnonymous, anonymous } from './plugins/anonymous.cjs';
export { SessionWithImpersonatedBy, UserWithRole, admin } from './plugins/admin.cjs';
export { genericOAuth } from './plugins/generic-oauth.cjs';
export { JwtOptions, jwt } from './plugins/jwt.cjs';
export { multiSession } from './plugins/multi-session.cjs';
export { emailOTP } from './plugins/email-otp.cjs';
export { oneTap } from './plugins/one-tap.cjs';
import * as better_call from 'better-call';
import { APIError } from 'better-call';
import { z } from 'zod';
export { customSession } from './plugin/custom-session.cjs';
export { OpenAPIOptions, openAPI } from './plugins/open-api.cjs';
export { oidcProvider } from './plugins/oidc-provider.cjs';
import './helper-Bi8FQwDD.cjs';
import './plugins/access.cjs';
import '@better-fetch/fetch';
import 'kysely';
import './index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

interface OAuthProxyOptions {
    /**
     * The current URL of the application.
     * The plugin will attempt to infer the current URL from your environment
     * by checking the base URL from popular hosting providers,
     * from the request URL if invoked by a client,
     * or as a fallback, from the `baseURL` in your auth config.
     * If the URL is not inferred correctly, you can provide a value here."
     */
    currentURL?: string;
}
/**
 * A proxy plugin, that allows you to proxy OAuth requests.
 * Useful for development and preview deployments where
 * the redirect URL can't be known in advance to add to the OAuth provider.
 */
declare const oAuthProxy: (opts?: OAuthProxyOptions) => {
    id: "oauth-proxy";
    endpoints: {
        oAuthProxy: {
            <C extends [better_call.Context<"/oauth-proxy-callback", {
                method: "GET";
                query: z.ZodObject<{
                    callbackURL: z.ZodString;
                    cookies: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    callbackURL: string;
                    cookies: string;
                }, {
                    callbackURL: string;
                    cookies: string;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        parameters: {
                            in: "query";
                            name: string;
                            required: true;
                            description: string;
                        }[];
                        responses: {
                            302: {
                                description: string;
                                headers: {
                                    Location: {
                                        description: string;
                                        schema: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : never>;
            path: "/oauth-proxy-callback";
            options: {
                method: "GET";
                query: z.ZodObject<{
                    callbackURL: z.ZodString;
                    cookies: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    callbackURL: string;
                    cookies: string;
                }, {
                    callbackURL: string;
                    cookies: string;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        parameters: {
                            in: "query";
                            name: string;
                            required: true;
                            description: string;
                        }[];
                        responses: {
                            302: {
                                description: string;
                                headers: {
                                    Location: {
                                        description: string;
                                        schema: {
                                            type: string;
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
    hooks: {
        after: {
            matcher(context: HookEndpointContext<{
                returned: APIError | Response | Record<string, any>;
                endpoint: better_call.Endpoint;
            }>): boolean;
            handler: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, void>, better_call.EndpointOptions>;
        }[];
        before: {
            matcher(context: HookEndpointContext): boolean;
            handler(ctx: HookEndpointContext): Promise<{
                context: HookEndpointContext;
            }>;
        }[];
    };
};

export { oAuthProxy };
