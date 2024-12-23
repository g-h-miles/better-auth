import * as nanostores from 'nanostores';
import { atom } from 'nanostores';
import * as _better_fetch_fetch from '@better-fetch/fetch';
import { BetterFetch, BetterFetchOption } from '@better-fetch/fetch';
import * as _simplewebauthn_types from '@simplewebauthn/types';
import { AttestationConveyancePreference, AuthenticatorTransportFuture, CredentialDeviceType, PublicKeyCredentialCreationOptionsJSON, AuthenticationResponseJSON } from '@simplewebauthn/types';
import * as better_call from 'better-call';
import { z } from 'zod';
import { I as InferOptionSchema } from '../auth-CfuNyKFj.cjs';
import 'kysely';
import '../helper-Bi8FQwDD.cjs';
import '../index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

interface PasskeyOptions {
    name?: string;
    /**
     * A unique identifier for your website. 'localhost' is okay for
     * local dev
     *
     * @default "localhost"
     */
    rpID?: string;
    /**
     * Human-readable title for your website
     *
     * @default "Better Auth"
     */
    rpName?: string;
    /**
     * The URL at which registrations and authentications should occur.
     * 'http://localhost' and 'http://localhost:PORT' are also valid.
     * Do NOT include any trailing /
     *
     * if this isn't provided. The client itself will
     * pass this value.
     */
    origin?: string | null;
    /**
     * Advanced options
     */
    advanced?: {
        webAuthnChallengeCookie?: string;
    };
    /**
     * Schema for the passkey model
     */
    schema?: InferOptionSchema<typeof schema>;
    /**
     * Authenticator selection options
     * There are instances where you want to set the ability for a user to leverage user verification (UV) when *they register a new credential. The WebAuthn specification has a list of options that can be chosen in *order to invoke different behaviors by client applications.
     *
     * For high assurance applications, you may want to enforce that your users always leverage UV. Some low *assurance applications might not want the additional friction for users, so they may opt to remove the *requirement.
     */
    authenticatorSelection?: {
        authenticatorAttachment: "platform" | "cross-platform";
        requireResidentKey: boolean;
        userVerification: "required" | "preferred" | "discouraged";
    };
    /**
     * Attestation options
     */
    attestation?: AttestationConveyancePreference;
    /**
     * Exclude credentials
     */
    excludeCredentials?: {
        id: string;
        type: string;
        transports: AuthenticatorTransportFuture[];
    }[];
    /**
     * Expiration time for the challenge in minutes
     */
    age?: number;
}
type Passkey = {
    id: string;
    name?: string;
    publicKey: string;
    userId: string;
    credentialID: string;
    counter: number;
    deviceType: CredentialDeviceType;
    backedUp: boolean;
    transports?: string;
    createdAt: Date;
};
declare const passkey: (options?: PasskeyOptions) => {
    id: "passkey";
    endpoints: {
        generatePasskeyRegistrationOptions: {
            <C extends [(better_call.Context<"/passkey/generate-register-options", {
                method: "GET";
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
                    client: boolean;
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
                                                challenge: {
                                                    type: string;
                                                };
                                                rp: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                        };
                                                        displayName: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                pubKeyCredParams: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                            };
                                                            alg: {
                                                                type: string;
                                                            };
                                                        };
                                                    };
                                                };
                                                timeout: {
                                                    type: string;
                                                };
                                                excludeCredentials: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            type: {
                                                                type: string;
                                                            };
                                                            transports: {
                                                                type: string;
                                                                items: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                authenticatorSelection: {
                                                    type: string;
                                                    properties: {
                                                        authenticatorAttachment: {
                                                            type: string;
                                                        };
                                                        requireResidentKey: {
                                                            type: string;
                                                        };
                                                        userVerification: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                attestation: {
                                                    type: string;
                                                };
                                                extensions: {
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
            }] ? Response : PublicKeyCredentialCreationOptionsJSON>;
            path: "/passkey/generate-register-options";
            options: {
                method: "GET";
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
                    client: boolean;
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
                                                challenge: {
                                                    type: string;
                                                };
                                                rp: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                        };
                                                        displayName: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                pubKeyCredParams: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            type: {
                                                                type: string;
                                                            };
                                                            alg: {
                                                                type: string;
                                                            };
                                                        };
                                                    };
                                                };
                                                timeout: {
                                                    type: string;
                                                };
                                                excludeCredentials: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            type: {
                                                                type: string;
                                                            };
                                                            transports: {
                                                                type: string;
                                                                items: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                authenticatorSelection: {
                                                    type: string;
                                                    properties: {
                                                        authenticatorAttachment: {
                                                            type: string;
                                                        };
                                                        requireResidentKey: {
                                                            type: string;
                                                        };
                                                        userVerification: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                attestation: {
                                                    type: string;
                                                };
                                                extensions: {
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
        generatePasskeyAuthenticationOptions: {
            <C extends [(better_call.Context<"/passkey/generate-authenticate-options", {
                method: "POST";
                body: z.ZodOptional<z.ZodObject<{
                    email: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    email?: string | undefined;
                }, {
                    email?: string | undefined;
                }>>;
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
                                                challenge: {
                                                    type: string;
                                                };
                                                rp: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                        };
                                                        displayName: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                timeout: {
                                                    type: string;
                                                };
                                                allowCredentials: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            type: {
                                                                type: string;
                                                            };
                                                            transports: {
                                                                type: string;
                                                                items: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                userVerification: {
                                                    type: string;
                                                };
                                                authenticatorSelection: {
                                                    type: string;
                                                    properties: {
                                                        authenticatorAttachment: {
                                                            type: string;
                                                        };
                                                        requireResidentKey: {
                                                            type: string;
                                                        };
                                                        userVerification: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                extensions: {
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
            }] ? Response : _simplewebauthn_types.PublicKeyCredentialRequestOptionsJSON>;
            path: "/passkey/generate-authenticate-options";
            options: {
                method: "POST";
                body: z.ZodOptional<z.ZodObject<{
                    email: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    email?: string | undefined;
                }, {
                    email?: string | undefined;
                }>>;
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
                                                challenge: {
                                                    type: string;
                                                };
                                                rp: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        id: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                        };
                                                        displayName: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                timeout: {
                                                    type: string;
                                                };
                                                allowCredentials: {
                                                    type: string;
                                                    items: {
                                                        type: string;
                                                        properties: {
                                                            id: {
                                                                type: string;
                                                            };
                                                            type: {
                                                                type: string;
                                                            };
                                                            transports: {
                                                                type: string;
                                                                items: {
                                                                    type: string;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                userVerification: {
                                                    type: string;
                                                };
                                                authenticatorSelection: {
                                                    type: string;
                                                    properties: {
                                                        authenticatorAttachment: {
                                                            type: string;
                                                        };
                                                        requireResidentKey: {
                                                            type: string;
                                                        };
                                                        userVerification: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                extensions: {
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
        verifyPasskeyRegistration: {
            <C extends [better_call.Context<"/passkey/verify-registration", {
                method: "POST";
                body: z.ZodObject<{
                    response: z.ZodAny;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name?: string | undefined;
                    response?: any;
                }, {
                    name?: string | undefined;
                    response?: any;
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
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            $ref: string;
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
            }] ? Response : Passkey | null>;
            path: "/passkey/verify-registration";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    response: z.ZodAny;
                    name: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    name?: string | undefined;
                    response?: any;
                }, {
                    name?: string | undefined;
                    response?: any;
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
                        description: string;
                        responses: {
                            200: {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            $ref: string;
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
        verifyPasskeyAuthentication: {
            <C extends [better_call.Context<"/passkey/verify-authentication", {
                method: "POST";
                body: z.ZodObject<{
                    response: z.ZodRecord<z.ZodString, z.ZodAny>;
                }, "strip", z.ZodTypeAny, {
                    response: Record<string, any>;
                }, {
                    response: Record<string, any>;
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
                    $Infer: {
                        body: {
                            response: AuthenticationResponseJSON;
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                session: {
                    id: string;
                    userId: string;
                    createdAt: Date;
                    updatedAt: Date;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                };
            }>;
            path: "/passkey/verify-authentication";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    response: z.ZodRecord<z.ZodString, z.ZodAny>;
                }, "strip", z.ZodTypeAny, {
                    response: Record<string, any>;
                }, {
                    response: Record<string, any>;
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
                    $Infer: {
                        body: {
                            response: AuthenticationResponseJSON;
                        };
                    };
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        listPasskeys: {
            <C extends [(better_call.Context<"/passkey/list-user-passkeys", {
                method: "GET";
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
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : Passkey[]>;
            path: "/passkey/list-user-passkeys";
            options: {
                method: "GET";
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        deletePasskey: {
            <C extends [better_call.Context<"/passkey/delete-passkey", {
                method: "POST";
                body: z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : null>;
            path: "/passkey/delete-passkey";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        updatePasskey: {
            <C extends [better_call.Context<"/passkey/update-passkey", {
                method: "POST";
                body: z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                }, {
                    id: string;
                    name: string;
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                passkey: Passkey;
            }>;
            path: "/passkey/update-passkey";
            options: {
                method: "POST";
                body: z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    name: string;
                }, {
                    id: string;
                    name: string;
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    };
    schema: {
        passkey: {
            fields: {
                name: {
                    type: "string";
                    required: false;
                };
                publicKey: {
                    type: "string";
                    required: true;
                };
                userId: {
                    type: "string";
                    references: {
                        model: string;
                        field: string;
                    };
                    required: true;
                };
                credentialID: {
                    type: "string";
                    required: true;
                };
                counter: {
                    type: "number";
                    required: true;
                };
                deviceType: {
                    type: "string";
                    required: true;
                };
                backedUp: {
                    type: "boolean";
                    required: true;
                };
                transports: {
                    type: "string";
                    required: false;
                };
                createdAt: {
                    type: "date";
                    required: false;
                };
            };
        };
    };
    $ERROR_CODES: {
        readonly CHALLENGE_NOT_FOUND: "Challenge not found";
        readonly YOU_ARE_NOT_ALLOWED_TO_REGISTER_THIS_PASSKEY: "You are not allowed to register this passkey";
        readonly FAILED_TO_VERIFY_REGISTRATION: "Failed to verify registration";
        readonly PASSKEY_NOT_FOUND: "Passkey not found";
        readonly AUTHENTICATION_FAILED: "Authentication failed";
        readonly UNABLE_TO_CREATE_SESSION: "Unable to create session";
        readonly FAILED_TO_UPDATE_PASSKEY: "Failed to update passkey";
    };
};
declare const schema: {
    passkey: {
        fields: {
            name: {
                type: "string";
                required: false;
            };
            publicKey: {
                type: "string";
                required: true;
            };
            userId: {
                type: "string";
                references: {
                    model: string;
                    field: string;
                };
                required: true;
            };
            credentialID: {
                type: "string";
                required: true;
            };
            counter: {
                type: "number";
                required: true;
            };
            deviceType: {
                type: "string";
                required: true;
            };
            backedUp: {
                type: "boolean";
                required: true;
            };
            transports: {
                type: "string";
                required: false;
            };
            createdAt: {
                type: "date";
                required: false;
            };
        };
    };
};

declare const getPasskeyActions: ($fetch: BetterFetch, { $listPasskeys, }: {
    $listPasskeys: ReturnType<typeof atom<any>>;
}) => {
    signIn: {
        /**
         * Sign in with a registered passkey
         */
        passkey: (opts?: {
            autoFill?: boolean;
            email?: string;
            fetchOptions?: BetterFetchOption;
        }, options?: BetterFetchOption) => Promise<{
            data: null;
            error: {
                message?: string | undefined;
                status: number;
                statusText: string;
            };
        } | undefined>;
    };
    passkey: {
        /**
         * Add a passkey to the user account
         */
        addPasskey: (opts?: {
            fetchOptions?: BetterFetchOption;
            /**
             * The name of the passkey. This is used to
             * identify the passkey in the UI.
             */
            name?: string;
        }, fetchOpts?: BetterFetchOption) => Promise<{
            data: null;
            error: {
                message?: string | undefined;
                status: number;
                statusText: string;
            };
        } | undefined>;
    };
    /**
     * Inferred Internal Types
     */
    $Infer: {
        Passkey: Passkey;
    };
};
declare const passkeyClient: () => {
    id: "passkey";
    $InferServerPlugin: ReturnType<typeof passkey>;
    getActions: ($fetch: BetterFetch) => {
        signIn: {
            /**
             * Sign in with a registered passkey
             */
            passkey: (opts?: {
                autoFill?: boolean;
                email?: string;
                fetchOptions?: BetterFetchOption;
            }, options?: BetterFetchOption) => Promise<{
                data: null;
                error: {
                    message?: string | undefined;
                    status: number;
                    statusText: string;
                };
            } | undefined>;
        };
        passkey: {
            /**
             * Add a passkey to the user account
             */
            addPasskey: (opts?: {
                fetchOptions?: BetterFetchOption;
                /**
                 * The name of the passkey. This is used to
                 * identify the passkey in the UI.
                 */
                name?: string;
            }, fetchOpts?: BetterFetchOption) => Promise<{
                data: null;
                error: {
                    message?: string | undefined;
                    status: number;
                    statusText: string;
                };
            } | undefined>;
        };
        /**
         * Inferred Internal Types
         */
        $Infer: {
            Passkey: Passkey;
        };
    };
    getAtoms($fetch: BetterFetch): {
        listPasskeys: nanostores.PreinitializedWritableAtom<{
            data: Passkey[] | null;
            error: null | _better_fetch_fetch.BetterFetchError;
            isPending: boolean;
            isRefetching: boolean;
        }>;
        $listPasskeys: nanostores.PreinitializedWritableAtom<any>;
    };
    pathMethods: {
        "/passkey/register": "POST";
        "/passkey/authenticate": "POST";
    };
    atomListeners: {
        matcher(path: string): path is "/passkey/verify-registration" | "/passkey/delete-passkey" | "/passkey/update-passkey";
        signal: "_listPasskeys";
    }[];
};

export { type Passkey, type PasskeyOptions, getPasskeyActions, passkey, passkeyClient };
