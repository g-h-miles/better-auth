import * as better_call from 'better-call';
import { APIError } from 'better-call';
import { z } from 'zod';
import { H as HookEndpointContext } from '../auth-BcCDy1CJ.js';
import 'kysely';
import '../helper-Bi8FQwDD.js';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

interface EmailOTPOptions {
    /**
     * Function to send email verification
     */
    sendVerificationOTP: (data: {
        email: string;
        otp: string;
        type: "sign-in" | "email-verification" | "forget-password";
    }, request?: Request) => Promise<void>;
    /**
     * Length of the OTP
     */
    otpLength?: number;
    /**
     * Expiry time of the OTP in seconds
     */
    expiresIn?: number;
    /**
     * Send email verification on sign-up
     *
     * @Default false
     */
    sendVerificationOnSignUp?: boolean;
    /**
     * A boolean value that determines whether to prevent
     * automatic sign-up when the user is not registered.
     *
     * @Default false
     */
    disableSignUp?: boolean;
}
declare const emailOTP: (options: EmailOTPOptions) => {
    id: "email-otp";
    endpoints: {
        sendVerificationOTP: {
            <C extends [better_call.Context<"/email-otp/send-verification-otp", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    type: z.ZodEnum<["email-verification", "sign-in", "forget-password"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
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
            path: "/email-otp/send-verification-otp";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    type: z.ZodEnum<["email-verification", "sign-in", "forget-password"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
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
        createVerificationOTP: {
            <C extends [better_call.Context<"/email-otp/create-verification-otp", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    type: z.ZodEnum<["email-verification", "sign-in", "forget-password"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : string>;
            path: "/email-otp/create-verification-otp";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    type: z.ZodEnum<["email-verification", "sign-in", "forget-password"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                    openapi: {
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "string";
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
        getVerificationOTP: {
            <C extends [better_call.Context<"/email-otp/get-verification-otp", {
                method: "GET";
                query: z.ZodObject<{
                    email: z.ZodString;
                    type: z.ZodEnum<["email-verification", "sign-in", "forget-password"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
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
                                                otp: {
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
                otp: null;
            } | {
                otp: string;
            }>;
            path: "/email-otp/get-verification-otp";
            options: {
                method: "GET";
                query: z.ZodObject<{
                    email: z.ZodString;
                    type: z.ZodEnum<["email-verification", "sign-in", "forget-password"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }, {
                    type: "sign-in" | "forget-password" | "email-verification";
                    email: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
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
                                                otp: {
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
        verifyEmailOTP: {
            <C extends [better_call.Context<"/email-otp/verify-email", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    otp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    otp: string;
                }, {
                    email: string;
                    otp: string;
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
                token: string;
                status: boolean;
            } | {
                status: boolean;
                token: null;
            }>;
            path: "/email-otp/verify-email";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    otp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    otp: string;
                }, {
                    email: string;
                    otp: string;
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
        signInEmailOTP: {
            <C extends [better_call.Context<"/sign-in/email-otp", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    otp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    otp: string;
                }, {
                    email: string;
                    otp: string;
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
                                                user: {
                                                    $ref: string;
                                                };
                                                session: {
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
                token: string;
            }>;
            path: "/sign-in/email-otp";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    otp: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                    otp: string;
                }, {
                    email: string;
                    otp: string;
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
                                                user: {
                                                    $ref: string;
                                                };
                                                session: {
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
        forgetPasswordEmailOTP: {
            <C extends [better_call.Context<"/forget-password/email-otp", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                }, {
                    email: string;
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
            path: "/forget-password/email-otp";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    email: string;
                }, {
                    email: string;
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
        resetPasswordEmailOTP: {
            <C extends [better_call.Context<"/email-otp/reset-password", {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    otp: z.ZodString;
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                    email: string;
                    otp: string;
                }, {
                    password: string;
                    email: string;
                    otp: string;
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
            path: "/email-otp/reset-password";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    email: z.ZodString;
                    otp: z.ZodString;
                    password: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                    email: string;
                    otp: string;
                }, {
                    password: string;
                    email: string;
                    otp: string;
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
    hooks: {
        after: {
            matcher(context: HookEndpointContext<{
                returned: APIError | Response | Record<string, any>;
                endpoint: better_call.Endpoint;
            }>): boolean;
            handler(ctx: HookEndpointContext): Promise<void>;
        }[];
    };
    $ERROR_CODES: {
        readonly OTP_EXPIRED: "otp expired";
        readonly INVALID_OTP: "invalid otp";
        readonly INVALID_EMAIL: "invalid email";
        readonly USER_NOT_FOUND: "user not found";
    };
};

export { emailOTP };
