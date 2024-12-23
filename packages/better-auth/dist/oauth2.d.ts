import { P as ProviderOptions, a as OAuth2Tokens } from './index-4d8GiU4g.js';
export { O as OAuthProvider } from './index-4d8GiU4g.js';
import * as jose from 'jose';
export { g as generateState, p as parseState } from './state-BtGpEFXk.js';
import './helper-Bi8FQwDD.js';
import 'zod';
import './auth-BcCDy1CJ.js';
import 'kysely';
import 'better-call';
import 'better-sqlite3';

declare function createAuthorizationURL({ id, options, authorizationEndpoint, state, codeVerifier, scopes, claims, redirectURI, duration, }: {
    id: string;
    options: ProviderOptions;
    redirectURI: string;
    authorizationEndpoint: string;
    state: string;
    codeVerifier?: string;
    scopes: string[];
    claims?: string[];
    duration?: string;
}): Promise<URL>;

declare function validateAuthorizationCode({ code, codeVerifier, redirectURI, options, tokenEndpoint, authentication, }: {
    code: string;
    redirectURI: string;
    options: ProviderOptions;
    codeVerifier?: string;
    tokenEndpoint: string;
    authentication?: "basic" | "post";
}): Promise<OAuth2Tokens>;
declare function validateToken(token: string, jwksEndpoint: string): Promise<jose.JWTVerifyResult<jose.JWTPayload>>;

declare function generateCodeChallenge(codeVerifier: string): Promise<string>;
declare function getOAuth2Tokens(data: Record<string, any>): OAuth2Tokens;

export { OAuth2Tokens, ProviderOptions, createAuthorizationURL, generateCodeChallenge, getOAuth2Tokens, validateAuthorizationCode, validateToken };
