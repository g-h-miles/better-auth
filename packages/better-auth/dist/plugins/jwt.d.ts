import * as better_call from 'better-call';
import { U as User, S as Session, I as InferOptionSchema } from '../auth-BcCDy1CJ.js';
import 'kysely';
import 'zod';
import '../helper-Bi8FQwDD.js';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

declare const schema: {
    jwks: {
        fields: {
            publicKey: {
                type: "string";
                required: true;
            };
            privateKey: {
                type: "string";
                required: true;
            };
            createdAt: {
                type: "date";
                required: true;
            };
        };
    };
};

type JWKOptions = {
    alg: "EdDSA";
    crv?: "Ed25519" | "Ed448";
} | {
    alg: "ES256";
    crv?: never;
} | {
    alg: "RS256";
    modulusLength?: number;
} | {
    alg: "PS256";
    modulusLength?: number;
} | {
    alg: "ECDH-ES";
    crv?: "P-256" | "P-384" | "P-521";
} | {
    alg: "ES512";
    crv?: never;
};
interface JwtOptions {
    jwks?: {
        /**
         * Key pair configuration
         * @description A subset of the options available for the generateKeyPair function
         *
         * @see https://github.com/panva/jose/blob/main/src/runtime/node/generate.ts
         *
         * @default { alg: 'EdDSA', crv: 'Ed25519' }
         */
        keyPairConfig?: JWKOptions;
        /**
         * Disable private key encryption
         * @description Disable the encryption of the private key in the database
         *
         * @default false
         */
        disablePrivateKeyEncryption?: boolean;
    };
    jwt?: {
        issuer?: string;
        audience?: string;
        /**
         * Set the "exp" (Expiration Time) Claim.
         *
         * - If a `number` is passed as an argument it is used as the claim directly.
         * - If a `Date` instance is passed as an argument it is converted to unix timestamp and used as the
         *   claim.
         * - If a `string` is passed as an argument it is resolved to a time span, and then added to the
         *   current unix timestamp and used as the claim.
         *
         * Format used for time span should be a number followed by a unit, such as "5 minutes" or "1
         * day".
         *
         * Valid units are: "sec", "secs", "second", "seconds", "s", "minute", "minutes", "min", "mins",
         * "m", "hour", "hours", "hr", "hrs", "h", "day", "days", "d", "week", "weeks", "w", "year",
         * "years", "yr", "yrs", and "y". It is not possible to specify months. 365.25 days is used as an
         * alias for a year.
         *
         * If the string is suffixed with "ago", or prefixed with a "-", the resulting time span gets
         * subtracted from the current unix timestamp. A "from now" suffix can also be used for
         * readability when adding to the current unix timestamp.
         *
         * @default 15m
         */
        expirationTime?: number | string | Date;
        definePayload?: (session: {
            user: User & Record<string, any>;
            session: Session & Record<string, any>;
        }) => Promise<Record<string, any>> | Record<string, any>;
    };
    /**
     * Custom schema for the admin plugin
     */
    schema?: InferOptionSchema<typeof schema>;
}
declare const jwt: (options?: JwtOptions) => {
    id: "jwt";
    endpoints: {
        getJwks: {
            <C extends [(better_call.Context<"/jwks", {
                method: "GET";
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
                                                keys: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            kid: {
                                                                type: string;
                                                            };
                                                            kty: {
                                                                type: string;
                                                            };
                                                            use: {
                                                                type: string;
                                                            };
                                                            alg: {
                                                                type: string;
                                                            };
                                                            n: {
                                                                type: string;
                                                            };
                                                            e: {
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
                    };
                };
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                keys: any[];
            }>;
            path: "/jwks";
            options: {
                method: "GET";
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
                                                keys: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            kid: {
                                                                type: string;
                                                            };
                                                            kty: {
                                                                type: string;
                                                            };
                                                            use: {
                                                                type: string;
                                                            };
                                                            alg: {
                                                                type: string;
                                                            };
                                                            n: {
                                                                type: string;
                                                            };
                                                            e: {
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
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        getToken: {
            <C extends [better_call.Context<"/token", {
                method: "GET";
                requireHeaders: true;
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
                                                token: {
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
                token: string;
            }>;
            path: "/token";
            options: {
                method: "GET";
                requireHeaders: true;
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
                                                token: {
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
    schema: {
        jwks: {
            fields: {
                publicKey: {
                    type: "string";
                    required: true;
                };
                privateKey: {
                    type: "string";
                    required: true;
                };
                createdAt: {
                    type: "date";
                    required: true;
                };
            };
        };
    };
};

export { type JwtOptions, jwt };
