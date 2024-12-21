import { L as LiteralString, b as Prettify } from './helper-Bi8FQwDD.cjs';
import { z } from 'zod';
import * as jose from 'jose';

interface OAuth2Tokens {
    tokenType?: string;
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpiresAt?: Date;
    refreshTokenExpiresAt?: Date;
    scopes?: string[];
    idToken?: string;
}
interface OAuthProvider<T extends Record<string, any> = Record<string, any>> {
    id: LiteralString;
    createAuthorizationURL: (data: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }) => Promise<URL> | URL;
    name: string;
    validateAuthorizationCode: (data: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo: (token: OAuth2Tokens) => Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
        };
        data: T;
    } | null>;
    refreshAccessToken?: (refreshToken: string) => Promise<OAuth2Tokens>;
    revokeToken?: (token: string) => Promise<void>;
    verifyIdToken?: (token: string, nonce?: string) => Promise<boolean>;
}
type ProviderOptions<Profile extends Record<string, any> = any> = {
    /**
     * The client ID of your application
     */
    clientId: string;
    /**
     * The client secret of your application
     */
    clientSecret: string;
    /**
     * The scopes you want to request from the provider
     */
    scope?: string[];
    /**
     * The redirect URL for your application. This is where the provider will
     * redirect the user after the sign in process. Make sure this URL is
     * whitelisted in the provider's dashboard.
     */
    redirectURI?: string;
    /**
     * Disable provider from allowing users to sign in
     * with this provider with an id token sent from the
     * client.
     */
    disableIdTokenSignIn?: boolean;
    /**
     * verifyIdToken function to verify the id token
     */
    verifyIdToken?: (token: string, nonce?: string) => Promise<boolean>;
    /**
     * Custom function to get user info from the provider
     */
    getUserInfo?: (token: OAuth2Tokens) => Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    }>;
    /**
     * Custom function to map the provider profile to a
     * user.
     */
    mapProfileToUser?: (profile: Profile) => {
        id?: string;
        name?: string;
        email?: string | null;
        image?: string;
        emailVerified?: boolean;
        [key: string]: any;
    } | Promise<{
        id?: string;
        name?: string;
        email?: string | null;
        image?: string;
        emailVerified?: boolean;
        [key: string]: any;
    }>;
};

interface RedditProfile {
    id: string;
    name: string;
    icon_img: string | null;
    has_verified_email: boolean;
    oauth_client_id: string;
    verified: boolean;
}
interface RedditOptions extends ProviderOptions<RedditProfile> {
    duration?: string;
}
declare const reddit: (options: RedditOptions) => {
    id: "reddit";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface GitlabProfile extends Record<string, any> {
    id: number;
    username: string;
    email: string;
    name: string;
    state: string;
    avatar_url: string;
    web_url: string;
    created_at: string;
    bio: string;
    location?: string;
    public_email: string;
    skype: string;
    linkedin: string;
    twitter: string;
    website_url: string;
    organization: string;
    job_title: string;
    pronouns: string;
    bot: boolean;
    work_information?: string;
    followers: number;
    following: number;
    local_time: string;
    last_sign_in_at: string;
    confirmed_at: string;
    theme_id: number;
    last_activity_on: string;
    color_scheme_id: number;
    projects_limit: number;
    current_sign_in_at: string;
    identities: Array<{
        provider: string;
        extern_uid: string;
    }>;
    can_create_group: boolean;
    can_create_project: boolean;
    two_factor_enabled: boolean;
    external: boolean;
    private_profile: boolean;
    commit_email: string;
    shared_runners_minutes_limit: number;
    extra_shared_runners_minutes_limit: number;
}
interface GitlabOptions extends ProviderOptions<GitlabProfile> {
    issuer?: string;
}
declare const gitlab: (options: GitlabOptions) => {
    id: "gitlab";
    name: string;
    createAuthorizationURL: ({ state, scopes, codeVerifier, redirectURI, }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }) => Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI, codeVerifier }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface LinkedInProfile {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    locale: {
        country: string;
        language: string;
    };
    email: string;
    email_verified: boolean;
}
interface LinkedInOptions extends ProviderOptions<LinkedInProfile> {
}
declare const linkedin: (options: LinkedInOptions) => {
    id: "linkedin";
    name: string;
    createAuthorizationURL: ({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }) => Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string;
        } | {
            id: string;
            name: string;
            email: string | null;
            image: string;
            emailVerified: boolean;
        } | {
            id: string;
            name: string;
            email: string | null;
            image: string;
            emailVerified: boolean;
        };
        data: LinkedInProfile;
    } | null>;
};

interface DropboxProfile {
    account_id: string;
    name: {
        given_name: string;
        surname: string;
        familiar_name: string;
        display_name: string;
        abbreviated_name: string;
    };
    email: string;
    email_verified: boolean;
    profile_photo_url: string;
}
interface DropboxOptions extends ProviderOptions<DropboxProfile> {
}
declare const dropbox: (options: DropboxOptions) => {
    id: "dropbox";
    name: string;
    createAuthorizationURL: ({ state, scopes, codeVerifier, redirectURI, }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }) => Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface TwitterProfile {
    data: {
        /**
         * Unique identifier of this user. This is returned as a string in order to avoid complications with languages and tools
         * that cannot handle large integers.
         */
        id: string;
        /** The friendly name of this user, as shown on their profile. */
        name: string;
        /** @note Email is currently unsupported by Twitter.  */
        email?: string;
        /** The Twitter handle (screen name) of this user. */
        username: string;
        /**
         * The location specified in the user's profile, if the user provided one.
         * As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
         *
         * To return this field, add `user.fields=location` in the authorization request's query parameter.
         */
        location?: string;
        /**
         * This object and its children fields contain details about text that has a special meaning in the user's description.
         *
         *To return this field, add `user.fields=entities` in the authorization request's query parameter.
         */
        entities?: {
            /** Contains details about the user's profile website. */
            url: {
                /** Contains details about the user's profile website. */
                urls: Array<{
                    /** The start position (zero-based) of the recognized user's profile website. All start indices are inclusive. */
                    start: number;
                    /** The end position (zero-based) of the recognized user's profile website. This end index is exclusive. */
                    end: number;
                    /** The URL in the format entered by the user. */
                    url: string;
                    /** The fully resolved URL. */
                    expanded_url: string;
                    /** The URL as displayed in the user's profile. */
                    display_url: string;
                }>;
            };
            /** Contains details about URLs, Hashtags, Cashtags, or mentions located within a user's description. */
            description: {
                hashtags: Array<{
                    start: number;
                    end: number;
                    tag: string;
                }>;
            };
        };
        /**
         * Indicate if this user is a verified Twitter user.
         *
         * To return this field, add `user.fields=verified` in the authorization request's query parameter.
         */
        verified?: boolean;
        /**
         * The text of this user's profile description (also known as bio), if the user provided one.
         *
         * To return this field, add `user.fields=description` in the authorization request's query parameter.
         */
        description?: string;
        /**
         * The URL specified in the user's profile, if present.
         *
         * To return this field, add `user.fields=url` in the authorization request's query parameter.
         */
        url?: string;
        /** The URL to the profile image for this user, as shown on the user's profile. */
        profile_image_url?: string;
        protected?: boolean;
        /**
         * Unique identifier of this user's pinned Tweet.
         *
         *  You can obtain the expanded object in `includes.tweets` by adding `expansions=pinned_tweet_id` in the authorization request's query parameter.
         */
        pinned_tweet_id?: string;
        created_at?: string;
    };
    includes?: {
        tweets?: Array<{
            id: string;
            text: string;
        }>;
    };
    [claims: string]: unknown;
}
interface TwitterOption extends ProviderOptions<TwitterProfile> {
}
declare const twitter: (options: TwitterOption) => {
    id: "twitter";
    name: string;
    createAuthorizationURL(data: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface TwitchProfile {
    /**
     * The sub of the user
     */
    sub: string;
    /**
     * The preferred username of the user
     */
    preferred_username: string;
    /**
     * The email of the user
     */
    email: string;
    /**
     * The picture of the user
     */
    picture: string;
}
interface TwitchOptions extends ProviderOptions<TwitchProfile> {
    claims?: string[];
}
declare const twitch: (options: TwitchOptions) => {
    id: "twitch";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface SpotifyProfile {
    id: string;
    display_name: string;
    email: string;
    images: {
        url: string;
    }[];
}
interface SpotifyOptions extends ProviderOptions<SpotifyProfile> {
}
declare const spotify: (options: SpotifyOptions) => {
    id: "spotify";
    name: string;
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface GoogleProfile {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    /**
     * The family name of the user, or last name in most
     * Western languages.
     */
    family_name: string;
    /**
     * The given name of the user, or first name in most
     * Western languages.
     */
    given_name: string;
    hd?: string;
    iat: number;
    iss: string;
    jti?: string;
    locale?: string;
    name: string;
    nbf?: number;
    picture: string;
    sub: string;
}
interface GoogleOptions extends ProviderOptions<GoogleProfile> {
    accessType?: "offline" | "online";
    prompt?: "none" | "consent" | "select_account";
}
declare const google: (options: GoogleOptions) => {
    id: "google";
    name: string;
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface MicrosoftEntraIDProfile extends Record<string, any> {
    sub: string;
    name: string;
    email: string;
    picture: string;
}
interface MicrosoftOptions extends ProviderOptions<MicrosoftEntraIDProfile> {
    /**
     * The tenant ID of the Microsoft account
     * @default "common"
     */
    tenantId?: string;
    /**
     * The size of the profile photo
     * @default 48
     */
    profilePhotoSize?: 48 | 64 | 96 | 120 | 240 | 360 | 432 | 504 | 648;
    /**
     * Disable profile photo
     */
    disableProfilePhoto?: boolean;
}
declare const microsoft: (options: MicrosoftOptions) => {
    id: "microsoft";
    name: string;
    createAuthorizationURL(data: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }): Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface GithubProfile {
    login: string;
    id: string;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: string;
    public_gists: string;
    followers: string;
    following: string;
    created_at: string;
    updated_at: string;
    private_gists: string;
    total_private_repos: string;
    owned_private_repos: string;
    disk_usage: string;
    collaborators: string;
    two_factor_authentication: boolean;
    plan: {
        name: string;
        space: string;
        private_repos: string;
        collaborators: string;
    };
}
interface GithubOptions extends ProviderOptions<GithubProfile> {
}
declare const github: (options: GithubOptions) => {
    id: "github";
    name: string;
    createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface FacebookProfile {
    id: string;
    name: string;
    email: string;
    email_verified: boolean;
    picture: {
        data: {
            height: number;
            is_silhouette: boolean;
            url: string;
            width: number;
        };
    };
}
interface FacebookOptions extends ProviderOptions<FacebookProfile> {
}
declare const facebook: (options: FacebookOptions) => {
    id: "facebook";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): Promise<URL>;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface DiscordProfile extends Record<string, any> {
    /** the user's id (i.e. the numerical snowflake) */
    id: string;
    /** the user's username, not unique across the platform */
    username: string;
    /** the user's Discord-tag */
    discriminator: string;
    /** the user's display name, if it is set  */
    global_name: string | null;
    /**
     * the user's avatar hash:
     * https://discord.com/developers/docs/reference#image-formatting
     */
    avatar: string | null;
    /** whether the user belongs to an OAuth2 application */
    bot?: boolean;
    /**
     * whether the user is an Official Discord System user (part of the urgent
     * message system)
     */
    system?: boolean;
    /** whether the user has two factor enabled on their account */
    mfa_enabled: boolean;
    /**
     * the user's banner hash:
     * https://discord.com/developers/docs/reference#image-formatting
     */
    banner: string | null;
    /** the user's banner color encoded as an integer representation of hexadecimal color code */
    accent_color: number | null;
    /**
     * the user's chosen language option:
     * https://discord.com/developers/docs/reference#locales
     */
    locale: string;
    /** whether the email on this account has been verified */
    verified: boolean;
    /** the user's email */
    email: string;
    /**
     * the flags on a user's account:
     * https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    flags: number;
    /**
     * the type of Nitro subscription on a user's account:
     * https://discord.com/developers/docs/resources/user#user-object-premium-types
     */
    premium_type: number;
    /**
     * the public flags on a user's account:
     * https://discord.com/developers/docs/resources/user#user-object-user-flags
     */
    public_flags: number;
    /** undocumented field; corresponds to the user's custom nickname */
    display_name: string | null;
    /**
     * undocumented field; corresponds to the Discord feature where you can e.g.
     * put your avatar inside of an ice cube
     */
    avatar_decoration: string | null;
    /**
     * undocumented field; corresponds to the premium feature where you can
     * select a custom banner color
     */
    banner_color: string | null;
    /** undocumented field; the CDN URL of their profile picture */
    image_url: string;
}
interface DiscordOptions extends ProviderOptions<DiscordProfile> {
    prompt?: "none" | "consent";
}
declare const discord: (options: DiscordOptions) => {
    id: "discord";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): URL;
    validateAuthorizationCode: ({ code, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};

interface AppleProfile {
    /**
     * The subject registered claim identifies the principal that’s the subject
     * of the identity token. Because this token is for your app, the value is
     * the unique identifier for the user.
     */
    sub: string;
    /**
     * A String value representing the user's email address.
     * The email address is either the user's real email address or the proxy
     * address, depending on their status private email relay service.
     */
    email: string;
    /**
     * A string or Boolean value that indicates whether the service verifies
     * the email. The value can either be a string ("true" or "false") or a
     * Boolean (true or false). The system may not verify email addresses for
     * Sign in with Apple at Work & School users, and this claim is "false" or
     * false for those users.
     */
    email_verified: true | "true";
    /**
     * A string or Boolean value that indicates whether the email that the user
     * shares is the proxy address. The value can either be a string ("true" or
     * "false") or a Boolean (true or false).
     */
    is_private_email: boolean;
    /**
     * An Integer value that indicates whether the user appears to be a real
     * person. Use the value of this claim to mitigate fraud. The possible
     * values are: 0 (or Unsupported), 1 (or Unknown), 2 (or LikelyReal). For
     * more information, see ASUserDetectionStatus. This claim is present only
     * in iOS 14 and later, macOS 11 and later, watchOS 7 and later, tvOS 14
     * and later. The claim isn’t present or supported for web-based apps.
     */
    real_user_status: number;
    /**
     * The user’s full name in the format provided during the authorization
     * process.
     */
    name: string;
    /**
     * The URL to the user's profile picture.
     */
    picture: string;
    user?: AppleNonConformUser;
}
/**
 * This is the shape of the `user` query parameter that Apple sends the first
 * time the user consents to the app.
 * @see https://developer.apple.com/documentation/sign_in_with_apple/request_an_authorization_to_the_sign_in_with_apple_server#4066168
 */
interface AppleNonConformUser {
    name: {
        firstName: string;
        lastName: string;
    };
    email: string;
}
interface AppleOptions extends ProviderOptions<AppleProfile> {
    appBundleIdentifier?: string;
}
declare const apple: (options: AppleOptions) => {
    id: "apple";
    name: string;
    createAuthorizationURL({ state, scopes, redirectURI }: {
        state: string;
        codeVerifier: string;
        scopes?: string[];
        redirectURI: string;
    }): URL;
    validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
        code: string;
        redirectURI: string;
        codeVerifier?: string;
    }) => Promise<OAuth2Tokens>;
    verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
    getUserInfo(token: OAuth2Tokens): Promise<{
        user: {
            id: string;
            name?: string;
            email?: string | null;
            image?: string;
            emailVerified: boolean;
            [key: string]: any;
        };
        data: any;
    } | null>;
};
declare const getApplePublicKey: (kid: string) => Promise<Uint8Array | jose.KeyLike>;

declare const socialProviders: {
    apple: (options: AppleOptions) => {
        id: "apple";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): URL;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    discord: (options: DiscordOptions) => {
        id: "discord";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): URL;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    facebook: (options: FacebookOptions) => {
        id: "facebook";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    github: (options: GithubOptions) => {
        id: "github";
        name: string;
        createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    microsoft: (options: MicrosoftOptions) => {
        id: "microsoft";
        name: string;
        createAuthorizationURL(data: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }): Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    google: (options: GoogleOptions) => {
        id: "google";
        name: string;
        createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        verifyIdToken(token: string, nonce: string | undefined): Promise<boolean>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    spotify: (options: SpotifyOptions) => {
        id: "spotify";
        name: string;
        createAuthorizationURL({ state, scopes, codeVerifier, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    twitch: (options: TwitchOptions) => {
        id: "twitch";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    twitter: (options: TwitterOption) => {
        id: "twitter";
        name: string;
        createAuthorizationURL(data: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    dropbox: (options: DropboxOptions) => {
        id: "dropbox";
        name: string;
        createAuthorizationURL: ({ state, scopes, codeVerifier, redirectURI, }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }) => Promise<URL>;
        validateAuthorizationCode: ({ code, codeVerifier, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    linkedin: (options: LinkedInOptions) => {
        id: "linkedin";
        name: string;
        createAuthorizationURL: ({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }) => Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name: string;
                email: string;
                emailVerified: boolean;
                image: string;
            } | {
                id: string;
                name: string;
                email: string | null;
                image: string;
                emailVerified: boolean;
            } | {
                id: string;
                name: string;
                email: string | null;
                image: string;
                emailVerified: boolean;
            };
            data: LinkedInProfile;
        } | null>;
    };
    gitlab: (options: GitlabOptions) => {
        id: "gitlab";
        name: string;
        createAuthorizationURL: ({ state, scopes, codeVerifier, redirectURI, }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }) => Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI, codeVerifier }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
    reddit: (options: RedditOptions) => {
        id: "reddit";
        name: string;
        createAuthorizationURL({ state, scopes, redirectURI }: {
            state: string;
            codeVerifier: string;
            scopes?: string[];
            redirectURI: string;
        }): Promise<URL>;
        validateAuthorizationCode: ({ code, redirectURI }: {
            code: string;
            redirectURI: string;
            codeVerifier?: string;
        }) => Promise<OAuth2Tokens>;
        getUserInfo(token: OAuth2Tokens): Promise<{
            user: {
                id: string;
                name?: string;
                email?: string | null;
                image?: string;
                emailVerified: boolean;
                [key: string]: any;
            };
            data: any;
        } | null>;
    };
};
declare const socialProviderList: ["github", ...(keyof typeof socialProviders)[]];
type SocialProviderList = typeof socialProviderList;
declare const SocialProviderListEnum: z.ZodEnum<["github", ...("github" | "apple" | "discord" | "facebook" | "microsoft" | "google" | "spotify" | "twitch" | "twitter" | "dropbox" | "linkedin" | "gitlab" | "reddit")[]]>;
type SocialProvider = z.infer<typeof SocialProviderListEnum>;
type SocialProviders = {
    [K in SocialProviderList[number]]?: Prettify<Parameters<(typeof socialProviders)[K]>[0] & {
        enabled?: boolean;
    }>;
};

export { type AppleProfile as A, type TwitterProfile as B, type TwitterOption as C, type DiscordProfile as D, twitter as E, type FacebookProfile as F, type GithubProfile as G, type DropboxProfile as H, type DropboxOptions as I, dropbox as J, type LinkedInOptions as K, type LinkedInProfile as L, type MicrosoftEntraIDProfile as M, linkedin as N, type OAuthProvider as O, type ProviderOptions as P, type GitlabProfile as Q, type GitlabOptions as R, type SocialProviders as S, type TwitchProfile as T, gitlab as U, type RedditProfile as V, type RedditOptions as W, reddit as X, type OAuth2Tokens as a, type SocialProviderList as b, socialProviderList as c, SocialProviderListEnum as d, type SocialProvider as e, type GithubOptions as f, github as g, type GoogleProfile as h, type GoogleOptions as i, google as j, type AppleNonConformUser as k, type AppleOptions as l, apple as m, getApplePublicKey as n, type MicrosoftOptions as o, microsoft as p, type DiscordOptions as q, discord as r, socialProviders as s, type SpotifyProfile as t, type SpotifyOptions as u, spotify as v, type TwitchOptions as w, twitch as x, type FacebookOptions as y, facebook as z };
