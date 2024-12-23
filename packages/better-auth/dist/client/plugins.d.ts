import * as nanostores from 'nanostores';
import { AccessControl, StatementsPrimitive, Role } from '../plugins/access.js';
import * as _better_fetch_fetch from '@better-fetch/fetch';
import { BetterFetchOption } from '@better-fetch/fetch';
import { o as organization, a as Organization, M as Member, I as Invitation } from '../index-DVU5ZW6p.js';
import { b as Prettify } from '../helper-Bi8FQwDD.js';
import { username } from '../plugins/username.js';
export { getPasskeyActions, passkeyClient } from '../plugins/passkey.js';
export { twoFactorClient } from '../plugins/two-factor.js';
import { magicLink } from '../plugins/magic-link.js';
import { phoneNumber } from '../plugins/phone-number.js';
import { anonymous } from '../plugins/anonymous.js';
import { a4 as FieldAttribute, B as BetterAuthOptions, d as BetterAuthPlugin } from '../auth-vURrZfZU.js';
import { admin } from '../plugins/admin.js';
import { genericOAuth } from '../plugins/generic-oauth.js';
import { jwt } from '../plugins/jwt.js';
import { multiSession } from '../plugins/multi-session.js';
import { emailOTP } from '../plugins/email-otp.js';
import { Store } from '../types.js';
import { sso } from '../plugins/sso.js';
import { oidcProvider } from '../plugins/oidc-provider.js';
import 'zod';
import 'better-call';
import 'kysely';
import '../index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';
import '@simplewebauthn/types';

interface OrganizationClientOptions {
    ac: AccessControl;
    roles: {
        [key in string]: Role;
    };
}
declare const organizationClient: <O extends OrganizationClientOptions>(options?: O) => {
    id: "organization";
    $InferServerPlugin: ReturnType<typeof organization<{
        ac: O["ac"] extends AccessControl ? O["ac"] : AccessControl<{
            readonly organization: readonly ["update", "delete"];
            readonly member: readonly ["create", "update", "delete"];
            readonly invitation: readonly ["create", "cancel"];
        }>;
        roles: O["roles"] extends Record<string, Role> ? O["roles"] : {
            admin: Role;
            member: Role;
            owner: Role;
        };
    }>>;
    getActions: ($fetch: _better_fetch_fetch.BetterFetch) => {
        $Infer: {
            ActiveOrganization: Prettify<Organization & {
                members: Prettify<Member & {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        image?: string | null;
                    };
                }>[];
                invitations: Invitation[];
            }>;
            Organization: Organization;
            Invitation: Invitation;
            Member: Member;
        };
        organization: {
            checkRolePermission: <R extends O extends {
                roles: any;
            } ? keyof O["roles"] : "admin" | "member" | "owner">(data: {
                role: R;
                permission: Partial<{ [key in keyof (O["ac"] extends AccessControl<infer S extends StatementsPrimitive> ? S extends Record<string, any[]> ? S & {
                    readonly organization: readonly ["update", "delete"];
                    readonly member: readonly ["create", "update", "delete"];
                    readonly invitation: readonly ["create", "cancel"];
                } : {
                    readonly organization: readonly ["update", "delete"];
                    readonly member: readonly ["create", "update", "delete"];
                    readonly invitation: readonly ["create", "cancel"];
                } : {
                    readonly organization: readonly ["update", "delete"];
                    readonly member: readonly ["create", "update", "delete"];
                    readonly invitation: readonly ["create", "cancel"];
                })]: (O["ac"] extends AccessControl<infer S extends StatementsPrimitive> ? S extends Record<string, any[]> ? S & {
                    readonly organization: readonly ["update", "delete"];
                    readonly member: readonly ["create", "update", "delete"];
                    readonly invitation: readonly ["create", "cancel"];
                } : {
                    readonly organization: readonly ["update", "delete"];
                    readonly member: readonly ["create", "update", "delete"];
                    readonly invitation: readonly ["create", "cancel"];
                } : {
                    readonly organization: readonly ["update", "delete"];
                    readonly member: readonly ["create", "update", "delete"];
                    readonly invitation: readonly ["create", "cancel"];
                })[key][number][]; }>;
            }) => boolean;
        };
    };
    getAtoms: ($fetch: _better_fetch_fetch.BetterFetch) => {
        $listOrg: nanostores.PreinitializedWritableAtom<boolean>;
        $activeOrgSignal: nanostores.PreinitializedWritableAtom<boolean>;
        $activeMemberSignal: nanostores.PreinitializedWritableAtom<boolean>;
        activeOrganization: nanostores.PreinitializedWritableAtom<{
            data: Prettify<{
                id: string;
                createdAt: Date;
                name: string;
                slug: string;
                metadata?: any;
                logo?: string | null | undefined;
            } & {
                members: (Member & {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        image: string | undefined;
                    };
                })[];
                invitations: Invitation[];
            }> | null;
            error: null | _better_fetch_fetch.BetterFetchError;
            isPending: boolean;
            isRefetching: boolean;
        }>;
        listOrganizations: nanostores.PreinitializedWritableAtom<{
            data: {
                id: string;
                createdAt: Date;
                name: string;
                slug: string;
                metadata?: any;
                logo?: string | null | undefined;
            }[] | null;
            error: null | _better_fetch_fetch.BetterFetchError;
            isPending: boolean;
            isRefetching: boolean;
        }>;
        activeMember: nanostores.PreinitializedWritableAtom<{
            data: {
                id: string;
                userId: string;
                createdAt: Date;
                organizationId: string;
                role: string;
            } | null;
            error: null | _better_fetch_fetch.BetterFetchError;
            isPending: boolean;
            isRefetching: boolean;
        }>;
    };
    pathMethods: {
        "/organization/get-full-organization": "GET";
    };
    atomListeners: ({
        matcher(path: string): path is "/organization/create" | "/organization/delete";
        signal: "$listOrg";
    } | {
        matcher(path: string): boolean;
        signal: "$activeOrgSignal";
    } | {
        matcher(path: string): boolean;
        signal: "$activeMemberSignal";
    })[];
};

declare const usernameClient: () => {
    id: "username";
    $InferServerPlugin: ReturnType<typeof username>;
};

declare const magicLinkClient: () => {
    id: "magic-link";
    $InferServerPlugin: ReturnType<typeof magicLink>;
};

declare const phoneNumberClient: () => {
    id: "phoneNumber";
    $InferServerPlugin: ReturnType<typeof phoneNumber>;
    atomListeners: {
        matcher(path: string): path is "/phone-number/verify" | "/phone-number/update";
        signal: "$sessionSignal";
    }[];
};

declare const anonymousClient: () => {
    id: "anonymous";
    $InferServerPlugin: ReturnType<typeof anonymous>;
    pathMethods: {
        "/sign-in/anonymous": "POST";
    };
};

declare const inferAdditionalFields: <T, S extends {
    user?: {
        [key: string]: FieldAttribute;
    };
    session?: {
        [key: string]: FieldAttribute;
    };
} = {}>(schema?: S) => {
    id: "additional-fields-client";
    $InferServerPlugin: ((T extends BetterAuthOptions ? T : T extends {
        options: BetterAuthOptions;
    } ? T["options"] : never) extends never ? S extends {
        user?: {
            [key: string]: FieldAttribute;
        };
        session?: {
            [key: string]: FieldAttribute;
        };
    } ? {
        id: "additional-fields-client";
        schema: {
            user: {
                fields: S["user"] extends object ? S["user"] : {};
            };
            session: {
                fields: S["session"] extends object ? S["session"] : {};
            };
        };
    } : never : (T extends BetterAuthOptions ? T : T extends {
        options: BetterAuthOptions;
    } ? T["options"] : never) extends BetterAuthOptions ? {
        id: "additional-fields";
        schema: {
            user: {
                fields: (T extends BetterAuthOptions ? T : T extends {
                    options: BetterAuthOptions;
                } ? T["options"] : never)["user"] extends {
                    additionalFields: infer U;
                } ? U : {};
            };
            session: {
                fields: (T extends BetterAuthOptions ? T : T extends {
                    options: BetterAuthOptions;
                } ? T["options"] : never)["session"] extends {
                    additionalFields: infer U;
                } ? U : {};
            };
        };
    } : never) extends BetterAuthPlugin ? (T extends BetterAuthOptions ? T : T extends {
        options: BetterAuthOptions;
    } ? T["options"] : never) extends never ? S extends {
        user?: {
            [key: string]: FieldAttribute;
        };
        session?: {
            [key: string]: FieldAttribute;
        };
    } ? {
        id: "additional-fields-client";
        schema: {
            user: {
                fields: S["user"] extends object ? S["user"] : {};
            };
            session: {
                fields: S["session"] extends object ? S["session"] : {};
            };
        };
    } : never : (T extends BetterAuthOptions ? T : T extends {
        options: BetterAuthOptions;
    } ? T["options"] : never) extends BetterAuthOptions ? {
        id: "additional-fields";
        schema: {
            user: {
                fields: (T extends BetterAuthOptions ? T : T extends {
                    options: BetterAuthOptions;
                } ? T["options"] : never)["user"] extends {
                    additionalFields: infer U;
                } ? U : {};
            };
            session: {
                fields: (T extends BetterAuthOptions ? T : T extends {
                    options: BetterAuthOptions;
                } ? T["options"] : never)["session"] extends {
                    additionalFields: infer U;
                } ? U : {};
            };
        };
    } : never : undefined;
};

declare const adminClient: () => {
    id: "better-auth-client";
    $InferServerPlugin: ReturnType<typeof admin>;
    pathMethods: {
        "/admin/list-users": "GET";
        "/admin/stop-impersonating": "POST";
    };
};

declare const genericOAuthClient: () => {
    id: "generic-oauth-client";
    $InferServerPlugin: ReturnType<typeof genericOAuth>;
};

declare const jwtClient: () => {
    id: "better-auth-client";
    $InferServerPlugin: ReturnType<typeof jwt>;
};

declare const multiSessionClient: () => {
    id: "multi-session";
    $InferServerPlugin: ReturnType<typeof multiSession>;
    atomListeners: {
        matcher(path: string): path is "/multi-session/set-active";
        signal: "$sessionSignal";
    }[];
};

declare const emailOTPClient: () => {
    id: "email-otp";
    $InferServerPlugin: ReturnType<typeof emailOTP>;
};

declare global {
    interface Window {
        google?: {
            accounts: {
                id: {
                    initialize: (config: any) => void;
                    prompt: () => void;
                };
            };
        };
        googleScriptInitialized?: boolean;
    }
}
interface GoogleOneTapOptions {
    /**
     * Google client ID
     */
    clientId: string;
    /**
     * Auto select the account if the user is already signed in
     */
    autoSelect?: boolean;
    /**
     * Cancel the flow when the user taps outside the prompt
     */
    cancelOnTapOutside?: boolean;
    /**
     * Context of the Google One Tap flow
     */
    context?: "signin" | "signup" | "use";
}
interface GoogleOneTapActionOptions extends Omit<GoogleOneTapOptions, "clientId"> {
    fetchOptions?: BetterFetchOption;
    callbackURL?: string;
}
declare const oneTapClient: (options: GoogleOneTapOptions) => {
    id: "one-tap";
    getActions: ($fetch: _better_fetch_fetch.BetterFetch, _: Store) => {
        oneTap: (opts?: GoogleOneTapActionOptions, fetchOptions?: BetterFetchOption) => Promise<void>;
    };
    getAtoms($fetch: _better_fetch_fetch.BetterFetch): {};
};

declare const customSessionClient: <A extends {
    options: BetterAuthOptions;
}>() => {
    id: "infer-server-plugin";
    $InferServerPlugin: (A extends {
        options: infer O;
    } ? O : A)["plugins"] extends (infer P)[] ? P extends {
        id: "custom-session";
    } ? P : never : never;
};

declare const InferServerPlugin: <AuthOrOption extends BetterAuthOptions | {
    options: BetterAuthOptions;
}, ID extends string>() => {
    id: "infer-server-plugin";
    $InferServerPlugin: (AuthOrOption extends {
        options: infer O;
    } ? O : AuthOrOption)["plugins"] extends (infer P)[] ? P extends {
        id: ID;
    } ? P : never : never;
};

declare const ssoClient: () => {
    id: "sso-client";
    $InferServerPlugin: ReturnType<typeof sso>;
};

declare const oidcClient: () => {
    id: "oidc-client";
    $InferServerPlugin: ReturnType<typeof oidcProvider>;
};

export { type GoogleOneTapActionOptions, type GoogleOneTapOptions, InferServerPlugin, adminClient, anonymousClient, customSessionClient, emailOTPClient, genericOAuthClient, inferAdditionalFields, jwtClient, magicLinkClient, multiSessionClient, oidcClient, oneTapClient, organizationClient, phoneNumberClient, ssoClient, usernameClient };
