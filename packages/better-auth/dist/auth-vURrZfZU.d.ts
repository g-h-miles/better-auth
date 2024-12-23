import { Migration, PostgresPool, MysqlPool, Dialect, Kysely } from 'kysely';
import * as better_call from 'better-call';
import { Endpoint, EndpointResponse, APIError, CookieOptions, ContextTools, EndpointOptions } from 'better-call';
import * as zod from 'zod';
import { ZodSchema, z, ZodObject, ZodOptional, ZodString, ZodNull } from 'zod';
import { L as LiteralString, D as DeepPartial, U as UnionToIntersection, S as StripEmptyObjects, O as OmitId, d as LiteralUnion, P as PrettifyDeep, b as Prettify, E as Expand } from './helper-Bi8FQwDD.js';
import { S as SocialProviders, b as SocialProviderList, O as OAuthProvider } from './index-4d8GiU4g.js';
import { Database } from 'better-sqlite3';

declare const optionsMiddleware: Endpoint<better_call.Handler<string, better_call.EndpointOptions, AuthContext>, better_call.EndpointOptions>;
declare const createAuthMiddleware: {
    <Opts extends better_call.EndpointOptions, R extends EndpointResponse>(optionsOrHandler: (ctx: better_call.InferBody<Opts, Opts["body"] & (undefined extends better_call.InferUseOptions<Opts>["body"] ? {} : better_call.InferUseOptions<Opts>["body"])> & {
        context: AuthContext & {
            returned?: APIError | Response | Record<string, any>;
            endpoint: Endpoint;
        };
    } & better_call.InferRequest<Opts, Opts["requireRequest"]> & better_call.InferHeaders<Opts, Opts["requireHeaders"]> & {
        params?: Record<string, string>;
        query?: Record<string, string>;
    } & better_call.ContextTools extends infer T ? { [key in keyof T]: (better_call.InferBody<Opts, Opts["body"] & (undefined extends better_call.InferUseOptions<Opts>["body"] ? {} : better_call.InferUseOptions<Opts>["body"])> & {
        context: AuthContext & {
            returned?: APIError | Response | Record<string, any>;
            endpoint: Endpoint;
        };
    } & better_call.InferRequest<Opts, Opts["requireRequest"]> & better_call.InferHeaders<Opts, Opts["requireHeaders"]> & {
        params?: Record<string, string>;
        query?: Record<string, string>;
    } & better_call.ContextTools)[key]; } : never) => Promise<R>): Endpoint<better_call.Handler<string, Opts, R>, Opts>;
    <Opts extends Omit<better_call.EndpointOptions, "method">, R_1 extends EndpointResponse>(optionsOrHandler: Opts, handler: (ctx: better_call.InferBody<Opts & {
        method: "*";
    }, (Opts & {
        method: "*";
    })["body"] & (undefined extends better_call.InferUseOptions<Opts & {
        method: "*";
    }>["body"] ? {} : better_call.InferUseOptions<Opts & {
        method: "*";
    }>["body"])> & {
        context: AuthContext & {
            returned?: APIError | Response | Record<string, any>;
            endpoint: Endpoint;
        };
    } & better_call.InferRequest<Opts & {
        method: "*";
    }, (Opts & {
        method: "*";
    })["requireRequest"]> & better_call.InferHeaders<Opts & {
        method: "*";
    }, (Opts & {
        method: "*";
    })["requireHeaders"]> & {
        params?: Record<string, string>;
        query?: Record<string, string>;
    } & better_call.ContextTools extends infer T ? { [key in keyof T]: (better_call.InferBody<Opts & {
        method: "*";
    }, (Opts & {
        method: "*";
    })["body"] & (undefined extends better_call.InferUseOptions<Opts & {
        method: "*";
    }>["body"] ? {} : better_call.InferUseOptions<Opts & {
        method: "*";
    }>["body"])> & {
        context: AuthContext & {
            returned?: APIError | Response | Record<string, any>;
            endpoint: Endpoint;
        };
    } & better_call.InferRequest<Opts & {
        method: "*";
    }, (Opts & {
        method: "*";
    })["requireRequest"]> & better_call.InferHeaders<Opts & {
        method: "*";
    }, (Opts & {
        method: "*";
    })["requireHeaders"]> & {
        params?: Record<string, string>;
        query?: Record<string, string>;
    } & better_call.ContextTools)[key]; } : never) => Promise<R_1>): Endpoint<better_call.Handler<string, Opts & {
        method: "*";
    }, R_1>, Opts & {
        method: "*";
    }>;
};
declare const createAuthEndpoint: <Path extends string, Opts extends better_call.EndpointOptions, R extends EndpointResponse>(path: Path, options: Opts, handler: (ctx: better_call.InferBody<Opts, Opts["body"] & (undefined extends better_call.InferUseOptions<Opts>["body"] ? {} : better_call.InferUseOptions<Opts>["body"])> & better_call.InferParam<Path, better_call.InferParamPath<Path>, better_call.InferParamWildCard<Path>> & better_call.InferMethod<Opts["method"]> & better_call.InferHeaders<Opts, Opts["requireHeaders"]> & better_call.InferRequest<Opts, Opts["requireRequest"]> & better_call.InferQuery<Opts["query"]> & {
    _flag?: "json" | "router" | "default";
    asResponse?: boolean;
} & better_call.InferUse<Opts["use"]> & {
    context: AuthContext;
} & Omit<better_call.ContextTools, "_flag"> extends infer T ? { [key in keyof T]: (better_call.InferBody<Opts, Opts["body"] & (undefined extends better_call.InferUseOptions<Opts>["body"] ? {} : better_call.InferUseOptions<Opts>["body"])> & better_call.InferParam<Path, better_call.InferParamPath<Path>, better_call.InferParamWildCard<Path>> & better_call.InferMethod<Opts["method"]> & better_call.InferHeaders<Opts, Opts["requireHeaders"]> & better_call.InferRequest<Opts, Opts["requireRequest"]> & better_call.InferQuery<Opts["query"]> & {
    _flag?: "json" | "router" | "default";
    asResponse?: boolean;
} & better_call.InferUse<Opts["use"]> & {
    context: AuthContext;
} & Omit<better_call.ContextTools, "_flag">)[key]; } : never) => Promise<R>) => {
    <C extends better_call.HasRequiredKeys<better_call.Context<Path, Opts>> extends true ? [better_call.Context<Path, Opts>] : [(better_call.Context<Path, Opts> | undefined)?]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : R extends {
        _flag: "json";
    } ? R extends {
        body: infer B;
    } ? B : null : Awaited<R>>;
    path: Path;
    options: Opts;
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};
type AuthEndpoint = Endpoint<(ctx: {
    options: BetterAuthOptions;
    body: any;
    query: any;
    params: any;
    headers: Headers;
}) => Promise<EndpointResponse>>;
type AuthMiddleware = ReturnType<typeof createAuthMiddleware>;

type FieldType = "string" | "number" | "boolean" | "date" | `${"string" | "number"}[]` | Array<LiteralString>;
type Primitive = string | number | boolean | Date | null | undefined | string[] | number[];
type FieldAttributeConfig<T extends FieldType = FieldType> = {
    /**
     * If the field should be required on a new record.
     * @default false
     */
    required?: boolean;
    /**
     * If the value should be returned on a response body.
     * @default true
     */
    returned?: boolean;
    /**
     * If a value should be provided when creating a new record.
     * @default true
     */
    input?: boolean;
    /**
     * Default value for the field
     *
     * Note: This will not create a default value on the database level. It will only
     * be used when creating a new record.
     */
    defaultValue?: Primitive | (() => Primitive);
    /**
     * transform the value before storing it.
     */
    transform?: {
        input?: (value: Primitive) => Primitive | Promise<Primitive>;
        output?: (value: Primitive) => Primitive | Promise<Primitive>;
    };
    /**
     * Reference to another model.
     */
    references?: {
        /**
         * The model to reference.
         */
        model: string;
        /**
         * The field on the referenced model.
         */
        field: string;
        /**
         * The action to perform when the reference is deleted.
         * @default "cascade"
         */
        onDelete?: "no action" | "restrict" | "cascade" | "set null" | "set default";
    };
    unique?: boolean;
    /**
     * A zod schema to validate the value.
     */
    validator?: {
        input?: ZodSchema;
        output?: ZodSchema;
    };
    /**
     * The name of the field on the database.
     */
    fieldName?: string;
};
type FieldAttribute<T extends FieldType = FieldType> = {
    type: T;
} & FieldAttributeConfig<T>;
declare const createFieldAttribute: <T extends FieldType, C extends Omit<FieldAttributeConfig<T>, "type">>(type: T, config?: C) => {
    input?: boolean;
    required?: boolean;
    transform?: {
        input?: (value: Primitive) => Primitive | Promise<Primitive>;
        output?: (value: Primitive) => Primitive | Promise<Primitive>;
    };
    returned?: boolean;
    defaultValue?: Primitive | (() => Primitive);
    references?: {
        /**
         * The model to reference.
         */
        model: string;
        /**
         * The field on the referenced model.
         */
        field: string;
        /**
         * The action to perform when the reference is deleted.
         * @default "cascade"
         */
        onDelete?: "no action" | "restrict" | "cascade" | "set null" | "set default";
    };
    unique?: boolean;
    validator?: {
        input?: ZodSchema;
        output?: ZodSchema;
    };
    fieldName?: string;
    type: T;
};
type InferValueType<T extends FieldType> = T extends "string" ? string : T extends "number" ? number : T extends "boolean" ? boolean : T extends "date" ? Date : T extends `${infer T}[]` ? T extends "string" ? string[] : number[] : T extends Array<any> ? T[number] : never;
type InferFieldsOutput<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? Field[key]["defaultValue"] extends boolean | string | number | Date ? key : never : key]: InferFieldOutput<Field[key]>;
} & {
    [key in Key as Field[key]["returned"] extends false ? never : key]?: InferFieldOutput<Field[key]> | null;
} : {};
type InferFieldsInput<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? never : Field[key]["defaultValue"] extends string | number | boolean | Date ? never : Field[key]["input"] extends false ? never : key]: InferFieldInput<Field[key]>;
} & {
    [key in Key as Field[key]["input"] extends false ? never : key]: InferFieldInput<Field[key]> | undefined | null;
} : {};
/**
 * For client will add "?" on optional fields
 */
type InferFieldsInputClient<Field> = Field extends Record<infer Key, FieldAttribute> ? {
    [key in Key as Field[key]["required"] extends false ? never : Field[key]["defaultValue"] extends string | number | boolean | Date ? never : Field[key]["input"] extends false ? never : key]: InferFieldInput<Field[key]>;
} & {
    [key in Key as Field[key]["input"] extends false ? never : Field[key]["required"] extends false ? key : never]?: InferFieldInput<Field[key]> | undefined | null;
} : {};
type InferFieldOutput<T extends FieldAttribute> = T["returned"] extends false ? never : T["required"] extends false ? InferValueType<T["type"]> | undefined | null : InferValueType<T["type"]>;
type InferFieldInput<T extends FieldAttribute> = InferValueType<T["type"]>;
type PluginFieldAttribute = Omit<FieldAttribute, "transform" | "defaultValue" | "hashValue">;
type InferFieldsFromPlugins<Options extends BetterAuthOptions, Key extends string, Format extends "output" | "input" = "output"> = Options["plugins"] extends Array<infer T> ? T extends {
    schema: {
        [key in Key]: {
            fields: infer Field;
        };
    };
} ? Format extends "output" ? InferFieldsOutput<Field> : InferFieldsInput<Field> : {} : {};
type InferFieldsFromOptions<Options extends BetterAuthOptions, Key extends "session" | "user", Format extends "output" | "input" = "output"> = Options[Key] extends {
    additionalFields: infer Field;
} ? Format extends "output" ? InferFieldsOutput<Field> : InferFieldsInput<Field> : {};

type PluginSchema = {
    [table in string]: {
        fields: {
            [field in string]: FieldAttribute;
        };
        disableMigration?: boolean;
        modelName?: string;
    };
};
type HookBeforeHandler = (context: HookEndpointContext) => Promise<void | {
    context?: Partial<HookEndpointContext>;
} | Response | {
    response: Record<string, any>;
    body: any;
    _flag: "json";
}>;
type HookAfterHandler = (context: HookEndpointContext) => Promise<void | {
    responseHeader?: Headers;
} | Response | {
    response: Record<string, any>;
    body: any;
    _flag: "json";
}>;
type BetterAuthPlugin = {
    id: LiteralString;
    /**
     * The init function is called when the plugin is initialized.
     * You can return a new context or modify the existing context.
     */
    init?: (ctx: AuthContext) => {
        context?: DeepPartial<Omit<AuthContext, "options">>;
        options?: Partial<BetterAuthOptions>;
    } | void;
    endpoints?: {
        [key: string]: AuthEndpoint;
    };
    middlewares?: {
        path: string;
        middleware: Endpoint;
    }[];
    onRequest?: (request: Request, ctx: AuthContext) => Promise<{
        response: Response;
    } | {
        request: Request;
    } | void>;
    onResponse?: (response: Response, ctx: AuthContext) => Promise<{
        response: Response;
    } | void>;
    hooks?: {
        before?: {
            matcher: (context: HookEndpointContext) => boolean;
            handler: HookBeforeHandler;
        }[];
        after?: {
            matcher: (context: HookEndpointContext<{
                returned: APIError | Response | Record<string, any>;
                endpoint: Endpoint;
            }>) => boolean;
            handler: HookAfterHandler;
        }[];
    };
    /**
     * Schema the plugin needs
     *
     * This will also be used to migrate the database. If the fields are dynamic from the plugins
     * configuration each time the configuration is changed a new migration will be created.
     *
     * NOTE: If you want to create migrations manually using
     * migrations option or any other way you
     * can disable migration per table basis.
     *
     * @example
     * ```ts
     * schema: {
     * 	user: {
     * 		fields: {
     * 			email: {
     * 				 type: "string",
     * 			},
     * 			emailVerified: {
     * 				type: "boolean",
     * 				defaultValue: false,
     * 			},
     * 		},
     * 	}
     * } as PluginSchema
     * ```
     */
    schema?: PluginSchema;
    /**
     * The migrations of the plugin. If you define schema that will automatically create
     * migrations for you.
     *
     * ⚠️ Only uses this if you dont't want to use the schema option and you disabled migrations for
     * the tables.
     */
    migrations?: Record<string, Migration>;
    /**
     * The options of the plugin
     */
    options?: Record<string, any>;
    /**
     * types to be inferred
     */
    $Infer?: Record<string, any>;
    /**
     * The rate limit rules to apply to specific paths.
     */
    rateLimit?: {
        window: number;
        max: number;
        pathMatcher: (path: string) => boolean;
    }[];
    /**
     * The error codes returned by the plugin
     */
    $ERROR_CODES?: Record<string, string>;
};
type InferOptionSchema<S extends PluginSchema> = S extends Record<string, {
    fields: infer Fields;
}> ? {
    [K in keyof S]?: {
        modelName?: string;
        fields: {
            [P in keyof Fields]?: string;
        };
    };
} : never;
type InferPluginErrorCodes<O extends BetterAuthOptions> = O["plugins"] extends Array<infer P> ? UnionToIntersection<P extends BetterAuthPlugin ? P["$ERROR_CODES"] extends Record<string, any> ? P["$ERROR_CODES"] : {} : {}> : {};

/**
 * Adapter where clause
 */
type Where = {
    operator?: "eq" | "ne" | "lt" | "lte" | "gt" | "gte" | "in" | "contains" | "starts_with" | "ends_with";
    value: string | number | boolean | string[] | number[];
    field: string;
    connector?: "AND" | "OR";
};
/**
 * Adapter Interface
 */
type Adapter = {
    id: string;
    create: <T extends Record<string, any>, R = T>(data: {
        model: string;
        data: T;
        select?: string[];
    }) => Promise<R>;
    findOne: <T>(data: {
        model: string;
        where: Where[];
        select?: string[];
    }) => Promise<T | null>;
    findMany: <T>(data: {
        model: string;
        where?: Where[];
        limit?: number;
        sortBy?: {
            field: string;
            direction: "asc" | "desc";
        };
        offset?: number;
    }) => Promise<T[]>;
    /**
     * ⚠︎ Update may not return the updated data
     * if multiple where clauses are provided
     */
    update: <T>(data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }) => Promise<T | null>;
    updateMany: (data: {
        model: string;
        where: Where[];
        update: Record<string, any>;
    }) => Promise<number>;
    delete: <T>(data: {
        model: string;
        where: Where[];
    }) => Promise<void>;
    deleteMany: (data: {
        model: string;
        where: Where[];
    }) => Promise<number>;
    /**
     *
     * @param options
     * @param file - file path if provided by the user
     * @returns
     */
    createSchema?: (options: BetterAuthOptions, file?: string) => Promise<{
        code: string;
        fileName: string;
        append?: boolean;
        overwrite?: boolean;
    }>;
    options?: Record<string, any>;
};
interface AdapterInstance {
    (options: BetterAuthOptions): Adapter;
}
interface SecondaryStorage {
    /**
     *
     * @param key - Key to get
     * @returns - Value of the key
     */
    get: (key: string) => Promise<string | null> | string | null;
    set: (
    /**
     * Key to store
     */
    key: string, 
    /**
     * Value to store
     */
    value: string, 
    /**
     * Time to live in seconds
     */
    ttl?: number) => Promise<void | null | string> | void;
    /**
     *
     * @param key - Key to delete
     */
    delete: (key: string) => Promise<void | null | string> | void;
}

type KyselyDatabaseType = "postgres" | "mysql" | "sqlite" | "mssql";

declare const accountSchema: z.ZodObject<{
    id: z.ZodString;
    providerId: z.ZodString;
    accountId: z.ZodString;
    userId: z.ZodString;
    accessToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    refreshToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    idToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /**
     * Access token expires at
     */
    accessTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    /**
     * Refresh token expires at
     */
    refreshTokenExpiresAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    /**
     * The scopes that the user has authorized
     */
    scope: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    /**
     * Password is only stored in the credential provider
     */
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    providerId: string;
    accountId: string;
    password?: string | null | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
    scope?: string | null | undefined;
}, {
    id: string;
    userId: string;
    providerId: string;
    accountId: string;
    password?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accessToken?: string | null | undefined;
    refreshToken?: string | null | undefined;
    idToken?: string | null | undefined;
    accessTokenExpiresAt?: Date | null | undefined;
    refreshTokenExpiresAt?: Date | null | undefined;
    scope?: string | null | undefined;
}>;
declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodEffects<z.ZodString, string, string>;
    emailVerified: z.ZodDefault<z.ZodBoolean>;
    name: z.ZodString;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    emailVerified: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined;
}, {
    id: string;
    email: string;
    name: string;
    emailVerified?: boolean | undefined;
    image?: string | null | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;
declare const sessionSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    expiresAt: z.ZodDate;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    token: z.ZodString;
    ipAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userAgent: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}, {
    id: string;
    userId: string;
    expiresAt: Date;
    token: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
}>;
declare const verificationSchema: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodString;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
    expiresAt: z.ZodDate;
    identifier: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    value: string;
    createdAt: Date;
    updatedAt: Date;
    expiresAt: Date;
    identifier: string;
}, {
    id: string;
    value: string;
    expiresAt: Date;
    identifier: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}>;

type Models = "user" | "account" | "session" | "verification" | "rate-limit" | "organization" | "member" | "invitation" | "jwks" | "passkey" | "two-factor";
type AdditionalUserFieldsInput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "user", "input"> & InferFieldsFromOptions<Options, "user", "input">;
type AdditionalUserFieldsOutput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "user"> & InferFieldsFromOptions<Options, "user">;
type AdditionalSessionFieldsInput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "session", "input"> & InferFieldsFromOptions<Options, "session", "input">;
type AdditionalSessionFieldsOutput<Options extends BetterAuthOptions> = InferFieldsFromPlugins<Options, "session"> & InferFieldsFromOptions<Options, "session">;
type InferUser<O extends BetterAuthOptions | Auth> = UnionToIntersection<StripEmptyObjects<User & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
type InferSession<O extends BetterAuthOptions | Auth> = UnionToIntersection<StripEmptyObjects<Session & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
type InferPluginTypes<O extends BetterAuthOptions> = O["plugins"] extends Array<infer P> ? UnionToIntersection<P extends BetterAuthPlugin ? P["$Infer"] extends Record<string, any> ? P["$Infer"] : {} : {}> : {};
interface RateLimit {
    /**
     * The key to use for rate limiting
     */
    key: string;
    /**
     * The number of requests made
     */
    count: number;
    /**
     * The last request time in milliseconds
     */
    lastRequest: number;
}
type User = z.infer<typeof userSchema>;
type Account = z.infer<typeof accountSchema>;
type Session = z.infer<typeof sessionSchema>;
type Verification = z.infer<typeof verificationSchema>;

type LogLevel = "info" | "success" | "warn" | "error" | "debug";
declare const levels: readonly ["info", "success", "warn", "error", "debug"];
declare function shouldPublishLog(currentLogLevel: LogLevel, logLevel: LogLevel): boolean;
interface Logger {
    disabled?: boolean;
    level?: Exclude<LogLevel, "success">;
    log?: (level: Exclude<LogLevel, "success">, message: string, ...args: any[]) => void;
}
type LogHandlerParams = Parameters<NonNullable<Logger["log"]>> extends [
    LogLevel,
    ...infer Rest
] ? Rest : never;
declare const createLogger: (options?: Logger) => Record<LogLevel, (...params: LogHandlerParams) => void>;
declare const logger: Record<LogLevel, (message: string, ...args: any[]) => void>;

type BetterAuthOptions = {
    /**
     * The name of the application
     *
     * process.env.APP_NAME
     *
     * @default "Better Auth"
     */
    appName?: string;
    /**
     * Base URL for the better auth. This is typically the
     * root URL where your application server is hosted.
     * If not explicitly set,
     * the system will check the following environment variable:
     *
     * process.env.BETTER_AUTH_URL
     *
     * If not set it will throw an error.
     */
    baseURL?: string;
    /**
     * Base path for the better auth. This is typically
     * the path where the
     * better auth routes are mounted.
     *
     * @default "/api/auth"
     */
    basePath?: string;
    /**
     * The secret to use for encryption,
     * signing and hashing.
     *
     * By default better auth will look for
     * the following environment variables:
     * process.env.BETTER_AUTH_SECRET,
     * process.env.AUTH_SECRET
     * If none of these environment
     * variables are set,
     * it will default to
     * "better-auth-secret-123456789".
     *
     * on production if it's not set
     * it will throw an error.
     *
     * you can generate a good secret
     * using the following command:
     * @example
     * ```bash
     * openssl rand -base64 32
     * ```
     */
    secret?: string;
    /**
     * Database configuration
     */
    database?: PostgresPool | MysqlPool | Database | Dialect | AdapterInstance | {
        dialect: Dialect;
        type: KyselyDatabaseType;
        /**
         * casing for table names
         *
         * @default "camel"
         */
        casing?: "snake" | "camel";
    } | {
        /**
         * Kysely instance
         */
        db: Kysely<any>;
        /**
         * Database type between postgres, mysql and sqlite
         */
        type: KyselyDatabaseType;
        /**
         * casing for table names
         *
         * @default "camel"
         */
        casing?: "snake" | "camel";
    };
    /**
     * Secondary storage configuration
     *
     * This is used to store session and rate limit data.
     */
    secondaryStorage?: SecondaryStorage;
    /**
     * Email verification configuration
     */
    emailVerification?: {
        /**
         * Send a verification email
         * @param data the data object
         * @param request the request object
         */
        sendVerificationEmail?: (
        /**
         * @param user the user to send the
         * verification email to
         * @param url the url to send the verification email to
         * it contains the token as well
         * @param token the token to send the verification email to
         */
        data: {
            user: User;
            url: string;
            token: string;
        }, 
        /**
         * The request object
         */
        request?: Request) => Promise<void>;
        /**
         * Send a verification email automatically
         * after sign up
         *
         * @default false
         */
        sendOnSignUp?: boolean;
        /**
         * Auto signin the user after they verify their email
         */
        autoSignInAfterVerification?: boolean;
    };
    /**
     * Email and password authentication
     */
    emailAndPassword?: {
        /**
         * Enable email and password authentication
         *
         * @default false
         */
        enabled: boolean;
        /**
         * Require email verification before a session
         * can be created for the user.
         *
         * if the user is not verified, the user will not be able to sign in
         * and on sign in attempts, the user will be prompted to verify their email.
         */
        requireEmailVerification?: boolean;
        /**
         * The maximum length of the password.
         *
         * @default 128
         */
        maxPasswordLength?: number;
        /**
         * The minimum length of the password.
         *
         * @default 8
         */
        minPasswordLength?: number;
        /**
         * send reset password
         */
        sendResetPassword?: (
        /**
         * @param user the user to send the
         * reset password email to
         * @param url the url to send the reset password email to
         * @param token the token to send to the user (could be used instead of sending the url
         * if you need to redirect the user to custom route)
         */
        data: {
            user: User;
            url: string;
            token: string;
        }, 
        /**
         * The request object
         */
        request?: Request) => Promise<void>;
        /**
         * Number of seconds the reset password token is
         * valid for.
         * @default 1 hour (60 * 60)
         */
        resetPasswordTokenExpiresIn?: number;
        /**
         * Password hashing and verification
         *
         * By default Scrypt is used for password hashing and
         * verification. You can provide your own hashing and
         * verification function. if you want to use a
         * different algorithm.
         */
        password?: {
            hash?: (password: string) => Promise<string>;
            verify?: (data: {
                hash: string;
                password: string;
            }) => Promise<boolean>;
        };
        /**
         * Automatically sign in the user after sign up
         */
        autoSignIn?: boolean;
    };
    /**
     * list of social providers
     */
    socialProviders?: SocialProviders;
    /**
     * List of Better Auth plugins
     */
    plugins?: BetterAuthPlugin[];
    /**
     * User configuration
     */
    user?: {
        /**
         * The model name for the user. Defaults to "user".
         */
        modelName?: string;
        fields?: Partial<Record<keyof OmitId<User>, string>>;
        /**
         * Additional fields for the session
         */
        additionalFields?: {
            [key: string]: FieldAttribute;
        };
        /**
         * Changing email configuration
         */
        changeEmail?: {
            /**
             * Enable changing email
             * @default false
             */
            enabled: boolean;
            /**
             * Send a verification email when the user changes their email.
             * @param data the data object
             * @param request the request object
             */
            sendChangeEmailVerification?: (data: {
                user: User;
                newEmail: string;
                url: string;
                token: string;
            }, request?: Request) => Promise<void>;
        };
        /**
         * User deletion configuration
         */
        deleteUser?: {
            /**
             * Enable user deletion
             */
            enabled?: boolean;
            /**
             * Send a verification email when the user deletes their account.
             *
             * if this is not set, the user will be deleted immediately.
             * @param data the data object
             * @param request the request object
             */
            sendDeleteAccountVerification?: (data: {
                user: User;
                url: string;
                token: string;
            }, request?: Request) => Promise<void>;
            /**
             * A function that is called before a user is deleted.
             *
             * to interrupt with error you can throw `APIError`
             */
            beforeDelete?: (user: User, request?: Request) => Promise<void>;
            /**
             * A function that is called after a user is deleted.
             *
             * This is useful for cleaning up user data
             */
            afterDelete?: (user: User, request?: Request) => Promise<void>;
        };
    };
    session?: {
        /**
         * The model name for the session.
         *
         * @default "session"
         */
        modelName?: string;
        /**
         * Map fields
         *
         * @example
         * ```ts
         * {
         *  userId: "user_id"
         * }
         */
        fields?: Partial<Record<keyof OmitId<Session>, string>>;
        /**
         * Expiration time for the session token. The value
         * should be in seconds.
         * @default 7 days (60 * 60 * 24 * 7)
         */
        expiresIn?: number;
        /**
         * How often the session should be refreshed. The value
         * should be in seconds.
         * If set 0 the session will be refreshed every time it is used.
         * @default 1 day (60 * 60 * 24)
         */
        updateAge?: number;
        /**
         * Additional fields for the session
         */
        additionalFields?: {
            [key: string]: FieldAttribute;
        };
        /**
         * By default if secondary storage is provided
         * the session is stored in the secondary storage.
         *
         * Set this to true to store the session in the database
         * as well.
         *
         * Reads are always done from the secondary storage.
         *
         * @default false
         */
        storeSessionInDatabase?: boolean;
        /**
         * Enable caching session in cookie
         */
        cookieCache?: {
            /**
             * max age of the cookie
             * @default 5 minutes (5 * 60)
             */
            maxAge?: number;
            /**
             * Enable caching session in cookie
             * @default false
             */
            enabled?: boolean;
        };
        /**
         * The age of the session to consider it fresh.
         *
         * This is used to check if the session is fresh
         * for sensitive operations. (e.g. deleting an account)
         *
         * If the session is not fresh, the user should be prompted
         * to sign in again.
         *
         * If set to 0, the session will be considered fresh every time. (⚠︎ not recommended)
         *
         * @default 5 minutes (5 * 60)
         */
        freshAge?: number;
    };
    account?: {
        modelName?: string;
        fields?: Partial<Record<keyof OmitId<Account>, string>>;
        accountLinking?: {
            /**
             * Enable account linking
             *
             * @default true
             */
            enabled?: boolean;
            /**
             * List of trusted providers
             */
            trustedProviders?: Array<LiteralUnion<SocialProviderList[number] | "email-password", string>>;
        };
    };
    /**
     * Verification configuration
     */
    verification?: {
        modelName?: string;
        fields?: Partial<Record<keyof OmitId<Verification>, string>>;
    };
    /**
     * List of trusted origins.
     */
    trustedOrigins?: string[];
    /**
     * Rate limiting configuration
     */
    rateLimit?: {
        /**
         * By default, rate limiting is only
         * enabled on production.
         */
        enabled?: boolean;
        /**
         * Default window to use for rate limiting. The value
         * should be in seconds.
         *
         * @default 10 seconds
         */
        window?: number;
        /**
         * The default maximum number of requests allowed within the window.
         *
         * @default 100 requests
         */
        max?: number;
        /**
         * Custom rate limit rules to apply to
         * specific paths.
         */
        customRules?: {
            [key: string]: {
                /**
                 * The window to use for the custom rule.
                 */
                window: number;
                /**
                 * The maximum number of requests allowed within the window.
                 */
                max: number;
            } | ((request: Request) => {
                window: number;
                max: number;
            } | Promise<{
                window: number;
                max: number;
            }>);
        };
        /**
         * Storage configuration
         *
         * By default, rate limiting is stored in memory. If you passed a
         * secondary storage, rate limiting will be stored in the secondary
         * storage.
         *
         * @default "memory"
         */
        storage?: "memory" | "database" | "secondary-storage";
        /**
         * If database is used as storage, the name of the table to
         * use for rate limiting.
         *
         * @default "rateLimit"
         */
        modelName?: string;
        /**
         * Custom field names for the rate limit table
         */
        fields?: Record<keyof RateLimit, string>;
        /**
         * custom storage configuration.
         *
         * NOTE: If custom storage is used storage
         * is ignored
         */
        customStorage?: {
            get: (key: string) => Promise<RateLimit | undefined>;
            set: (key: string, value: RateLimit) => Promise<void>;
        };
    };
    /**
     * Advanced options
     */
    advanced?: {
        /**
         * Ip address configuration
         */
        ipAddress?: {
            /**
             * List of headers to use for ip address
             *
             * Ip address is used for rate limiting and session tracking
             *
             * @example ["x-client-ip", "x-forwarded-for"]
             *
             * @default
             * @link https://github.com/better-auth/better-auth/blob/main/packages/better-auth/src/utils/get-request-ip.ts#L8
             */
            ipAddressHeaders?: string[];
            /**
             * Disable ip tracking
             *
             * ⚠︎ This is a security risk and it may expose your application to abuse
             */
            disableIpTracking?: boolean;
        };
        /**
         * Use secure cookies
         *
         * @default false
         */
        useSecureCookies?: boolean;
        /**
         * Disable trusted origins check
         *
         * ⚠︎ This is a security risk and it may expose your application to CSRF attacks
         */
        disableCSRFCheck?: boolean;
        /**
         * Configure cookies to be cross subdomains
         */
        crossSubDomainCookies?: {
            /**
             * Enable cross subdomain cookies
             */
            enabled: boolean;
            /**
             * Additional cookies to be shared across subdomains
             */
            additionalCookies?: string[];
            /**
             * The domain to use for the cookies
             *
             * By default, the domain will be the root
             * domain from the base URL.
             */
            domain?: string;
        };
        cookies?: {
            [key: string]: {
                name?: string;
                attributes?: CookieOptions;
            };
        };
        defaultCookieAttributes?: CookieOptions;
        /**
         * Prefix for cookies. If a cookie name is provided
         * in cookies config, this will be overridden.
         *
         * @default
         * ```txt
         * "appName" -> which defaults to "better-auth"
         * ```
         */
        cookiePrefix?: string;
        /**
         * Custom generateId function.
         *
         * If not provided, random ids will be generated.
         * If set to false, the database's auto generated id will be used.
         */
        generateId?: ((options: {
            model: LiteralUnion<Models, string>;
            size?: number;
        }) => string) | false;
    };
    logger?: Logger;
    /**
     * allows you to define custom hooks that can be
     * executed during lifecycle of core database
     * operations.
     */
    databaseHooks?: {
        /**
         * User hooks
         */
        user?: {
            create?: {
                /**
                 * Hook that is called before a user is created.
                 * if the hook returns false, the user will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (user: User) => Promise<boolean | void | {
                    data: User & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a user is created.
                 */
                after?: (user: User) => Promise<void>;
            };
            update?: {
                /**
                 * Hook that is called before a user is updated.
                 * if the hook returns false, the user will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (user: Partial<User>) => Promise<boolean | void | {
                    data: User & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a user is updated.
                 */
                after?: (user: User) => Promise<void>;
            };
        };
        /**
         * Session Hook
         */
        session?: {
            create?: {
                /**
                 * Hook that is called before a session is updated.
                 * if the hook returns false, the session will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (session: Session) => Promise<boolean | void | {
                    data: Session & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a session is updated.
                 */
                after?: (session: Session) => Promise<void>;
            };
            /**
             * Update hook
             */
            update?: {
                /**
                 * Hook that is called before a user is updated.
                 * if the hook returns false, the session will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (session: Partial<Session>) => Promise<boolean | void | {
                    data: Session & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a session is updated.
                 */
                after?: (session: Session) => Promise<void>;
            };
        };
        /**
         * Account Hook
         */
        account?: {
            create?: {
                /**
                 * Hook that is called before a account is created.
                 * If the hook returns false, the account will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (account: Account) => Promise<boolean | void | {
                    data: Account & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a account is created.
                 */
                after?: (account: Account) => Promise<void>;
            };
            /**
             * Update hook
             */
            update?: {
                /**
                 * Hook that is called before a account is update.
                 * If the hook returns false, the user will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (account: Partial<Account>) => Promise<boolean | void | {
                    data: Account & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a account is updated.
                 */
                after?: (account: Account) => Promise<void>;
            };
        };
        /**
         * Verification Hook
         */
        verification?: {
            create?: {
                /**
                 * Hook that is called before a verification is created.
                 * if the hook returns false, the verification will not be created.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (verification: Verification) => Promise<boolean | void | {
                    data: Verification & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a verification is created.
                 */
                after?: (verification: Verification) => Promise<void>;
            };
            update?: {
                /**
                 * Hook that is called before a verification is updated.
                 * if the hook returns false, the verification will not be updated.
                 * If the hook returns an object, it'll be used instead of the original data
                 */
                before?: (verification: Partial<Verification>) => Promise<boolean | void | {
                    data: Verification & Record<string, any>;
                }>;
                /**
                 * Hook that is called after a verification is updated.
                 */
                after?: (verification: Verification) => Promise<void>;
            };
        };
    };
    /**
     * API error handling
     */
    onAPIError?: {
        /**
         * Throw an error on API error
         *
         * @default false
         */
        throw?: boolean;
        /**
         * Custom error handler
         *
         * @param error
         * @param ctx - Auth context
         */
        onError?: (error: unknown, ctx: AuthContext) => void | Promise<void>;
    };
    /**
     * Hooks
     */
    hooks?: {
        /**
         * Before a request is processed
         */
        before?: HookBeforeHandler;
        /**
         * After a request is processed
         */
        after?: HookAfterHandler;
    };
};

type HookEndpointContext<C extends Record<string, any> = {}> = ContextTools & {
    context: AuthContext & C & {
        returned?: APIError | Response | Record<string, any>;
    };
} & {
    body: any;
    request?: Request;
    headers?: Headers;
    params?: Record<string, string> | undefined;
    query?: any;
    returnedHeaders: Headers;
    endpointOptions: EndpointOptions;
    method?: any;
};
type GenericEndpointContext = ContextTools & {
    context: AuthContext;
} & {
    body?: any;
    request?: Request;
    headers?: Headers;
    params?: Record<string, string> | undefined;
    query?: any;
    method?: any;
};

type FilteredAPI<API> = Omit<API, API extends {
    [key in infer K]: Endpoint;
} ? K extends string ? K extends "getSession" ? K : API[K]["options"]["metadata"] extends {
    isAction: false;
} ? K : never : never : never>;
type FilterActions<API> = Omit<API, API extends {
    [key in infer K]: Endpoint;
} ? K extends string ? API[K]["options"]["metadata"] extends {
    isAction: false;
} ? K : never : never : never>;
type InferSessionAPI<API> = API extends {
    [key: string]: infer E;
} ? UnionToIntersection<E extends Endpoint ? E["path"] extends "/get-session" ? {
    getSession: <R extends boolean>(context: {
        headers: Headers;
        query?: {
            disableCookieCache?: boolean;
        };
        asResponse?: R;
    }) => false extends R ? Promise<PrettifyDeep<Awaited<ReturnType<E>>>> & {
        options: E["options"];
        path: E["path"];
    } : Promise<Response>;
} : never : never> : never;
type InferAPI<API> = InferSessionAPI<API> & FilteredAPI<API>;

declare const createInternalAdapter: (adapter: Adapter, ctx: {
    options: BetterAuthOptions;
    hooks: Exclude<BetterAuthOptions["databaseHooks"], undefined>[];
    generateId: AuthContext["generateId"];
}) => {
    createOAuthUser: (user: Omit<User, "id" | "createdAt" | "updatedAt"> & Partial<User>, account: Omit<Account, "userId" | "id" | "createdAt" | "updatedAt"> & Partial<Account>) => Promise<{
        user: any;
        account: any;
    }>;
    createUser: <T>(user: Omit<User, "id" | "createdAt" | "updatedAt" | "emailVerified"> & Partial<User> & Record<string, any>) => Promise<T & {
        id: string;
        email: string;
        emailVerified: boolean;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image?: string | null | undefined;
    }>;
    createAccount: <T>(account: Omit<Account, "id" | "createdAt" | "updatedAt"> & Partial<Account> & Record<string, any>) => Promise<T & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        providerId: string;
        accountId: string;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
        scope?: string | null | undefined;
    }>;
    listSessions: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    }[]>;
    listUsers: (limit?: number, offset?: number, sortBy?: {
        field: string;
        direction: "asc" | "desc";
    }, where?: Where[]) => Promise<{
        id: string;
        email: string;
        emailVerified: boolean;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image?: string | null | undefined;
    }[]>;
    deleteUser: (userId: string) => Promise<void>;
    createSession: (userId: string, request: Request | Headers | undefined, dontRememberMe?: boolean, override?: Partial<Session> & Record<string, any>) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    }>;
    findSession: (token: string) => Promise<{
        session: Session;
        user: User;
    } | null>;
    findSessions: (sessionTokens: string[]) => Promise<{
        session: Session;
        user: User;
    }[]>;
    updateSession: (sessionToken: string, session: Partial<Session> & Record<string, any>) => Promise<any>;
    deleteSession: (token: string) => Promise<void>;
    deleteAccounts: (userId: string) => Promise<void>;
    deleteSessions: (userIdOrSessionTokens: string | string[]) => Promise<void>;
    findOAuthUser: (email: string, accountId: string, providerId: string) => Promise<{
        user: {
            id: string;
            email: string;
            emailVerified: boolean;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        };
        accounts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            providerId: string;
            accountId: string;
            password?: string | null | undefined;
            accessToken?: string | null | undefined;
            refreshToken?: string | null | undefined;
            idToken?: string | null | undefined;
            accessTokenExpiresAt?: Date | null | undefined;
            refreshTokenExpiresAt?: Date | null | undefined;
            scope?: string | null | undefined;
        }[];
    } | null>;
    findUserByEmail: (email: string, options?: {
        includeAccounts: boolean;
    }) => Promise<{
        user: {
            id: string;
            email: string;
            emailVerified: boolean;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            image?: string | null | undefined;
        };
        accounts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            providerId: string;
            accountId: string;
            password?: string | null | undefined;
            accessToken?: string | null | undefined;
            refreshToken?: string | null | undefined;
            idToken?: string | null | undefined;
            accessTokenExpiresAt?: Date | null | undefined;
            refreshTokenExpiresAt?: Date | null | undefined;
            scope?: string | null | undefined;
        }[];
    } | null>;
    findUserById: (userId: string) => Promise<{
        id: string;
        email: string;
        emailVerified: boolean;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        image?: string | null | undefined;
    } | null>;
    linkAccount: (account: Omit<Account, "id" | "createdAt" | "updatedAt"> & Partial<Account>) => Promise<any>;
    updateUser: (userId: string, data: Partial<User> & Record<string, any>) => Promise<any>;
    updateUserByEmail: (email: string, data: Partial<User & Record<string, any>>) => Promise<any>;
    updatePassword: (userId: string, password: string) => Promise<void>;
    findAccounts: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        providerId: string;
        accountId: string;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
        scope?: string | null | undefined;
    }[]>;
    findAccount: (accountId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        providerId: string;
        accountId: string;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
        scope?: string | null | undefined;
    } | null>;
    findAccountByUserId: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        providerId: string;
        accountId: string;
        password?: string | null | undefined;
        accessToken?: string | null | undefined;
        refreshToken?: string | null | undefined;
        idToken?: string | null | undefined;
        accessTokenExpiresAt?: Date | null | undefined;
        refreshTokenExpiresAt?: Date | null | undefined;
        scope?: string | null | undefined;
    }[]>;
    updateAccount: (accountId: string, data: Partial<Account>) => Promise<any>;
    createVerificationValue: (data: Omit<Verification, "createdAt" | "id" | "updatedAt"> & Partial<Verification>) => Promise<{
        id: string;
        value: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date;
        identifier: string;
    }>;
    findVerificationValue: (identifier: string) => Promise<{
        id: string;
        value: string;
        createdAt: Date;
        updatedAt: Date;
        expiresAt: Date;
        identifier: string;
    } | null>;
    deleteVerificationValue: (id: string) => Promise<void>;
    deleteVerificationByIdentifier: (identifier: string) => Promise<void>;
    updateVerificationValue: (id: string, data: Partial<Verification>) => Promise<any>;
};
type InternalAdapter = ReturnType<typeof createInternalAdapter>;

type BetterAuthDbSchema = Record<string, {
    /**
     * The name of the table in the database
     */
    modelName: string;
    /**
     * The fields of the table
     */
    fields: Record<string, FieldAttribute>;
    /**
     * Whether to disable migrations for this table
     * @default false
     */
    disableMigrations?: boolean;
    /**
     * The order of the table
     */
    order?: number;
}>;
declare const getAuthTables: (options: BetterAuthOptions) => BetterAuthDbSchema;

interface CookieAttributes {
    value: string;
    "max-age"?: number;
    expires?: Date;
    domain?: string;
    path?: string;
    secure?: boolean;
    httponly?: boolean;
    samesite?: "strict" | "lax" | "none";
    [key: string]: any;
}
declare function parseSetCookieHeader(setCookie: string): Map<string, CookieAttributes>;

declare function createCookieGetter(options: BetterAuthOptions): (cookieName: string, overrideAttributes?: Partial<CookieOptions>) => {
    name: string;
    attributes: CookieOptions;
};
declare function getCookies(options: BetterAuthOptions): {
    sessionToken: {
        name: string;
        options: CookieOptions;
    };
    /**
     * This cookie is used to store the session data in the cookie
     * This is useful for when you want to cache the session in the cookie
     */
    sessionData: {
        name: string;
        options: CookieOptions;
    };
    dontRememberToken: {
        name: string;
        options: CookieOptions;
    };
};
type BetterAuthCookies = ReturnType<typeof getCookies>;
declare function setCookieCache(ctx: GenericEndpointContext, session: {
    session: Session & Record<string, any>;
    user: User;
}): Promise<void>;
declare function setSessionCookie(ctx: GenericEndpointContext, session: {
    session: Session & Record<string, any>;
    user: User;
}, dontRememberMe?: boolean, overrides?: Partial<CookieOptions>): Promise<void>;
declare function deleteSessionCookie(ctx: GenericEndpointContext): void;
declare function parseCookies(cookieHeader: string): Map<string, string>;
type EligibleCookies = (string & {}) | (keyof BetterAuthCookies & {});

declare function checkPassword(userId: string, c: GenericEndpointContext): Promise<boolean>;

declare const init: (options: BetterAuthOptions) => Promise<AuthContext>;
type AuthContext = {
    options: BetterAuthOptions;
    appName: string;
    baseURL: string;
    trustedOrigins: string[];
    /**
     * New session that will be set after the request
     * meaning: there is a `set-cookie` header that will set
     * the session cookie. This is the fetched session. And it's set
     * by `setNewSession` method.
     */
    newSession: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null;
    session: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null;
    setNewSession: (session: {
        session: Session & Record<string, any>;
        user: User & Record<string, any>;
    } | null) => void;
    socialProviders: OAuthProvider[];
    authCookies: BetterAuthCookies;
    logger: ReturnType<typeof createLogger>;
    rateLimit: {
        enabled: boolean;
        window: number;
        max: number;
        storage: "memory" | "database" | "secondary-storage";
    } & BetterAuthOptions["rateLimit"];
    adapter: Adapter;
    internalAdapter: ReturnType<typeof createInternalAdapter>;
    createAuthCookie: ReturnType<typeof createCookieGetter>;
    secret: string;
    sessionConfig: {
        updateAge: number;
        expiresIn: number;
        freshAge: number;
    };
    generateId: (options: {
        model: LiteralUnion<Models, string>;
        size?: number;
    }) => string;
    secondaryStorage: SecondaryStorage | undefined;
    password: {
        hash: (password: string) => Promise<string>;
        verify: (data: {
            password: string;
            hash: string;
        }) => Promise<boolean>;
        config: {
            minPasswordLength: number;
            maxPasswordLength: number;
        };
        checkPassword: typeof checkPassword;
    };
    tables: ReturnType<typeof getAuthTables>;
};

type isAny<T> = [any extends T ? "true" : "false"] extends ["true"] ? true : false;
type nonoptional<T> = T extends undefined ? never : T;
type nonnullable<T> = T extends null ? never : T;
type equals<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
type toZod<T> = {
    any: never;
    optional: zod.ZodUnion<[toZod<nonoptional<T>>, zod.ZodUndefined]>;
    nullable: zod.ZodUnion<[toZod<nonnullable<T>>, zod.ZodNull]>;
    array: T extends Array<infer U> ? zod.ZodArray<toZod<U>> : never;
    string: zod.ZodString;
    bigint: zod.ZodBigInt;
    number: zod.ZodNumber;
    boolean: zod.ZodBoolean;
    date: zod.ZodDate;
    object: zod.ZodObject<{
        [k in keyof T]: toZod<T[k]>;
    }>;
    rest: never;
}[zodKey<T>];
type zodKey<T> = isAny<T> extends true ? "any" : equals<T, boolean> extends true ? "boolean" : [undefined] extends [T] ? "optional" : [null] extends [T] ? "nullable" : T extends any[] ? "array" : equals<T, string> extends true ? "string" : equals<T, bigint> extends true ? "bigint" : equals<T, number> extends true ? "number" : equals<T, Date> extends true ? "date" : T extends {
    [k: string]: any;
} ? "object" : "rest";

declare const signInSocial: {
    <C extends [better_call.Context<"/sign-in/social", {
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
            /**
             * Callback URL to redirect to after the user
             * has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * callback url to redirect if the user is newly registered.
             *
             * useful if you have different routes for existing users and new users
             */
            newUserCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * Callback url to redirect to if an error happens
             *
             * If it's initiated from the client sdk this defaults to
             * the current url.
             */
            errorCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use`
             */
            provider: z.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
            /**
             * Disable automatic redirection to the provider
             *
             * This is useful if you want to handle the redirection
             * yourself like in a popup or a different tab.
             */
            disableRedirect: z.ZodOptional<z.ZodBoolean>;
            /**
             * ID token from the provider
             *
             * This is used to sign in the user
             * if the user is already signed in with the
             * provider in the frontend.
             *
             * Only applicable if the provider supports
             * it. Currently only `apple` and `google` is
             * supported out of the box.
             */
            idToken: z.ZodOptional<z.ZodObject<{
                /**
                 * ID token from the provider
                 */
                token: z.ZodString;
                /**
                 * The nonce used to generate the token
                 */
                nonce: z.ZodOptional<z.ZodString>;
                /**
                 * Access token from the provider
                 */
                accessToken: z.ZodOptional<z.ZodString>;
                /**
                 * Refresh token from the provider
                 */
                refreshToken: z.ZodOptional<z.ZodString>;
                /**
                 * Expiry date of the token
                 */
                expiresAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }, {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            idToken?: {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        }, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            idToken?: {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
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
                                        session: {
                                            type: string;
                                        };
                                        user: {
                                            type: string;
                                        };
                                        url: {
                                            type: string;
                                        };
                                        redirect: {
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
        token: string;
        url: undefined;
        redirect: boolean;
    } | {
        url: string;
        redirect: boolean;
    }>;
    path: "/sign-in/social";
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
            /**
             * Callback URL to redirect to after the user
             * has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * callback url to redirect if the user is newly registered.
             *
             * useful if you have different routes for existing users and new users
             */
            newUserCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * Callback url to redirect to if an error happens
             *
             * If it's initiated from the client sdk this defaults to
             * the current url.
             */
            errorCallbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use`
             */
            provider: z.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
            /**
             * Disable automatic redirection to the provider
             *
             * This is useful if you want to handle the redirection
             * yourself like in a popup or a different tab.
             */
            disableRedirect: z.ZodOptional<z.ZodBoolean>;
            /**
             * ID token from the provider
             *
             * This is used to sign in the user
             * if the user is already signed in with the
             * provider in the frontend.
             *
             * Only applicable if the provider supports
             * it. Currently only `apple` and `google` is
             * supported out of the box.
             */
            idToken: z.ZodOptional<z.ZodObject<{
                /**
                 * ID token from the provider
                 */
                token: z.ZodString;
                /**
                 * The nonce used to generate the token
                 */
                nonce: z.ZodOptional<z.ZodString>;
                /**
                 * Access token from the provider
                 */
                accessToken: z.ZodOptional<z.ZodString>;
                /**
                 * Refresh token from the provider
                 */
                refreshToken: z.ZodOptional<z.ZodString>;
                /**
                 * Expiry date of the token
                 */
                expiresAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }, {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            idToken?: {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
        }, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            idToken?: {
                token: string;
                expiresAt?: number | undefined;
                accessToken?: string | undefined;
                refreshToken?: string | undefined;
                nonce?: string | undefined;
            } | undefined;
            callbackURL?: string | undefined;
            newUserCallbackURL?: string | undefined;
            errorCallbackURL?: string | undefined;
            disableRedirect?: boolean | undefined;
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
                                        session: {
                                            type: string;
                                        };
                                        user: {
                                            type: string;
                                        };
                                        url: {
                                            type: string;
                                        };
                                        redirect: {
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
declare const signInEmail: {
    <C extends [better_call.Context<"/sign-in/email", {
        method: "POST";
        body: z.ZodObject<{
            /**
             * Email of the user
             */
            email: z.ZodString;
            /**
             * Password of the user
             */
            password: z.ZodString;
            /**
             * Callback URL to use as a redirect for email
             * verification and for possible redirects
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * If this is false, the session will not be remembered
             * @default true
             */
            rememberMe: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        }, {
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
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
                                        user: {
                                            type: string;
                                        };
                                        url: {
                                            type: string;
                                        };
                                        redirect: {
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
        user: {
            id: string;
            email: string;
            name: string;
            image: string | null | undefined;
            emailVerified: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
        redirect: boolean;
        url: string | undefined;
    }>;
    path: "/sign-in/email";
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * Email of the user
             */
            email: z.ZodString;
            /**
             * Password of the user
             */
            password: z.ZodString;
            /**
             * Callback URL to use as a redirect for email
             * verification and for possible redirects
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * If this is false, the session will not be remembered
             * @default true
             */
            rememberMe: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
        }, {
            password: string;
            email: string;
            callbackURL?: string | undefined;
            rememberMe?: boolean | undefined;
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
                                        user: {
                                            type: string;
                                        };
                                        url: {
                                            type: string;
                                        };
                                        redirect: {
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

declare const callbackOAuth: {
    <C extends [better_call.Context<"/callback/:id", {
        method: ("GET" | "POST")[];
        body: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }>>;
        query: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }>>;
        metadata: {
            isAction: false;
        };
    }>]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : void>;
    path: "/callback/:id";
    options: {
        method: ("GET" | "POST")[];
        body: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }>>;
        query: z.ZodOptional<z.ZodObject<{
            code: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            error_description: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }, {
            code?: string | undefined;
            error?: string | undefined;
            error_description?: string | undefined;
            state?: string | undefined;
        }>>;
        metadata: {
            isAction: false;
        };
    };
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};

declare const getSession: <Option extends BetterAuthOptions>() => {
    <C extends [better_call.Context<"/get-session", {
        method: "GET";
        query: z.ZodOptional<z.ZodObject<{
            /**
             * If cookie cache is enabled, it will disable the cache
             * and fetch the session from the database
             */
            disableCookieCache: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>;
            disableRefresh: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            disableCookieCache?: boolean | undefined;
            disableRefresh?: boolean | undefined;
        }, {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: boolean | undefined;
        }>>;
        requireHeaders: true;
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
                                        session: {
                                            type: string;
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                                userId: {
                                                    type: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        user: {
                                            type: string;
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
        session: InferSession<Option>;
        user: InferUser<Option>;
    } | null>;
    path: "/get-session";
    options: {
        method: "GET";
        query: z.ZodOptional<z.ZodObject<{
            /**
             * If cookie cache is enabled, it will disable the cache
             * and fetch the session from the database
             */
            disableCookieCache: z.ZodOptional<z.ZodUnion<[z.ZodBoolean, z.ZodEffects<z.ZodString, boolean, string>]>>;
            disableRefresh: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            disableCookieCache?: boolean | undefined;
            disableRefresh?: boolean | undefined;
        }, {
            disableCookieCache?: string | boolean | undefined;
            disableRefresh?: boolean | undefined;
        }>>;
        requireHeaders: true;
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
                                        session: {
                                            type: string;
                                            properties: {
                                                token: {
                                                    type: string;
                                                };
                                                userId: {
                                                    type: string;
                                                };
                                                expiresAt: {
                                                    type: string;
                                                };
                                            };
                                        };
                                        user: {
                                            type: string;
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
declare const getSessionFromCtx: <U extends Record<string, any> = Record<string, any>, S extends Record<string, any> = Record<string, any>>(ctx: GenericEndpointContext, config?: {
    disableCookieCache?: boolean;
    disableRefresh?: boolean;
}) => Promise<{
    session: S & Session;
    user: U & User;
} | null>;
declare const sessionMiddleware: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
}>, better_call.EndpointOptions>;
declare const freshSessionMiddleware: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
}>, better_call.EndpointOptions>;
/**
 * user active sessions list
 */
declare const listSessions: <Option extends BetterAuthOptions>() => {
    <C extends [better_call.Context<"/list-sessions", {
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
        requireHeaders: true;
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
                                        type: string;
                                        properties: {
                                            token: {
                                                type: string;
                                            };
                                            userId: {
                                                type: string;
                                            };
                                            expiresAt: {
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
    }>]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : Prettify<UnionToIntersection<StripEmptyObjects<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        expiresAt: Date;
        token: string;
        ipAddress?: string | null | undefined;
        userAgent?: string | null | undefined;
    } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
    path: "/list-sessions";
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
        requireHeaders: true;
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
                                        type: string;
                                        properties: {
                                            token: {
                                                type: string;
                                            };
                                            userId: {
                                                type: string;
                                            };
                                            expiresAt: {
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
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};
/**
 * revoke a single session
 */
declare const revokeSession: {
    <C extends [better_call.Context<"/revoke-session", {
        method: "POST";
        body: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
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
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    token: {
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
    }>]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : {
        status: boolean;
    }>;
    path: "/revoke-session";
    options: {
        method: "POST";
        body: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
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
        requireHeaders: true;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    token: {
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
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};
/**
 * revoke all user sessions
 */
declare const revokeSessions: {
    <C extends [better_call.Context<"/revoke-sessions", {
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
        requireHeaders: true;
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
                                        status: {
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
        status: boolean;
    }>;
    path: "/revoke-sessions";
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
        requireHeaders: true;
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
                                        status: {
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
declare const revokeOtherSessions: {
    <C extends [better_call.Context<"/revoke-other-sessions", {
        method: "POST";
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
                    "200": {
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
    path: "/revoke-other-sessions";
    options: {
        method: "POST";
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
                    "200": {
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

declare const signOut: {
    <C extends [better_call.Context<"/sign-out", {
        method: "POST";
        requireHeaders: true;
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
    path: "/sign-out";
    options: {
        method: "POST";
        requireHeaders: true;
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

declare const forgetPassword: {
    <C extends [better_call.Context<"/forget-password", {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The email address of the user to send a password reset email to.
             */
            email: z.ZodString;
            /**
             * The URL to redirect the user to reset their password.
             * If the token isn't valid or expired, it'll be redirected with a query parameter `?
             * error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
             * token=VALID_TOKEN
             */
            redirectTo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            redirectTo?: string | undefined;
        }, {
            email: string;
            redirectTo?: string | undefined;
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
    path: "/forget-password";
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The email address of the user to send a password reset email to.
             */
            email: z.ZodString;
            /**
             * The URL to redirect the user to reset their password.
             * If the token isn't valid or expired, it'll be redirected with a query parameter `?
             * error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?
             * token=VALID_TOKEN
             */
            redirectTo: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            redirectTo?: string | undefined;
        }, {
            email: string;
            redirectTo?: string | undefined;
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
declare const forgetPasswordCallback: {
    <C extends [better_call.Context<"/reset-password/:token", {
        method: "GET";
        query: z.ZodObject<{
            callbackURL: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            callbackURL: string;
        }, {
            callbackURL: string;
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
    }] ? Response : never>;
    path: "/reset-password/:token";
    options: {
        method: "GET";
        query: z.ZodObject<{
            callbackURL: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            callbackURL: string;
        }, {
            callbackURL: string;
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
declare const resetPassword: {
    <C extends [better_call.Context<"/reset-password", {
        query: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
            currentURL?: string | undefined;
        }, {
            token?: string | undefined;
            currentURL?: string | undefined;
        }>>;
        method: "POST";
        body: z.ZodObject<{
            newPassword: z.ZodString;
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            token?: string | undefined;
        }, {
            newPassword: string;
            token?: string | undefined;
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
    path: "/reset-password";
    options: {
        query: z.ZodOptional<z.ZodObject<{
            token: z.ZodOptional<z.ZodString>;
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token?: string | undefined;
            currentURL?: string | undefined;
        }, {
            token?: string | undefined;
            currentURL?: string | undefined;
        }>>;
        method: "POST";
        body: z.ZodObject<{
            newPassword: z.ZodString;
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            token?: string | undefined;
        }, {
            newPassword: string;
            token?: string | undefined;
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

declare function createEmailVerificationToken(secret: string, email: string, 
/**
 * The email to update from
 */
updateTo?: string): Promise<string>;
/**
 * A function to send a verification email to the user
 */
declare function sendVerificationEmailFn(ctx: GenericEndpointContext, user: User): Promise<void>;
declare const sendVerificationEmail: {
    <C extends [better_call.Context<"/send-verification-email", {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: z.ZodObject<{
            email: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            callbackURL?: string | undefined;
        }, {
            email: string;
            callbackURL?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
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
    path: "/send-verification-email";
    options: {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: z.ZodObject<{
            email: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            email: string;
            callbackURL?: string | undefined;
        }, {
            email: string;
            callbackURL?: string | undefined;
        }>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
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
declare const verifyEmail: {
    <C extends [better_call.Context<"/verify-email", {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
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
                                        user: {
                                            type: string;
                                        };
                                        status: {
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
    }] ? Response : void | {
        status: boolean;
    }>;
    path: "/verify-email";
    options: {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
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
                                        user: {
                                            type: string;
                                        };
                                        status: {
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

declare const updateUser: <O extends BetterAuthOptions>() => {
    <C extends better_call.HasRequiredKeys<better_call.Context<"/update-user", {
        method: "POST";
        body: toZod<AdditionalUserFieldsInput<O>> & ZodObject<{
            name: ZodOptional<ZodString>;
            image: ZodOptional<ZodString | ZodNull>;
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
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
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
                                        user: {
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
    }>> extends true ? [better_call.Context<"/update-user", {
        method: "POST";
        body: toZod<AdditionalUserFieldsInput<O>> & ZodObject<{
            name: ZodOptional<ZodString>;
            image: ZodOptional<ZodString | ZodNull>;
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
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
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
                                        user: {
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
    }>] : [(better_call.Context<"/update-user", {
        method: "POST";
        body: toZod<AdditionalUserFieldsInput<O>> & ZodObject<{
            name: ZodOptional<ZodString>;
            image: ZodOptional<ZodString | ZodNull>;
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
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
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
                                        user: {
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
        status: boolean;
    }>;
    path: "/update-user";
    options: {
        method: "POST";
        body: toZod<AdditionalUserFieldsInput<O>> & ZodObject<{
            name: ZodOptional<ZodString>;
            image: ZodOptional<ZodString | ZodNull>;
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
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    image: {
                                        type: string;
                                        description: string;
                                    };
                                };
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
                                        user: {
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
declare const changePassword: {
    <C extends [better_call.Context<"/change-password", {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
            /**
             * The current password of the user
             */
            currentPassword: z.ZodString;
            /**
             * revoke all sessions that are not the
             * current one logged in by the user
             */
            revokeOtherSessions: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
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
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
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
        };
    }>]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : {
        token: string | null;
    }>;
    path: "/change-password";
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
            /**
             * The current password of the user
             */
            currentPassword: z.ZodString;
            /**
             * revoke all sessions that are not the
             * current one logged in by the user
             */
            revokeOtherSessions: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
        }, {
            newPassword: string;
            currentPassword: string;
            revokeOtherSessions?: boolean | undefined;
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
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
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
        };
    };
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};
declare const setPassword: {
    <C extends [better_call.Context<"/set-password", {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
        }, {
            newPassword: string;
        }>;
        metadata: {
            SERVER_ONLY: true;
        };
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
    }>;
    path: "/set-password";
    options: {
        method: "POST";
        body: z.ZodObject<{
            /**
             * The new password to set
             */
            newPassword: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            newPassword: string;
        }, {
            newPassword: string;
        }>;
        metadata: {
            SERVER_ONLY: true;
        };
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
declare const deleteUser: {
    <C extends [better_call.Context<"/delete-user", {
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
            /**
             * The callback URL to redirect to after the user is deleted
             * this is only used on delete user callback
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * The password of the user. If the password isn't provided, session freshness
             * will be checked.
             */
            password: z.ZodOptional<z.ZodString>;
            /**
             * The token to delete the user. If the token is provided, the user will be deleted
             */
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
        }, {
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
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
        message: string;
    }>;
    path: "/delete-user";
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
            /**
             * The callback URL to redirect to after the user is deleted
             * this is only used on delete user callback
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * The password of the user. If the password isn't provided, session freshness
             * will be checked.
             */
            password: z.ZodOptional<z.ZodString>;
            /**
             * The token to delete the user. If the token is provided, the user will be deleted
             */
            token: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
        }, {
            password?: string | undefined;
            token?: string | undefined;
            callbackURL?: string | undefined;
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
declare const deleteUserCallback: {
    <C extends [better_call.Context<"/delete-user/callback", {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
        }>;
    }>]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : {
        success: boolean;
        message: string;
    }>;
    path: "/delete-user/callback";
    options: {
        method: "GET";
        query: z.ZodObject<{
            token: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            token: string;
            callbackURL?: string | undefined;
        }, {
            token: string;
            callbackURL?: string | undefined;
        }>;
    };
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};
declare const changeEmail: {
    <C extends [better_call.Context<"/change-email", {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: z.ZodObject<{
            newEmail: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newEmail: string;
            callbackURL?: string | undefined;
        }, {
            newEmail: string;
            callbackURL?: string | undefined;
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
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                        };
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
    path: "/change-email";
    options: {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: z.ZodObject<{
            newEmail: z.ZodString;
            callbackURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            newEmail: string;
            callbackURL?: string | undefined;
        }, {
            newEmail: string;
            callbackURL?: string | undefined;
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
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object";
                                    properties: {
                                        user: {
                                            type: string;
                                        };
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

declare const error: {
    <C extends [(better_call.Context<"/error", {
        method: "GET";
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "text/html": {
                                schema: {
                                    type: "string";
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    }> | undefined)?]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : Response>;
    path: "/error";
    options: {
        method: "GET";
        metadata: {
            openapi: {
                description: string;
                responses: {
                    "200": {
                        description: string;
                        content: {
                            "text/html": {
                                schema: {
                                    type: "string";
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    };
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};

declare const ok: {
    <C extends [(better_call.Context<"/ok", {
        method: "GET";
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
                                        ok: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    }> | undefined)?]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : {
        ok: boolean;
    }>;
    path: "/ok";
    options: {
        method: "GET";
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
                                        ok: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            isAction: false;
        };
    };
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};

declare const signUpEmail: <O extends BetterAuthOptions>() => {
    <C extends better_call.HasRequiredKeys<better_call.Context<"/sign-up/email", {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: ZodObject<{
            name: ZodString;
            email: ZodString;
            password: ZodString;
        }> & toZod<AdditionalUserFieldsInput<O>>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
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
                                        id: {
                                            type: string;
                                            description: string;
                                        };
                                        email: {
                                            type: string;
                                            description: string;
                                        };
                                        name: {
                                            type: string;
                                            description: string;
                                        };
                                        image: {
                                            type: string;
                                            description: string;
                                        };
                                        emailVerified: {
                                            type: string;
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
    }>> extends true ? [better_call.Context<"/sign-up/email", {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: ZodObject<{
            name: ZodString;
            email: ZodString;
            password: ZodString;
        }> & toZod<AdditionalUserFieldsInput<O>>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
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
                                        id: {
                                            type: string;
                                            description: string;
                                        };
                                        email: {
                                            type: string;
                                            description: string;
                                        };
                                        name: {
                                            type: string;
                                            description: string;
                                        };
                                        image: {
                                            type: string;
                                            description: string;
                                        };
                                        emailVerified: {
                                            type: string;
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
    }>] : [(better_call.Context<"/sign-up/email", {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: ZodObject<{
            name: ZodString;
            email: ZodString;
            password: ZodString;
        }> & toZod<AdditionalUserFieldsInput<O>>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
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
                                        id: {
                                            type: string;
                                            description: string;
                                        };
                                        email: {
                                            type: string;
                                            description: string;
                                        };
                                        name: {
                                            type: string;
                                            description: string;
                                        };
                                        image: {
                                            type: string;
                                            description: string;
                                        };
                                        emailVerified: {
                                            type: string;
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
    }> | undefined)?]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : {
        token: null;
    } | {
        token: string;
    }>;
    path: "/sign-up/email";
    options: {
        method: "POST";
        query: z.ZodOptional<z.ZodObject<{
            currentURL: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentURL?: string | undefined;
        }, {
            currentURL?: string | undefined;
        }>>;
        body: ZodObject<{
            name: ZodString;
            email: ZodString;
            password: ZodString;
        }> & toZod<AdditionalUserFieldsInput<O>>;
        metadata: {
            openapi: {
                description: string;
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object";
                                properties: {
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    email: {
                                        type: string;
                                        description: string;
                                    };
                                    password: {
                                        type: string;
                                        description: string;
                                    };
                                    callbackURL: {
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
                                        id: {
                                            type: string;
                                            description: string;
                                        };
                                        email: {
                                            type: string;
                                            description: string;
                                        };
                                        name: {
                                            type: string;
                                            description: string;
                                        };
                                        image: {
                                            type: string;
                                            description: string;
                                        };
                                        emailVerified: {
                                            type: string;
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

declare const listUserAccounts: {
    <C extends [(better_call.Context<"/list-accounts", {
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
                                        type: string;
                                        properties: {
                                            id: {
                                                type: string;
                                            };
                                            provider: {
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
    }> | undefined)?]>(...ctx: C): Promise<C extends [{
        asResponse: true;
    }] ? Response : {
        id: string;
        provider: string;
    }[]>;
    path: "/list-accounts";
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
                                        type: string;
                                        properties: {
                                            id: {
                                                type: string;
                                            };
                                            provider: {
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
    method: better_call.Method | better_call.Method[];
    headers: Headers;
};
declare const linkSocialAccount: {
    <C extends [better_call.Context<"/link-social", {
        method: "POST";
        requireHeaders: true;
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
            /**
             * Callback URL to redirect to after the user has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use`
             */
            provider: z.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
        }, "strip", z.ZodTypeAny, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            callbackURL?: string | undefined;
        }, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            callbackURL?: string | undefined;
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
                description: string;
                responses: {
                    "200": {
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
        url: string;
        redirect: boolean;
    }>;
    path: "/link-social";
    options: {
        method: "POST";
        requireHeaders: true;
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
            /**
             * Callback URL to redirect to after the user has signed in.
             */
            callbackURL: z.ZodOptional<z.ZodString>;
            /**
             * OAuth2 provider to use`
             */
            provider: z.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
        }, "strip", z.ZodTypeAny, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            callbackURL?: string | undefined;
        }, {
            provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
            callbackURL?: string | undefined;
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
                description: string;
                responses: {
                    "200": {
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

/**
 * A middleware to validate callbackURL and origin against
 * trustedOrigins.
 */
declare const originCheckMiddleware: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, void>, better_call.EndpointOptions>;

declare function getEndpoints<C extends AuthContext, Option extends BetterAuthOptions>(ctx: Promise<C> | C, options: Option): {
    api: {
        ok: {
            <C_1 extends [(better_call.Context<"/ok", {
                method: "GET";
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
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                ok: boolean;
            }>;
            path: "/ok";
            options: {
                method: "GET";
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
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        error: {
            <C_1 extends [(better_call.Context<"/error", {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : Response>;
            path: "/error";
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        signInSocial: {
            <C_1 extends [better_call.Context<"/sign-in/social", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
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
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                token: string;
                url: undefined;
                redirect: boolean;
            } | {
                url: string;
                redirect: boolean;
            }>;
            path: "/sign-in/social";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
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
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
        callbackOAuth: {
            <C_1 extends [better_call.Context<"/callback/:id", {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : void>;
            path: "/callback/:id";
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        getSession: {
            <C_1 extends [better_call.Context<"/get-session", {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                    disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
                requireHeaders: true;
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
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                session: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
            } | null>;
            path: "/get-session";
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                    disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
                requireHeaders: true;
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
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
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
        signOut: {
            <C_1 extends [better_call.Context<"/sign-out", {
                method: "POST";
                requireHeaders: true;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
            }>;
            path: "/sign-out";
            options: {
                method: "POST";
                requireHeaders: true;
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
        signUpEmail: {
            <C_1 extends better_call.HasRequiredKeys<better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }>> extends true ? [better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }>] : [(better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                token: null;
            } | {
                token: string;
            }>;
            path: "/sign-up/email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
        signInEmail: {
            <C_1 extends [better_call.Context<"/sign-in/email", {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
                redirect: boolean;
                url: string | undefined;
            }>;
            path: "/sign-in/email";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
        forgetPassword: {
            <C_1 extends [better_call.Context<"/forget-password", {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/forget-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
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
        resetPassword: {
            <C_1 extends [better_call.Context<"/reset-password", {
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/reset-password";
            options: {
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
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
        verifyEmail: {
            <C_1 extends [better_call.Context<"/verify-email", {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                status: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : void | {
                status: boolean;
            }>;
            path: "/verify-email";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                status: {
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
        sendVerificationEmail: {
            <C_1 extends [better_call.Context<"/send-verification-email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/send-verification-email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
        changeEmail: {
            <C_1 extends [better_call.Context<"/change-email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/change-email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
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
        changePassword: {
            <C_1 extends [better_call.Context<"/change-password", {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
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
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                token: string | null;
            }>;
            path: "/change-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
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
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        setPassword: {
            <C_1 extends [better_call.Context<"/set-password", {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/set-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
        updateUser: {
            <C_1 extends better_call.HasRequiredKeys<better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }>> extends true ? [better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }>] : [(better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/update-user";
            options: {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
        deleteUser: {
            <C_1 extends [better_call.Context<"/delete-user", {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
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
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
                message: string;
            }>;
            path: "/delete-user";
            options: {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
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
        forgetPasswordCallback: {
            <C_1 extends [better_call.Context<"/reset-password/:token", {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : never>;
            path: "/reset-password/:token";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
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
        listSessions: {
            <C_1 extends [better_call.Context<"/list-sessions", {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : Prettify<UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
            path: "/list-sessions";
            options: {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeSession: {
            <C_1 extends [better_call.Context<"/revoke-session", {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-session";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeSessions: {
            <C_1 extends [better_call.Context<"/revoke-sessions", {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                status: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-sessions";
            options: {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                status: {
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
        revokeOtherSessions: {
            <C_1 extends [better_call.Context<"/revoke-other-sessions", {
                method: "POST";
                requireHeaders: true;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-other-sessions";
            options: {
                method: "POST";
                requireHeaders: true;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
        linkSocialAccount: {
            <C_1 extends [better_call.Context<"/link-social", {
                method: "POST";
                requireHeaders: true;
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                url: string;
                redirect: boolean;
            }>;
            path: "/link-social";
            options: {
                method: "POST";
                requireHeaders: true;
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
        listUserAccounts: {
            <C_1 extends [(better_call.Context<"/list-accounts", {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
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
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                id: string;
                provider: string;
            }[]>;
            path: "/list-accounts";
            options: {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        deleteUserCallback: {
            <C_1 extends [better_call.Context<"/delete-user/callback", {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
                message: string;
            }>;
            path: "/delete-user/callback";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    } & UnionToIntersection<Option["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>;
    middlewares: {
        path: string;
        middleware: Endpoint;
    }[];
};
declare const router: <C extends AuthContext, Option extends BetterAuthOptions>(ctx: C, options: Option) => {
    handler: (request: Request) => Promise<Response>;
    endpoints: {
        ok: {
            <C_1 extends [(better_call.Context<"/ok", {
                method: "GET";
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
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                ok: boolean;
            }>;
            path: "/ok";
            options: {
                method: "GET";
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
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        error: {
            <C_1 extends [(better_call.Context<"/error", {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : Response>;
            path: "/error";
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        signInSocial: {
            <C_1 extends [better_call.Context<"/sign-in/social", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
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
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                token: string;
                url: undefined;
                redirect: boolean;
            } | {
                url: string;
                redirect: boolean;
            }>;
            path: "/sign-in/social";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
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
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
        callbackOAuth: {
            <C_1 extends [better_call.Context<"/callback/:id", {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : void>;
            path: "/callback/:id";
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        getSession: {
            <C_1 extends [better_call.Context<"/get-session", {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                    disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
                requireHeaders: true;
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
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                session: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & (Option extends BetterAuthOptions ? AdditionalUserFieldsOutput<Option> : Option extends Auth ? AdditionalUserFieldsOutput<Option["options"]> : {})>>;
            } | null>;
            path: "/get-session";
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                    disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
                requireHeaders: true;
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
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
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
        signOut: {
            <C_1 extends [better_call.Context<"/sign-out", {
                method: "POST";
                requireHeaders: true;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
            }>;
            path: "/sign-out";
            options: {
                method: "POST";
                requireHeaders: true;
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
        signUpEmail: {
            <C_1 extends better_call.HasRequiredKeys<better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }>> extends true ? [better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }>] : [(better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                token: null;
            } | {
                token: string;
            }>;
            path: "/sign-up/email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<Option>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
        signInEmail: {
            <C_1 extends [better_call.Context<"/sign-in/email", {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
                redirect: boolean;
                url: string | undefined;
            }>;
            path: "/sign-in/email";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
        forgetPassword: {
            <C_1 extends [better_call.Context<"/forget-password", {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/forget-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
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
        resetPassword: {
            <C_1 extends [better_call.Context<"/reset-password", {
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/reset-password";
            options: {
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
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
        verifyEmail: {
            <C_1 extends [better_call.Context<"/verify-email", {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                status: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : void | {
                status: boolean;
            }>;
            path: "/verify-email";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                status: {
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
        sendVerificationEmail: {
            <C_1 extends [better_call.Context<"/send-verification-email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/send-verification-email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
        changeEmail: {
            <C_1 extends [better_call.Context<"/change-email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/change-email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
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
        changePassword: {
            <C_1 extends [better_call.Context<"/change-password", {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
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
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                token: string | null;
            }>;
            path: "/change-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
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
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        setPassword: {
            <C_1 extends [better_call.Context<"/set-password", {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/set-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
        updateUser: {
            <C_1 extends better_call.HasRequiredKeys<better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }>> extends true ? [better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }>] : [(better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/update-user";
            options: {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<Option>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
        deleteUser: {
            <C_1 extends [better_call.Context<"/delete-user", {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
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
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
                message: string;
            }>;
            path: "/delete-user";
            options: {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
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
        forgetPasswordCallback: {
            <C_1 extends [better_call.Context<"/reset-password/:token", {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : never>;
            path: "/reset-password/:token";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
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
        listSessions: {
            <C_1 extends [better_call.Context<"/list-sessions", {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : Prettify<UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (Option extends BetterAuthOptions ? AdditionalSessionFieldsOutput<Option> : Option extends Auth ? AdditionalSessionFieldsOutput<Option["options"]> : {})>>>[]>;
            path: "/list-sessions";
            options: {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeSession: {
            <C_1 extends [better_call.Context<"/revoke-session", {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-session";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeSessions: {
            <C_1 extends [better_call.Context<"/revoke-sessions", {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                status: {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-sessions";
            options: {
                method: "POST";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                requireHeaders: true;
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
                                                status: {
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
        revokeOtherSessions: {
            <C_1 extends [better_call.Context<"/revoke-other-sessions", {
                method: "POST";
                requireHeaders: true;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-other-sessions";
            options: {
                method: "POST";
                requireHeaders: true;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
        linkSocialAccount: {
            <C_1 extends [better_call.Context<"/link-social", {
                method: "POST";
                requireHeaders: true;
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
                                            required: string[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                url: string;
                redirect: boolean;
            }>;
            path: "/link-social";
            options: {
                method: "POST";
                requireHeaders: true;
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }>;
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
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
        listUserAccounts: {
            <C_1 extends [(better_call.Context<"/list-accounts", {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
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
            }> | undefined)?]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                id: string;
                provider: string;
            }[]>;
            path: "/list-accounts";
            options: {
                method: "GET";
                use: Endpoint<better_call.Handler<string, better_call.EndpointOptions, {
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
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "array";
                                            items: {
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        deleteUserCallback: {
            <C_1 extends [better_call.Context<"/delete-user/callback", {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            }>]>(...ctx: C_1): Promise<C_1 extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
                message: string;
            }>;
            path: "/delete-user/callback";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    } & UnionToIntersection<Option["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>;
};

declare const BASE_ERROR_CODES: {
    USER_NOT_FOUND: string;
    FAILED_TO_CREATE_USER: string;
    FAILED_TO_CREATE_SESSION: string;
    FAILED_TO_UPDATE_USER: string;
    FAILED_TO_GET_SESSION: string;
    INVALID_PASSWORD: string;
    INVALID_EMAIL: string;
    INVALID_EMAIL_OR_PASSWORD: string;
    SOCIAL_ACCOUNT_ALREADY_LINKED: string;
    PROVIDER_NOT_FOUND: string;
    INVALID_TOKEN: string;
    ID_TOKEN_NOT_SUPPORTED: string;
    FAILED_TO_GET_USER_INFO: string;
    USER_EMAIL_NOT_FOUND: string;
    EMAIL_NOT_VERIFIED: string;
    PASSWORD_TOO_SHORT: string;
    PASSWORD_TOO_LONG: string;
    USER_ALREADY_EXISTS: string;
    EMAIL_CAN_NOT_BE_UPDATED: string;
    CREDENTIAL_ACCOUNT_NOT_FOUND: string;
    SESSION_EXPIRED: string;
};

type WithJsDoc<T, D> = Expand<T & D>;
declare const betterAuth: <O extends BetterAuthOptions>(options: O) => {
    handler: (request: Request) => Promise<Response>;
    api: InferAPI<{
        ok: {
            <C extends [(better_call.Context<"/ok", {
                method: "GET";
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
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                ok: boolean;
            }>;
            path: "/ok";
            options: {
                method: "GET";
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
                                                ok: {
                                                    type: string;
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        error: {
            <C extends [(better_call.Context<"/error", {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : Response>;
            path: "/error";
            options: {
                method: "GET";
                metadata: {
                    openapi: {
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "text/html": {
                                        schema: {
                                            type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        signInSocial: {
            <C extends [better_call.Context<"/sign-in/social", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
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
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
                token: string;
                url: undefined;
                redirect: boolean;
            } | {
                url: string;
                redirect: boolean;
            }>;
            path: "/sign-in/social";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    newUserCallbackURL: zod.ZodOptional<zod.ZodString>;
                    errorCallbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                    disableRedirect: zod.ZodOptional<zod.ZodBoolean>;
                    idToken: zod.ZodOptional<zod.ZodObject<{
                        token: zod.ZodString;
                        nonce: zod.ZodOptional<zod.ZodString>;
                        accessToken: zod.ZodOptional<zod.ZodString>;
                        refreshToken: zod.ZodOptional<zod.ZodString>;
                        expiresAt: zod.ZodOptional<zod.ZodNumber>;
                    }, "strip", zod.ZodTypeAny, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }, {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    }>>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    idToken?: {
                        token: string;
                        expiresAt?: number | undefined;
                        accessToken?: string | undefined;
                        refreshToken?: string | undefined;
                        nonce?: string | undefined;
                    } | undefined;
                    callbackURL?: string | undefined;
                    newUserCallbackURL?: string | undefined;
                    errorCallbackURL?: string | undefined;
                    disableRedirect?: boolean | undefined;
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
                                                session: {
                                                    type: string;
                                                };
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
        callbackOAuth: {
            <C extends [better_call.Context<"/callback/:id", {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : void>;
            path: "/callback/:id";
            options: {
                method: ("GET" | "POST")[];
                body: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                query: zod.ZodOptional<zod.ZodObject<{
                    code: zod.ZodOptional<zod.ZodString>;
                    error: zod.ZodOptional<zod.ZodString>;
                    error_description: zod.ZodOptional<zod.ZodString>;
                    state: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }, {
                    code?: string | undefined;
                    error?: string | undefined;
                    error_description?: string | undefined;
                    state?: string | undefined;
                }>>;
                metadata: {
                    isAction: false;
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        getSession: {
            <C extends [better_call.Context<"/get-session", {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                    disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
                requireHeaders: true;
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
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
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
                session: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    userId: string;
                    expiresAt: Date;
                    token: string;
                    ipAddress?: string | null | undefined;
                    userAgent?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>;
                user: UnionToIntersection<StripEmptyObjects<{
                    id: string;
                    email: string;
                    emailVerified: boolean;
                    name: string;
                    createdAt: Date;
                    updatedAt: Date;
                    image?: string | null | undefined;
                } & (O extends BetterAuthOptions ? AdditionalUserFieldsOutput<O> : O extends Auth ? AdditionalUserFieldsOutput<O["options"]> : {})>>;
            } | null>;
            path: "/get-session";
            options: {
                method: "GET";
                query: zod.ZodOptional<zod.ZodObject<{
                    disableCookieCache: zod.ZodOptional<zod.ZodUnion<[zod.ZodBoolean, zod.ZodEffects<zod.ZodString, boolean, string>]>>;
                    disableRefresh: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    disableCookieCache?: boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }, {
                    disableCookieCache?: string | boolean | undefined;
                    disableRefresh?: boolean | undefined;
                }>>;
                requireHeaders: true;
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
                                                session: {
                                                    type: string;
                                                    properties: {
                                                        token: {
                                                            type: string;
                                                        };
                                                        userId: {
                                                            type: string;
                                                        };
                                                        expiresAt: {
                                                            type: string;
                                                        };
                                                    };
                                                };
                                                user: {
                                                    type: string;
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
        signOut: {
            <C extends [better_call.Context<"/sign-out", {
                method: "POST";
                requireHeaders: true;
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
            path: "/sign-out";
            options: {
                method: "POST";
                requireHeaders: true;
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
        signUpEmail: {
            <C extends better_call.HasRequiredKeys<better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<O>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }>> extends true ? [better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<O>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }>] : [(better_call.Context<"/sign-up/email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<O>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                token: null;
            } | {
                token: string;
            }>;
            path: "/sign-up/email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    name: zod.ZodString;
                    email: zod.ZodString;
                    password: zod.ZodString;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    name: string;
                }, {
                    password: string;
                    email: string;
                    name: string;
                }> & toZod<AdditionalUserFieldsInput<O>>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            password: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                email: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                image: {
                                                    type: string;
                                                    description: string;
                                                };
                                                emailVerified: {
                                                    type: string;
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
        signInEmail: {
            <C extends [better_call.Context<"/sign-in/email", {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
                user: {
                    id: string;
                    email: string;
                    name: string;
                    image: string | null | undefined;
                    emailVerified: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                };
                redirect: boolean;
                url: string | undefined;
            }>;
            path: "/sign-in/email";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    password: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    rememberMe: zod.ZodOptional<zod.ZodDefault<zod.ZodBoolean>>;
                }, "strip", zod.ZodTypeAny, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
                }, {
                    password: string;
                    email: string;
                    callbackURL?: string | undefined;
                    rememberMe?: boolean | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                url: {
                                                    type: string;
                                                };
                                                redirect: {
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
        forgetPassword: {
            <C extends [better_call.Context<"/forget-password", {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
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
            path: "/forget-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    redirectTo: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    redirectTo?: string | undefined;
                }, {
                    email: string;
                    redirectTo?: string | undefined;
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
        resetPassword: {
            <C extends [better_call.Context<"/reset-password", {
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
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
            path: "/reset-password";
            options: {
                query: zod.ZodOptional<zod.ZodObject<{
                    token: zod.ZodOptional<zod.ZodString>;
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }, {
                    token?: string | undefined;
                    currentURL?: string | undefined;
                }>>;
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    token?: string | undefined;
                }, {
                    newPassword: string;
                    token?: string | undefined;
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
        verifyEmail: {
            <C extends [better_call.Context<"/verify-email", {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                status: {
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
            }] ? Response : void | {
                status: boolean;
            }>;
            path: "/verify-email";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
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
                                                user: {
                                                    type: string;
                                                };
                                                status: {
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
        sendVerificationEmail: {
            <C extends [better_call.Context<"/send-verification-email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
            path: "/send-verification-email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    email: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    email: string;
                    callbackURL?: string | undefined;
                }, {
                    email: string;
                    callbackURL?: string | undefined;
                }>;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            email: {
                                                type: string;
                                                description: string;
                                            };
                                            callbackURL: {
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
        changeEmail: {
            <C extends [better_call.Context<"/change-email", {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
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
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
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
            path: "/change-email";
            options: {
                method: "POST";
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    newEmail: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    newEmail: string;
                    callbackURL?: string | undefined;
                }, {
                    newEmail: string;
                    callbackURL?: string | undefined;
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
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
                                                    type: string;
                                                };
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
        changePassword: {
            <C extends [better_call.Context<"/change-password", {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
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
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
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
                };
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                token: string | null;
            }>;
            path: "/change-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                    currentPassword: zod.ZodString;
                    revokeOtherSessions: zod.ZodOptional<zod.ZodBoolean>;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
                }, {
                    newPassword: string;
                    currentPassword: string;
                    revokeOtherSessions?: boolean | undefined;
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
                        description: string;
                        responses: {
                            "200": {
                                description: string;
                                content: {
                                    "application/json": {
                                        schema: {
                                            type: "object";
                                            properties: {
                                                user: {
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
                };
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        setPassword: {
            <C extends [better_call.Context<"/set-password", {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
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
            }>;
            path: "/set-password";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    newPassword: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    newPassword: string;
                }, {
                    newPassword: string;
                }>;
                metadata: {
                    SERVER_ONLY: true;
                };
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
        updateUser: {
            <C extends better_call.HasRequiredKeys<better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<O>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
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
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }>> extends true ? [better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<O>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
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
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
            }>] : [(better_call.Context<"/update-user", {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<O>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
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
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
                status: boolean;
            }>;
            path: "/update-user";
            options: {
                method: "POST";
                body: toZod<AdditionalUserFieldsInput<O>> & zod.ZodObject<{
                    name: zod.ZodOptional<zod.ZodString>;
                    image: zod.ZodOptional<zod.ZodString | zod.ZodNull>;
                }, zod.UnknownKeysParam, zod.ZodTypeAny, {
                    name?: string | undefined;
                    image?: string | null | undefined;
                }, {
                    name?: string | undefined;
                    image?: string | null | undefined;
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
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            image: {
                                                type: string;
                                                description: string;
                                            };
                                        };
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
                                                user: {
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
        deleteUser: {
            <C extends [better_call.Context<"/delete-user", {
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
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
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
                message: string;
            }>;
            path: "/delete-user";
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
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    password: zod.ZodOptional<zod.ZodString>;
                    token: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
                }, {
                    password?: string | undefined;
                    token?: string | undefined;
                    callbackURL?: string | undefined;
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
        forgetPasswordCallback: {
            <C extends [better_call.Context<"/reset-password/:token", {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
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
            }] ? Response : never>;
            path: "/reset-password/:token";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    callbackURL: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    callbackURL: string;
                }, {
                    callbackURL: string;
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
        listSessions: {
            <C extends [better_call.Context<"/list-sessions", {
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
                requireHeaders: true;
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
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : Prettify<UnionToIntersection<StripEmptyObjects<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                expiresAt: Date;
                token: string;
                ipAddress?: string | null | undefined;
                userAgent?: string | null | undefined;
            } & (O extends BetterAuthOptions ? AdditionalSessionFieldsOutput<O> : O extends Auth ? AdditionalSessionFieldsOutput<O["options"]> : {})>>>[]>;
            path: "/list-sessions";
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
                requireHeaders: true;
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
                                                type: string;
                                                properties: {
                                                    token: {
                                                        type: string;
                                                    };
                                                    userId: {
                                                        type: string;
                                                    };
                                                    expiresAt: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeSession: {
            <C extends [better_call.Context<"/revoke-session", {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
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
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
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
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                status: boolean;
            }>;
            path: "/revoke-session";
            options: {
                method: "POST";
                body: zod.ZodObject<{
                    token: zod.ZodString;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                }, {
                    token: string;
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
                requireHeaders: true;
                metadata: {
                    openapi: {
                        description: string;
                        requestBody: {
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object";
                                        properties: {
                                            token: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        revokeSessions: {
            <C extends [better_call.Context<"/revoke-sessions", {
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
                requireHeaders: true;
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
                                                status: {
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
                status: boolean;
            }>;
            path: "/revoke-sessions";
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
                requireHeaders: true;
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
                                                status: {
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
        revokeOtherSessions: {
            <C extends [better_call.Context<"/revoke-other-sessions", {
                method: "POST";
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
                            "200": {
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
            path: "/revoke-other-sessions";
            options: {
                method: "POST";
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
                            "200": {
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
        linkSocialAccount: {
            <C extends [better_call.Context<"/link-social", {
                method: "POST";
                requireHeaders: true;
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
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
                        description: string;
                        responses: {
                            "200": {
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
                url: string;
                redirect: boolean;
            }>;
            path: "/link-social";
            options: {
                method: "POST";
                requireHeaders: true;
                query: zod.ZodOptional<zod.ZodObject<{
                    currentURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    currentURL?: string | undefined;
                }, {
                    currentURL?: string | undefined;
                }>>;
                body: zod.ZodObject<{
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                    provider: zod.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
                }, "strip", zod.ZodTypeAny, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
                }, {
                    provider: "github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit";
                    callbackURL?: string | undefined;
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
                        description: string;
                        responses: {
                            "200": {
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
        listUserAccounts: {
            <C extends [(better_call.Context<"/list-accounts", {
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
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
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
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                id: string;
                provider: string;
            }[]>;
            path: "/list-accounts";
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
                                                type: string;
                                                properties: {
                                                    id: {
                                                        type: string;
                                                    };
                                                    provider: {
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
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
        deleteUserCallback: {
            <C extends [better_call.Context<"/delete-user/callback", {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            }>]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                success: boolean;
                message: string;
            }>;
            path: "/delete-user/callback";
            options: {
                method: "GET";
                query: zod.ZodObject<{
                    token: zod.ZodString;
                    callbackURL: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    token: string;
                    callbackURL?: string | undefined;
                }, {
                    token: string;
                    callbackURL?: string | undefined;
                }>;
            };
            method: better_call.Method | better_call.Method[];
            headers: Headers;
        };
    } & UnionToIntersection<O["plugins"] extends (infer T)[] ? T extends BetterAuthPlugin ? T extends {
        endpoints: infer E;
    } ? E : {} : {} : {}>>;
    options: O;
    $context: Promise<AuthContext>;
    $Infer: {
        Session: {
            session: PrettifyDeep<InferSession<O>>;
            user: PrettifyDeep<InferUser<O>>;
        };
    } & InferPluginTypes<O>;
    $ERROR_CODES: InferPluginErrorCodes<O> & typeof BASE_ERROR_CODES;
};
type Auth = {
    handler: (request: Request) => Promise<Response>;
    api: FilterActions<ReturnType<typeof router>["endpoints"]>;
    options: BetterAuthOptions;
    $ERROR_CODES: typeof BASE_ERROR_CODES;
};

export { shouldPublishLog as $, type AuthEndpoint as A, type BetterAuthOptions as B, type InferSessionAPI as C, type InferAPI as D, createCookieGetter as E, type FilteredAPI as F, type GenericEndpointContext as G, type HookEndpointContext as H, type InferOptionSchema as I, getCookies as J, type KyselyDatabaseType as K, type BetterAuthCookies as L, type Models as M, setCookieCache as N, setSessionCookie as O, type PluginSchema as P, deleteSessionCookie as Q, type RateLimit as R, type Session as S, parseCookies as T, type User as U, type Verification as V, type Where as W, type EligibleCookies as X, parseSetCookieHeader as Y, type LogLevel as Z, levels as _, BASE_ERROR_CODES as a, type Logger as a0, type LogHandlerParams as a1, createLogger as a2, logger as a3, type FieldAttribute as a4, type FieldType as a5, createInternalAdapter as a6, type InternalAdapter as a7, type FieldAttributeConfig as a8, createFieldAttribute as a9, createEmailVerificationToken as aA, sendVerificationEmailFn as aB, sendVerificationEmail as aC, verifyEmail as aD, updateUser as aE, changePassword as aF, setPassword as aG, deleteUser as aH, deleteUserCallback as aI, changeEmail as aJ, error as aK, ok as aL, signUpEmail as aM, listUserAccounts as aN, linkSocialAccount as aO, originCheckMiddleware as aP, type InferValueType as aa, type InferFieldsOutput as ab, type InferFieldsInput as ac, type InferFieldsInputClient as ad, type PluginFieldAttribute as ae, type InferFieldsFromPlugins as af, type InferFieldsFromOptions as ag, type BetterAuthDbSchema as ah, getAuthTables as ai, getEndpoints as aj, router as ak, signInSocial as al, signInEmail as am, callbackOAuth as an, getSession as ao, getSessionFromCtx as ap, sessionMiddleware as aq, freshSessionMiddleware as ar, listSessions as as, revokeSession as at, revokeSessions as au, revokeOtherSessions as av, signOut as aw, forgetPassword as ax, forgetPasswordCallback as ay, resetPassword as az, type HookBeforeHandler as b, type HookAfterHandler as c, type BetterAuthPlugin as d, type InferPluginErrorCodes as e, createAuthMiddleware as f, createAuthEndpoint as g, type AuthMiddleware as h, type Auth as i, type AuthContext as j, type InferUser as k, type InferSession as l, type WithJsDoc as m, betterAuth as n, optionsMiddleware as o, type AdditionalUserFieldsInput as p, type AdditionalUserFieldsOutput as q, type AdditionalSessionFieldsInput as r, type AdditionalSessionFieldsOutput as s, type InferPluginTypes as t, type Account as u, init as v, type Adapter as w, type AdapterInstance as x, type SecondaryStorage as y, type FilterActions as z };
