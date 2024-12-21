import { U as User, S as Session, I as InferOptionSchema, H as HookEndpointContext } from '../auth-CfuNyKFj.cjs';
import * as better_call from 'better-call';
import { APIError } from 'better-call';
import 'kysely';
import 'zod';
import '../helper-Bi8FQwDD.cjs';
import '../index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';

interface UserWithAnonymous extends User {
    isAnonymous: boolean;
}
interface AnonymousOptions {
    /**
     * Configure the domain name of the temporary email
     * address for anonymous users in the database.
     * @default "baseURL"
     */
    emailDomainName?: string;
    /**
     * A useful hook to run after an anonymous user
     * is about to link their account.
     */
    onLinkAccount?: (data: {
        anonymousUser: {
            user: UserWithAnonymous;
            session: Session;
        };
        newUser: {
            user: User;
            session: Session;
        };
    }) => Promise<void> | void;
    /**
     * Disable deleting the anonymous user after linking
     */
    disableDeleteAnonymousUser?: boolean;
    /**
     * Custom schema for the admin plugin
     */
    schema?: InferOptionSchema<typeof schema>;
}
declare const schema: {
    user: {
        fields: {
            isAnonymous: {
                type: "boolean";
                required: false;
            };
        };
    };
};
declare const anonymous: (options?: AnonymousOptions) => {
    id: "anonymous";
    endpoints: {
        signInAnonymous: {
            <C extends [(better_call.Context<"/sign-in/anonymous", {
                method: "POST";
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
            }> | undefined)?]>(...ctx: C): Promise<C extends [{
                asResponse: true;
            }] ? Response : {
                token: string;
            } | null>;
            path: "/sign-in/anonymous";
            options: {
                method: "POST";
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
    };
    hooks: {
        after: {
            matcher(context: HookEndpointContext<{
                returned: APIError | Response | Record<string, any>;
                endpoint: better_call.Endpoint;
            }>): boolean;
            handler: better_call.Endpoint<better_call.Handler<string, better_call.EndpointOptions, void>, better_call.EndpointOptions>;
        }[];
    };
    schema: {
        user: {
            fields: {
                isAnonymous: {
                    type: "boolean";
                    required: false;
                };
            };
        };
    };
    $ERROR_CODES: {
        readonly FAILED_TO_CREATE_USER: "Failed to create user";
        readonly COULD_NOT_CREATE_SESSION: "Could not create session";
        readonly ANONYMOUS_USERS_CANNOT_SIGN_IN_AGAIN_ANONYMOUSLY: "Anonymous users cannot sign in again anonymously";
    };
};

export { type AnonymousOptions, type UserWithAnonymous, anonymous };
