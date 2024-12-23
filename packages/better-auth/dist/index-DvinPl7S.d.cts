import { z, ZodLiteral, ZodObject, ZodOptional, ZodArray, ZodString } from 'zod';
import * as better_call from 'better-call';
import { b as Prettify } from './helper-Bi8FQwDD.cjs';
import { U as User, S as Session } from './auth-BqCHpLdr.cjs';
import { AccessControl, Role, StatementsPrimitive, defaultRoles } from './plugins/access.cjs';

declare const organizationSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    name: z.ZodString;
    slug: z.ZodString;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodString>, z.ZodEffects<z.ZodString, any, string>]>>>;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: Date;
    slug: string;
    metadata?: any;
    logo?: string | null | undefined;
}, {
    name: string;
    createdAt: Date;
    slug: string;
    id?: string | undefined;
    metadata?: string | Record<string, string> | null | undefined;
    logo?: string | null | undefined;
}>;
declare const memberSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    organizationId: z.ZodString;
    userId: z.ZodString;
    role: z.ZodString;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    userId: string;
    organizationId: string;
    role: string;
}, {
    createdAt: Date;
    userId: string;
    organizationId: string;
    role: string;
    id?: string | undefined;
}>;
declare const invitationSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    organizationId: z.ZodString;
    email: z.ZodString;
    role: z.ZodString;
    status: z.ZodDefault<z.ZodEnum<["pending", "accepted", "rejected", "canceled"]>>;
    /**
     * The id of the user who invited the user.
     */
    inviterId: z.ZodString;
    expiresAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    status: "pending" | "accepted" | "rejected" | "canceled";
    id: string;
    email: string;
    expiresAt: Date;
    organizationId: string;
    role: string;
    inviterId: string;
}, {
    email: string;
    expiresAt: Date;
    organizationId: string;
    role: string;
    inviterId: string;
    status?: "pending" | "accepted" | "rejected" | "canceled" | undefined;
    id?: string | undefined;
}>;
type Organization = z.infer<typeof organizationSchema>;
type Member = z.infer<typeof memberSchema>;
type Invitation = z.infer<typeof invitationSchema>;
type InferRolesFromOption<O extends OrganizationOptions | undefined> = ZodLiteral<O extends {
    roles: any;
} ? keyof O["roles"] : "admin" | "member" | "owner">;

interface OrganizationOptions {
    /**
     * Configure whether new users are able to create new organizations.
     * You can also pass a function that returns a boolean.
     *
     * 	@example
     * ```ts
     * allowUserToCreateOrganization: async (user) => {
     * 		const plan = await getUserPlan(user);
     *      return plan.name === "pro";
     * }
     * ```
     * @default true
     */
    allowUserToCreateOrganization?: boolean | ((user: User) => Promise<boolean> | boolean);
    /**
     * The maximum number of organizations a user can create.
     *
     * You can also pass a function that returns a boolean
     */
    organizationLimit?: number | ((user: User) => Promise<boolean> | boolean);
    /**
     * The role that is assigned to the creator of the
     * organization.
     *
     * @default "owner"
     */
    creatorRole?: string;
    /**
     * The number of memberships a user can have in an organization.
     *
     * @default "unlimited"
     */
    membershipLimit?: number;
    /**
     * Configure the roles and permissions for the
     * organization plugin.
     */
    ac?: AccessControl;
    /**
     * Custom permissions for roles.
     */
    roles?: {
        [key in string]?: Role<any>;
    };
    /**
     * The expiration time for the invitation link.
     *
     * @default 48 hours
     */
    invitationExpiresIn?: number;
    /**
     * Send an email with the
     * invitation link to the user.
     *
     * Note: Better Auth doesn't
     * generate invitation URLs.
     * You'll need to construct the
     * URL using the invitation ID
     * and pass it to the
     * acceptInvitation endpoint for
     * the user to accept the
     * invitation.
     *
     * @example
     * ```ts
     * sendInvitationEmail: async (data) => {
     * 	const url = `https://yourapp.com/organization/
     * accept-invitation?id=${data.id}`;
     * 	await sendEmail(data.email, "Invitation to join
     * organization", `Click the link to join the
     * organization: ${url}`);
     * }
     * ```
     */
    sendInvitationEmail?: (data: {
        /**
         * the invitation id
         */
        id: string;
        /**
         * the role of the user
         */
        role: string;
        /**
         * the email of the user
         */
        email: string;
        /**
         * the organization the user is invited to join
         */
        organization: Organization;
        /**
         * the member who is inviting the user
         */
        inviter: Member & {
            user: User;
        };
    }, 
    /**
     * The request object
     */
    request?: Request) => Promise<void>;
    /**
     * The schema for the organization plugin.
     */
    schema?: {
        session?: {
            fields?: {
                activeOrganizationId?: string;
            };
        };
        organization?: {
            modelName?: string;
            fields?: {
                [key in keyof Omit<Organization, "id">]?: string;
            };
        };
        member?: {
            modelName?: string;
            fields?: {
                [key in keyof Omit<Member, "id">]?: string;
            };
        };
        invitation?: {
            modelName?: string;
            fields?: {
                [key in keyof Omit<Invitation, "id">]?: string;
            };
        };
    };
}
declare const organization: <O extends OrganizationOptions>(options?: O) => {
    id: "organization";
    endpoints: {
        hasPermission: {
            <C extends [better_call.Context<"/organization/has-permission", {
                method: "POST";
                requireHeaders: true;
                body: ZodObject<{
                    permission: ZodObject<{ [key in keyof (O["ac"] extends AccessControl<infer S extends StatementsPrimitive> ? S extends Record<string, any> ? S & {
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
                    })]: ZodOptional<ZodArray<ZodLiteral<(O["ac"] extends AccessControl<infer S extends StatementsPrimitive> ? S extends Record<string, any> ? S & {
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
                    })[key][number]>>>; }>;
                    organizationId: ZodOptional<ZodString>;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            permission: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                error: {
                                                    type: string;
                                                };
                                                success: {
                                                    type: string;
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                error: string;
                success: boolean;
            } | {
                error: null;
                success: boolean;
            }>;
            path: "/organization/has-permission";
            options: {
                method: "POST";
                requireHeaders: true;
                body: ZodObject<{
                    permission: ZodObject<{ [key in keyof (O["ac"] extends AccessControl<infer S extends StatementsPrimitive> ? S extends Record<string, any> ? S & {
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
                    })]: ZodOptional<ZodArray<ZodLiteral<(O["ac"] extends AccessControl<infer S extends StatementsPrimitive> ? S extends Record<string, any> ? S & {
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
                    })[key][number]>>>; }>;
                    organizationId: ZodOptional<ZodString>;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>[];
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            permission: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                error: {
                                                    type: string;
                                                };
                                                success: {
                                                    type: string;
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        createOrganization: {
            <C extends [better_call.Context<"/organization/create", {
                method: "POST";
                body: ZodObject<{
                    name: ZodString;
                    slug: ZodString;
                    userId: ZodOptional<ZodString>;
                    logo: ZodOptional<ZodString>;
                    metadata: ZodOptional<z.ZodRecord<ZodString, z.ZodAny>>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    slug: string;
                    userId?: string | undefined;
                    metadata?: Record<string, any> | undefined;
                    logo?: string | undefined;
                }, {
                    name: string;
                    slug: string;
                    userId?: string | undefined;
                    metadata?: Record<string, any> | undefined;
                    logo?: string | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
                metadata: any;
                members: {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        image: string | null | undefined;
                    };
                    createdAt: Date;
                    userId: string;
                    organizationId: string;
                    role: string;
                    id?: string | undefined;
                }[];
                id: string;
                name: string;
                createdAt: Date;
                slug: string;
                logo?: string | null | undefined;
            } | null>;
            path: "/organization/create";
            options: {
                method: "POST";
                body: ZodObject<{
                    name: ZodString;
                    slug: ZodString;
                    userId: ZodOptional<ZodString>;
                    logo: ZodOptional<ZodString>;
                    metadata: ZodOptional<z.ZodRecord<ZodString, z.ZodAny>>;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    slug: string;
                    userId?: string | undefined;
                    metadata?: Record<string, any> | undefined;
                    logo?: string | undefined;
                }, {
                    name: string;
                    slug: string;
                    userId?: string | undefined;
                    metadata?: Record<string, any> | undefined;
                    logo?: string | undefined;
                }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
        updateOrganization: {
            <C extends [better_call.Context<"/organization/update", {
                method: "POST";
                body: ZodObject<{
                    data: ZodObject<{
                        name: ZodOptional<ZodOptional<ZodString>>;
                        slug: ZodOptional<ZodOptional<ZodString>>;
                        logo: ZodOptional<ZodOptional<ZodString>>;
                        metadata: ZodOptional<ZodOptional<z.ZodRecord<ZodString, z.ZodAny>>>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    }, {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    }>;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    data: {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    };
                    organizationId?: string | undefined;
                }, {
                    data: {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    };
                    organizationId?: string | undefined;
                }>;
                requireHeaders: true;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
                metadata: Record<string, any> | undefined;
                id: string;
                name: string;
                createdAt: Date;
                slug: string;
                logo?: string | null | undefined;
            } | null>;
            path: "/organization/update";
            options: {
                method: "POST";
                body: ZodObject<{
                    data: ZodObject<{
                        name: ZodOptional<ZodOptional<ZodString>>;
                        slug: ZodOptional<ZodOptional<ZodString>>;
                        logo: ZodOptional<ZodOptional<ZodString>>;
                        metadata: ZodOptional<ZodOptional<z.ZodRecord<ZodString, z.ZodAny>>>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    }, {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    }>;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    data: {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    };
                    organizationId?: string | undefined;
                }, {
                    data: {
                        name?: string | undefined;
                        metadata?: Record<string, any> | undefined;
                        slug?: string | undefined;
                        logo?: string | undefined;
                    };
                    organizationId?: string | undefined;
                }>;
                requireHeaders: true;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
        deleteOrganization: {
            <C extends [better_call.Context<"/organization/delete", {
                method: "POST";
                body: ZodObject<{
                    organizationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    organizationId: string;
                }, {
                    organizationId: string;
                }>;
                requireHeaders: true;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "string";
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : string | null>;
            path: "/organization/delete";
            options: {
                method: "POST";
                body: ZodObject<{
                    organizationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    organizationId: string;
                }, {
                    organizationId: string;
                }>;
                requireHeaders: true;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "string";
                                            description: string;
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
        setActiveOrganization: {
            <C extends [better_call.Context<"/organization/set-active", {
                method: "POST";
                body: ZodObject<{
                    organizationId: ZodOptional<z.ZodNullable<ZodString>>;
                    organizationSlug: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    organizationId?: string | null | undefined;
                    organizationSlug?: string | undefined;
                }, {
                    organizationId?: string | null | undefined;
                    organizationSlug?: string | undefined;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
                invitations: {
                    status: "pending" | "accepted" | "rejected" | "canceled";
                    id: string;
                    email: string;
                    expiresAt: Date;
                    organizationId: string;
                    role: string;
                    inviterId: string;
                }[];
                members: {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        image: string | null | undefined;
                    };
                    id: string;
                    createdAt: Date;
                    userId: string;
                    organizationId: string;
                    role: string;
                }[];
                id: string;
                name: string;
                createdAt: Date;
                slug: string;
                metadata?: any;
                logo?: string | null | undefined;
            } | null>;
            path: "/organization/set-active";
            options: {
                method: "POST";
                body: ZodObject<{
                    organizationId: ZodOptional<z.ZodNullable<ZodString>>;
                    organizationSlug: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    organizationId?: string | null | undefined;
                    organizationSlug?: string | undefined;
                }, {
                    organizationId?: string | null | undefined;
                    organizationSlug?: string | undefined;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
        getFullOrganization: {
            <C extends [better_call.Context<"/organization/get-full-organization", {
                method: "GET";
                query: ZodOptional<ZodObject<{
                    organizationId: ZodOptional<ZodString>;
                    organizationSlug: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    organizationId?: string | undefined;
                    organizationSlug?: string | undefined;
                }, {
                    organizationId?: string | undefined;
                    organizationSlug?: string | undefined;
                }>>;
                requireHeaders: true;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
                invitations: {
                    status: "pending" | "accepted" | "rejected" | "canceled";
                    id: string;
                    email: string;
                    expiresAt: Date;
                    organizationId: string;
                    role: string;
                    inviterId: string;
                }[];
                members: {
                    user: {
                        id: string;
                        name: string;
                        email: string;
                        image: string | null | undefined;
                    };
                    id: string;
                    createdAt: Date;
                    userId: string;
                    organizationId: string;
                    role: string;
                }[];
                id: string;
                name: string;
                createdAt: Date;
                slug: string;
                metadata?: any;
                logo?: string | null | undefined;
            } | null>;
            path: "/organization/get-full-organization";
            options: {
                method: "GET";
                query: ZodOptional<ZodObject<{
                    organizationId: ZodOptional<ZodString>;
                    organizationSlug: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    organizationId?: string | undefined;
                    organizationSlug?: string | undefined;
                }, {
                    organizationId?: string | undefined;
                    organizationSlug?: string | undefined;
                }>>;
                requireHeaders: true;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            description: string;
                                            $ref: string;
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
        listOrganizations: {
            <C extends [(better_call.Context<"/organization/list", {
                method: "GET";
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                $ref: string;
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
                id: string;
                name: string;
                createdAt: Date;
                slug: string;
                metadata?: any;
                logo?: string | null | undefined;
            }[]>;
            path: "/organization/list";
            options: {
                method: "GET";
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        createInvitation: {
            <C extends [better_call.Context<"/organization/invite-member", {
                method: "POST";
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                body: ZodObject<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>]: z.baseObjectInputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>[k_1]; }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                email: {
                                                    type: string;
                                                };
                                                role: {
                                                    type: string;
                                                };
                                                organizationId: {
                                                    type: string;
                                                };
                                                inviterId: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                                expiresAt: {
                                                    type: string;
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: "pending" | "accepted" | "rejected" | "canceled";
                id: string;
                email: string;
                expiresAt: Date;
                organizationId: string;
                role: string;
                inviterId: string;
            }>;
            path: "/organization/invite-member";
            options: {
                method: "POST";
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                body: ZodObject<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>]: z.baseObjectInputType<{
                    email: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                    resend: ZodOptional<z.ZodBoolean>;
                }>[k_1]; }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                email: {
                                                    type: string;
                                                };
                                                role: {
                                                    type: string;
                                                };
                                                organizationId: {
                                                    type: string;
                                                };
                                                inviterId: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                                expiresAt: {
                                                    type: string;
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        cancelInvitation: {
            <C extends [better_call.Context<"/organization/cancel-invitation", {
                method: "POST";
                body: ZodObject<{
                    invitationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    invitationId: string;
                }, {
                    invitationId: string;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                openapi: {
                    description: string;
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        type: string;
                                        properties: {
                                            invitation: {
                                                type: string;
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
                status: "pending" | "accepted" | "rejected" | "canceled";
                id: string;
                email: string;
                expiresAt: Date;
                organizationId: string;
                role: string;
                inviterId: string;
            } | null>;
            path: "/organization/cancel-invitation";
            options: {
                method: "POST";
                body: ZodObject<{
                    invitationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    invitationId: string;
                }, {
                    invitationId: string;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                openapi: {
                    description: string;
                    responses: {
                        "200": {
                            description: string;
                            content: {
                                "application/json": {
                                    schema: {
                                        type: string;
                                        properties: {
                                            invitation: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        acceptInvitation: {
            <C extends [better_call.Context<"/organization/accept-invitation", {
                method: "POST";
                body: ZodObject<{
                    invitationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    invitationId: string;
                }, {
                    invitationId: string;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                invitation: {
                                                    type: string;
                                                };
                                                member: {
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
                invitation: {
                    status: "pending" | "accepted" | "rejected" | "canceled";
                    id: string;
                    email: string;
                    expiresAt: Date;
                    organizationId: string;
                    role: string;
                    inviterId: string;
                };
                member: {
                    createdAt: Date;
                    userId: string;
                    organizationId: string;
                    role: string;
                    id?: string | undefined;
                };
            } | null>;
            path: "/organization/accept-invitation";
            options: {
                method: "POST";
                body: ZodObject<{
                    invitationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    invitationId: string;
                }, {
                    invitationId: string;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                invitation: {
                                                    type: string;
                                                };
                                                member: {
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
        getInvitation: {
            <C extends [better_call.Context<"/organization/get-invitation", {
                method: "GET";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                requireHeaders: true;
                query: ZodObject<{
                    id: ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                email: {
                                                    type: string;
                                                };
                                                role: {
                                                    type: string;
                                                };
                                                organizationId: {
                                                    type: string;
                                                };
                                                inviterId: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                };
                                                organizationName: {
                                                    type: string;
                                                };
                                                organizationSlug: {
                                                    type: string;
                                                };
                                                inviterEmail: {
                                                    type: string;
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                organizationName: string;
                organizationSlug: string;
                inviterEmail: string;
                status: "pending" | "accepted" | "rejected" | "canceled";
                id: string;
                email: string;
                expiresAt: Date;
                organizationId: string;
                role: string;
                inviterId: string;
            }>;
            path: "/organization/get-invitation";
            options: {
                method: "GET";
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                requireHeaders: true;
                query: ZodObject<{
                    id: ZodString;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                }, {
                    id: string;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                email: {
                                                    type: string;
                                                };
                                                role: {
                                                    type: string;
                                                };
                                                organizationId: {
                                                    type: string;
                                                };
                                                inviterId: {
                                                    type: string;
                                                };
                                                status: {
                                                    type: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                };
                                                organizationName: {
                                                    type: string;
                                                };
                                                organizationSlug: {
                                                    type: string;
                                                };
                                                inviterEmail: {
                                                    type: string;
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        rejectInvitation: {
            <C extends [better_call.Context<"/organization/reject-invitation", {
                method: "POST";
                body: ZodObject<{
                    invitationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    invitationId: string;
                }, {
                    invitationId: string;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                invitation: {
                                                    type: string;
                                                };
                                                member: {
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
                invitation: {
                    status: "pending" | "accepted" | "rejected" | "canceled";
                    id: string;
                    email: string;
                    expiresAt: Date;
                    organizationId: string;
                    role: string;
                    inviterId: string;
                } | null;
                member: null;
            }>;
            path: "/organization/reject-invitation";
            options: {
                method: "POST";
                body: ZodObject<{
                    invitationId: ZodString;
                }, "strip", z.ZodTypeAny, {
                    invitationId: string;
                }, {
                    invitationId: string;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                invitation: {
                                                    type: string;
                                                };
                                                member: {
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
        addMember: {
            <C extends [better_call.Context<"/organization/add-member", {
                method: "POST";
                body: ZodObject<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>]: z.baseObjectInputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>[k_1]; }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    SERVER_ONLY: true;
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                createdAt: Date;
                userId: string;
                organizationId: string;
                role: string;
                id?: string | undefined;
            } | null>;
            path: "/organization/add-member";
            options: {
                method: "POST";
                body: ZodObject<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>]: z.baseObjectInputType<{
                    userId: ZodString;
                    role: InferRolesFromOption<O>;
                    organizationId: ZodOptional<ZodString>;
                }>[k_1]; }>;
                use: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions>[];
                metadata: {
                    SERVER_ONLY: true;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        removeMember: {
            <C extends [better_call.Context<"/organization/remove-member", {
                method: "POST";
                body: ZodObject<{
                    memberIdOrEmail: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    memberIdOrEmail: string;
                    organizationId?: string | undefined;
                }, {
                    memberIdOrEmail: string;
                    organizationId?: string | undefined;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                member: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        organizationId: {
                                                            type: string;
                                                        };
                                                        role: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                member: {
                    id: string;
                    createdAt: Date;
                    userId: string;
                    organizationId: string;
                    role: string;
                };
            } | null>;
            path: "/organization/remove-member";
            options: {
                method: "POST";
                body: ZodObject<{
                    memberIdOrEmail: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, {
                    memberIdOrEmail: string;
                    organizationId?: string | undefined;
                }, {
                    memberIdOrEmail: string;
                    organizationId?: string | undefined;
                }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                member: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        organizationId: {
                                                            type: string;
                                                        };
                                                        role: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        updateMemberRole: {
            <C extends [better_call.Context<"/organization/update-member-role", {
                method: "POST";
                body: ZodObject<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>]: z.baseObjectInputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>[k_1]; }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                member: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        organizationId: {
                                                            type: string;
                                                        };
                                                        role: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                id: string;
                createdAt: Date;
                userId: string;
                organizationId: string;
                role: string;
            } | null>;
            path: "/organization/update-member-role";
            options: {
                method: "POST";
                body: ZodObject<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }, "strip", z.ZodTypeAny, { [k in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>, any>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>, any>[k]; }, { [k_1 in keyof z.baseObjectInputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>]: z.baseObjectInputType<{
                    role: InferRolesFromOption<O>;
                    memberId: ZodString;
                    organizationId: ZodOptional<ZodString>;
                }>[k_1]; }>;
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                member: {
                                                    type: string;
                                                    properties: {
                                                        id: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        organizationId: {
                                                            type: string;
                                                        };
                                                        role: {
                                                            type: string;
                                                        };
                                                    };
                                                    required: string[];
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        getActiveMember: {
            <C extends [(better_call.Context<"/organization/get-active-member", {
                method: "GET";
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                userId: {
                                                    type: string;
                                                };
                                                organizationId: {
                                                    type: string;
                                                };
                                                role: {
                                                    type: string;
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
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                user: {
                    id: string;
                    name: string;
                    email: string;
                    image: string | null | undefined;
                };
                id: string;
                createdAt: Date;
                userId: string;
                organizationId: string;
                role: string;
            } | null>;
            path: "/organization/get-active-member";
            options: {
                method: "GET";
                use: (better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
                    orgOptions: OrganizationOptions;
                    roles: typeof defaultRoles & {
                        [key: string]: Role<{}>;
                    };
                    getSession: (context: better_call.Context<any, any>) => Promise<{
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    }>;
                }>, better_call.EndpointOptions> | better_call.Endpoint<better_call.Handler<string, {
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
                } & {
                    method: "*";
                }, {
                    session: {
                        session: Session & {
                            activeOrganizationId?: string;
                        };
                        user: User;
                    };
                }>, {
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
                } & {
                    method: "*";
                }>)[];
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                id: {
                                                    type: string;
                                                };
                                                userId: {
                                                    type: string;
                                                };
                                                organizationId: {
                                                    type: string;
                                                };
                                                role: {
                                                    type: string;
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
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    };
    schema: {
        session: {
            fields: {
                activeOrganizationId: {
                    type: "string";
                    required: false;
                    fieldName: string | undefined;
                };
            };
        };
        organization: {
            modelName: string | undefined;
            fields: {
                name: {
                    type: "string";
                    required: true;
                    fieldName: string | undefined;
                };
                slug: {
                    type: "string";
                    unique: true;
                    fieldName: string | undefined;
                };
                logo: {
                    type: "string";
                    required: false;
                    fieldName: string | undefined;
                };
                createdAt: {
                    type: "date";
                    required: true;
                    fieldName: string | undefined;
                };
                metadata: {
                    type: "string";
                    required: false;
                    fieldName: string | undefined;
                };
            };
        };
        member: {
            modelName: string | undefined;
            fields: {
                organizationId: {
                    type: "string";
                    required: true;
                    references: {
                        model: string;
                        field: string;
                    };
                    fieldName: string | undefined;
                };
                userId: {
                    type: "string";
                    required: true;
                    fieldName: string | undefined;
                    references: {
                        model: string;
                        field: string;
                    };
                };
                role: {
                    type: "string";
                    required: true;
                    defaultValue: string;
                    fieldName: string | undefined;
                };
                createdAt: {
                    type: "date";
                    required: true;
                    fieldName: string | undefined;
                };
            };
        };
        invitation: {
            modelName: string | undefined;
            fields: {
                organizationId: {
                    type: "string";
                    required: true;
                    references: {
                        model: string;
                        field: string;
                    };
                    fieldName: string | undefined;
                };
                email: {
                    type: "string";
                    required: true;
                    fieldName: string | undefined;
                };
                role: {
                    type: "string";
                    required: false;
                    fieldName: string | undefined;
                };
                status: {
                    type: "string";
                    required: true;
                    defaultValue: string;
                    fieldName: string | undefined;
                };
                expiresAt: {
                    type: "date";
                    required: true;
                    fieldName: string | undefined;
                };
                inviterId: {
                    type: "string";
                    references: {
                        model: string;
                        field: string;
                    };
                    fieldName: string | undefined;
                    required: true;
                };
            };
        };
    };
    $Infer: {
        Organization: Organization;
        Invitation: Invitation;
        Member: Member;
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
    };
    $ERROR_CODES: {
        readonly YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION: "You are not allowed to create a new organization";
        readonly YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS: "You have reached the maximum number of organizations";
        readonly ORGANIZATION_ALREADY_EXISTS: "Organization already exists";
        readonly ORGANIZATION_NOT_FOUND: "Organization not found";
        readonly USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "User is not a member of the organization";
        readonly YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION: "You are not allowed to update this organization";
        readonly YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION: "You are not allowed to delete this organization";
        readonly NO_ACTIVE_ORGANIZATION: "No active organization";
        readonly USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION: "User is already a member of this organization";
        readonly MEMBER_NOT_FOUND: "Member not found";
        readonly ROLE_NOT_FOUND: "Role not found";
        readonly YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER: "You cannot leave the organization as the only owner";
        readonly YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "You are not allowed to delete this member";
        readonly YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION: "You are not allowed to invite users to this organization";
        readonly USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION: "User is already invited to this organization";
        readonly INVITATION_NOT_FOUND: "Invitation not found";
        readonly YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "You are not the recipient of the invitation";
        readonly YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION: "You are not allowed to cancel this invitation";
        readonly INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION: "Inviter is no longer a member of the organization";
    };
};

export { type Invitation as I, type Member as M, type OrganizationOptions as O, type Organization as a, organization as o };
