import { G as GenericEndpointContext } from './auth-BqCHpLdr.cjs';

declare function generateState(c: GenericEndpointContext, link?: {
    email: string;
    userId: string;
}): Promise<{
    state: string;
    codeVerifier: string;
}>;
declare function parseState(c: GenericEndpointContext): Promise<{
    expiresAt: number;
    callbackURL: string;
    codeVerifier: string;
    link?: {
        email: string;
        userId: string;
    } | undefined;
    errorURL?: string | undefined;
    newUserURL?: string | undefined;
}>;

export { generateState as g, parseState as p };
