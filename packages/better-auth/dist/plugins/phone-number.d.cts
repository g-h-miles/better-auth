import * as better_call from 'better-call';
import { z } from 'zod';
import { U as User, I as InferOptionSchema } from '../auth-BqCHpLdr.cjs';
import 'kysely';
import '../helper-Bi8FQwDD.cjs';
import '../index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

interface UserWithPhoneNumber extends User {
    phoneNumber: string;
    phoneNumberVerified: boolean;
}
declare const phoneNumber: (options?: {
    /**
     * Length of the OTP code
     * @default 6
     */
    otpLength?: number;
    /**
     * Send OTP code to the user
     *
     * @param phoneNumber
     * @param code
     * @returns
     */
    sendOTP: (data: {
        phoneNumber: string;
        code: string;
    }, request?: Request) => Promise<void> | void;
    /**
     * Expiry time of the OTP code in seconds
     * @default 300
     */
    expiresIn?: number;
    /**
     * Function to validate phone number
     *
     * by default any string is accepted
     */
    phoneNumberValidator?: (phoneNumber: string) => boolean | Promise<boolean>;
    /**
     * Callback when phone number is verified
     */
    callbackOnVerification?: (data: {
        phoneNumber: string;
        user: UserWithPhoneNumber | null;
    }, request?: Request) => void | Promise<void>;
    /**
     * Sign up user after phone number verification
     *
     * the user will be signed up with the temporary email
     * and the phone number will be updated after verification
     */
    signUpOnVerification?: {
        /**
         * When a user signs up, a temporary email will be need to be created
         * to sign up the user. This function should return a temporary email
         * for the user given the phone number
         *
         * @param phoneNumber
         * @returns string (temporary email)
         */
        getTempEmail: (phoneNumber: string) => string;
        /**
         * When a user signs up, a temporary name will be need to be created
         * to sign up the user. This function should return a temporary name
         * for the user given the phone number
         *
         * @param phoneNumber
         * @returns string (temporary name)
         *
         * @default phoneNumber - the phone number will be used as the name
         */
        getTempName?: (phoneNumber: string) => string;
    };
    /**
     * Custom schema for the admin plugin
     */
    schema?: InferOptionSchema<typeof schema>;
}) => {
    id: "phone-number";
    endpoints: {
        signInPhoneNumber: {
            <C extends [better_call.Context<"/sign-in/phone-number", {
                method: "POST";
                body: z.ZodObject<{
                    phoneNumber: z.ZodString;
                    password: z.ZodString;
                    rememberMe: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                    phoneNumber: string;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    phoneNumber: string;
                    rememberMe?: boolean | undefined;
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
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                token: string;
            }>;
            path: "/sign-in/phone-number";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    phoneNumber: z.ZodString;
                    password: z.ZodString;
                    rememberMe: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    password: string;
                    phoneNumber: string;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    phoneNumber: string;
                    rememberMe?: boolean | undefined;
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
                            400: {
                                description: string;
                            };
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        sendPhoneNumberOTP: {
            <C extends [better_call.Context<"/phone-number/send-otp", {
                method: "POST";
                body: z.ZodObject<{
                    phoneNumber: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    phoneNumber: string;
                }, {
                    phoneNumber: string;
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
                                                message: {
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
                code: string;
            }>;
            path: "/phone-number/send-otp";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    phoneNumber: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    phoneNumber: string;
                }, {
                    phoneNumber: string;
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
                                                message: {
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
        verifyPhoneNumber: {
            <C extends [better_call.Context<"/phone-number/verify", {
                method: "POST";
                body: z.ZodObject<{
                    /**
                     * Phone number
                     */
                    phoneNumber: z.ZodString;
                    /**
                     * OTP code
                     */
                    code: z.ZodString;
                    /**
                     * Disable session creation after verification
                     * @default false
                     */
                    disableSession: z.ZodOptional<z.ZodBoolean>;
                    /**
                     * This checks if there is a session already
                     * and updates the phone number with the provided
                     * phone number
                     */
                    updatePhoneNumber: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    phoneNumber: string;
                    disableSession?: boolean | undefined;
                    updatePhoneNumber?: boolean | undefined;
                }, {
                    code: string;
                    phoneNumber: string;
                    disableSession?: boolean | undefined;
                    updatePhoneNumber?: boolean | undefined;
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
                            400: {
                                description: string;
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
                token: null;
                status: boolean;
            } | null>;
            path: "/phone-number/verify";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    /**
                     * Phone number
                     */
                    phoneNumber: z.ZodString;
                    /**
                     * OTP code
                     */
                    code: z.ZodString;
                    /**
                     * Disable session creation after verification
                     * @default false
                     */
                    disableSession: z.ZodOptional<z.ZodBoolean>;
                    /**
                     * This checks if there is a session already
                     * and updates the phone number with the provided
                     * phone number
                     */
                    updatePhoneNumber: z.ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    phoneNumber: string;
                    disableSession?: boolean | undefined;
                    updatePhoneNumber?: boolean | undefined;
                }, {
                    code: string;
                    phoneNumber: string;
                    disableSession?: boolean | undefined;
                    updatePhoneNumber?: boolean | undefined;
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
                            400: {
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
        user: {
            fields: {
                phoneNumber: {
                    type: "string";
                    required: false;
                    unique: true;
                    returned: true;
                };
                phoneNumberVerified: {
                    type: "boolean";
                    required: false;
                    returned: true;
                    input: false;
                };
            };
        };
    };
    $ERROR_CODES: {
        readonly INVALID_PHONE_NUMBER: "Invalid phone number";
        readonly INVALID_PHONE_NUMBER_OR_PASSWORD: "Invalid phone number or password";
        readonly UNEXPECTED_ERROR: "Unexpected error";
        readonly OTP_NOT_FOUND: "OTP not found";
    };
};
declare const schema: {
    user: {
        fields: {
            phoneNumber: {
                type: "string";
                required: false;
                unique: true;
                returned: true;
            };
            phoneNumberVerified: {
                type: "boolean";
                required: false;
                returned: true;
                input: false;
            };
        };
    };
};

export { type UserWithPhoneNumber, phoneNumber };
