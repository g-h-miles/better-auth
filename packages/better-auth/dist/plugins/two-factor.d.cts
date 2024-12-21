import * as better_call from 'better-call';
import { APIError } from 'better-call';
import { z } from 'zod';
import { I as InferOptionSchema, U as User, A as AuthEndpoint, S as Session, H as HookEndpointContext } from '../auth-CfuNyKFj.cjs';
import { L as LiteralString } from '../helper-Bi8FQwDD.cjs';
import * as _better_fetch_fetch from '@better-fetch/fetch';
import 'kysely';
import '../index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

interface BackupCodeOptions {
    /**
     * The amount of backup codes to generate
     *
     * @default 10
     */
    amount?: number;
    /**
     * The length of the backup codes
     *
     * @default 10
     */
    length?: number;
    customBackupCodesGenerate?: () => string[];
}

interface OTPOptions {
    /**
     * How long the opt will be valid for in
     * minutes
     *
     * @default "3 mins"
     */
    period?: number;
    /**
     * Number of digits for the OTP code
     *
     * @default 6
     */
    digits?: number;
    /**
     * Send the otp to the user
     *
     * @param user - The user to send the otp to
     * @param otp - The otp to send
     * @param request - The request object
     * @returns void | Promise<void>
     */
    sendOTP?: (
    /**
     * The user to send the otp to
     * @type UserWithTwoFactor
     * @default UserWithTwoFactors
     */
    data: {
        user: UserWithTwoFactor;
        otp: string;
    }, 
    /**
     * The request object
     */
    request?: Request) => Promise<void> | void;
}

type TOTPOptions = {
    /**
     * Issuer
     */
    issuer?: string;
    /**
     * How many digits the otp to be
     *
     * @default 6
     */
    digits?: 6 | 8;
    /**
     * Period for otp in seconds.
     * @default 30
     */
    period?: number;
    /**
     * Backup codes configuration
     */
    backupCodes?: BackupCodeOptions;
    /**
     * Disable totp
     */
    disable?: boolean;
};

declare const schema: {
    user: {
        fields: {
            twoFactorEnabled: {
                type: "boolean";
                required: false;
                defaultValue: false;
                input: false;
            };
        };
    };
    twoFactor: {
        fields: {
            secret: {
                type: "string";
                required: true;
                returned: false;
            };
            backupCodes: {
                type: "string";
                required: true;
                returned: false;
            };
            userId: {
                type: "string";
                required: true;
                returned: false;
                references: {
                    model: string;
                    field: string;
                };
            };
        };
    };
};

interface TwoFactorOptions {
    /**
     * Application Name
     */
    issuer?: string;
    /**
     * TOTP OPtions
     */
    totpOptions?: Omit<TOTPOptions, "issuer">;
    /**
     * OTP Options
     */
    otpOptions?: OTPOptions;
    /**
     * Backup code options
     */
    backupCodeOptions?: BackupCodeOptions;
    /**
     * Skip verification on enabling two factor authentication.
     * @default false
     */
    skipVerificationOnEnable?: boolean;
    /**
     * Custom schema for the two factor plugin
     */
    schema?: InferOptionSchema<typeof schema>;
}
interface UserWithTwoFactor extends User {
    /**
     * If the user has enabled two factor authentication.
     */
    twoFactorEnabled: boolean;
}
interface TwoFactorProvider {
    id: LiteralString;
    endpoints?: Record<string, AuthEndpoint>;
}
interface TwoFactorTable {
    userId: string;
    secret: string;
    backupCodes: string;
    enabled: boolean;
}

declare const twoFactorClient: (options?: {
    /**
     * a redirect function to call if a user needs to verify
     * their two factor
     */
    onTwoFactorRedirect?: () => void | Promise<void>;
}) => {
    id: "two-factor";
    $InferServerPlugin: ReturnType<typeof twoFactor>;
    atomListeners: {
        matcher: (path: string) => boolean;
        signal: "$sessionSignal";
    }[];
    pathMethods: {
        "/two-factor/disable": "POST";
        "/two-factor/enable": "POST";
        "/two-factor/send-otp": "POST";
        "/two-factor/generate-backup-codes": "POST";
    };
    fetchPlugins: {
        id: string;
        name: string;
        hooks: {
            onSuccess(context: _better_fetch_fetch.SuccessContext<any>): Promise<void>;
        };
    }[];
};

declare const twoFactor: (options?: TwoFactorOptions) => {
    id: "two-factor";
    endpoints: {
        enableTwoFactor: {
            <C extends [better_call.Context<"/two-factor/enable", {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
                metadata: {
                    openapi: {
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
                                                totpURI: {
                                                    type: string;
                                                    description: string;
                                                };
                                                backupCodes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                    description: string;
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
                totpURI: string;
                backupCodes: string[];
            }>;
            path: "/two-factor/enable";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
                metadata: {
                    openapi: {
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
                                                totpURI: {
                                                    type: string;
                                                    description: string;
                                                };
                                                backupCodes: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                    };
                                                    description: string;
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
        disableTwoFactor: {
            <C extends [better_call.Context<"/two-factor/disable", {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
                metadata: {
                    openapi: {
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
                                                status: {
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
                status: boolean;
            }>;
            path: "/two-factor/disable";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
                metadata: {
                    openapi: {
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
                                                status: {
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
        verifyBackupCode: {
            <C extends [better_call.Context<"/two-factor/verify-backup-code", {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                    disableSession: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    disableSession?: boolean | undefined;
                }, {
                    code: string;
                    disableSession?: boolean | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: UserWithTwoFactor;
                session: {
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
                    user: UserWithTwoFactor;
                } & {
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
                } & {
                    session: Session & Record<string, any>;
                    user: User & Record<string, any>;
                };
            }>;
            path: "/two-factor/verify-backup-code";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                    disableSession: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    disableSession?: boolean | undefined;
                }, {
                    code: string;
                    disableSession?: boolean | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        generateBackupCodes: {
            <C extends [better_call.Context<"/two-factor/generate-backup-codes", {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
                status: boolean;
                backupCodes: string[];
            }>;
            path: "/two-factor/generate-backup-codes";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
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
        viewBackupCodes: {
            <C extends [better_call.Context<"/two-factor/view-backup-codes", {
                method: "GET";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
                backupCodes: string[];
            }>;
            path: "/two-factor/view-backup-codes";
            options: {
                method: "GET";
                body: z.ZodObject<{
                    userId: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    userId: string;
                }, {
                    userId: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        sendTwoFactorOTP: {
            <C extends [better_call.Context<"/two-factor/send-otp", {
                method: "POST";
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
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
                                                status: {
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
                status: boolean;
            }>;
            path: "/two-factor/send-otp";
            options: {
                method: "POST";
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
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
                                                status: {
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
        verifyTwoFactorOTP: {
            <C extends [better_call.Context<"/two-factor/verify-otp", {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                }, {
                    code: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
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
                                                status: {
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
            path: "/two-factor/verify-otp";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                }, {
                    code: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
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
                                                status: {
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
        generateTOTP: {
            <C extends [(better_call.Context<"/totp/generate", {
                method: "POST";
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
                                                code: {
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
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                code: string;
            }>;
            path: "/totp/generate";
            options: {
                method: "POST";
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
                                                code: {
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
        getTOTPURI: {
            <C extends [better_call.Context<"/two-factor/get-totp-uri", {
                method: "POST";
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
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                metadata: {
                    openapi: {
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
                                                totpURI: {
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
                totpURI: string;
            }>;
            path: "/two-factor/get-totp-uri";
            options: {
                method: "POST";
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
                body: z.ZodObject<{
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                }, {
                    password: string;
                }>;
                metadata: {
                    openapi: {
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
                                                totpURI: {
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
        verifyTOTP: {
            <C extends [better_call.Context<"/two-factor/verify-totp", {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                }, {
                    code: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
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
                                                status: {
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
            path: "/two-factor/verify-totp";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    code: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                }, {
                    code: string;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }, {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
                    session: {
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
                        user: UserWithTwoFactor;
                    };
                } | {
                    valid: () => Promise<{
                        response: {
                            body: any;
                            status: number;
                            statusText: string;
                            headers: Record<string, string> | undefined;
                        };
                        body: {
                            token: string;
                        };
                        _flag: "json";
                    }>;
                    invalid: () => Promise<never>;
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
                }>, {
                    body: z.ZodObject<{
                        trustDevice: z.ZodOptional<z.ZodBoolean>;
                    }, "strip", z.ZodTypeAny, {
                        trustDevice?: boolean | undefined;
                    }, {
                        trustDevice?: boolean | undefined;
                    }>;
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
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
                                                status: {
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
    options: TwoFactorOptions | undefined;
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
                body: {
                    twoFactorRedirect: boolean;
                };
                _flag: "json";
            } | undefined>, better_call.EndpointOptions>;
        }[];
    };
    schema: {
        user: {
            fields: {
                twoFactorEnabled: {
                    type: "boolean";
                    required: false;
                    defaultValue: false;
                    input: false;
                };
            };
        };
        twoFactor: {
            fields: {
                secret: {
                    type: "string";
                    required: true;
                    returned: false;
                };
                backupCodes: {
                    type: "string";
                    required: true;
                    returned: false;
                };
                userId: {
                    type: "string";
                    required: true;
                    returned: false;
                    references: {
                        model: string;
                        field: string;
                    };
                };
            };
        };
    };
    rateLimit: {
        pathMatcher(path: string): boolean;
        window: number;
        max: number;
    }[];
};

export { type TwoFactorOptions, type TwoFactorProvider, type TwoFactorTable, type UserWithTwoFactor, twoFactor, twoFactorClient };
