export { u as Account, w as Adapter, x as AdapterInstance, r as AdditionalSessionFieldsInput, s as AdditionalSessionFieldsOutput, p as AdditionalUserFieldsInput, q as AdditionalUserFieldsOutput, i as Auth, j as AuthContext, L as BetterAuthCookies, B as BetterAuthOptions, d as BetterAuthPlugin, X as EligibleCookies, z as FilterActions, F as FilteredAPI, G as GenericEndpointContext, c as HookAfterHandler, b as HookBeforeHandler, H as HookEndpointContext, D as InferAPI, I as InferOptionSchema, e as InferPluginErrorCodes, t as InferPluginTypes, l as InferSession, C as InferSessionAPI, k as InferUser, a1 as LogHandlerParams, Z as LogLevel, a0 as Logger, M as Models, P as PluginSchema, R as RateLimit, y as SecondaryStorage, S as Session, U as User, V as Verification, W as Where, m as WithJsDoc, n as betterAuth, E as createCookieGetter, a2 as createLogger, Q as deleteSessionCookie, J as getCookies, v as init, _ as levels, a3 as logger, T as parseCookies, Y as parseSetCookieHeader, N as setCookieCache, O as setSessionCookie, $ as shouldPublishLog } from './auth-CfuNyKFj.cjs';
export { D as DeepPartial, E as Expand, H as HasRequiredKeys, a as LiteralNumber, L as LiteralString, d as LiteralUnion, O as OmitId, c as PreserveJSDoc, b as Prettify, P as PrettifyDeep, R as RequiredKeysOf, S as StripEmptyObjects, U as UnionToIntersection, W as WithoutEmpty } from './helper-Bi8FQwDD.cjs';
export { AtomListener, BetterAuthClientPlugin, ClientOptions, InferActions, InferAdditionalFromClient, InferClientAPI, InferErrorCodes, InferPluginsFromClient, InferSessionFromClient, InferUserFromClient, IsSignal, Store } from './types.cjs';
export { H as HIDE_METADATA } from './hide-metadata-DEHJp1rk.cjs';
export { g as generateState, p as parseState } from './state-f-GXRFEa.cjs';
import 'kysely';
import 'better-call';
import 'zod';
import './index-BxVuNcHr.cjs';
import 'jose';
import 'better-sqlite3';
import '@better-fetch/fetch';
import 'nanostores';

declare function capitalizeFirstLetter(str: string): string;

declare const generateId: (size?: number) => string;

declare class BetterAuthError extends Error {
    constructor(message: string, cause?: string);
}
declare class MissingDependencyError extends BetterAuthError {
    constructor(pkgName: string);
}

export { BetterAuthError, MissingDependencyError, capitalizeFirstLetter, generateId };
