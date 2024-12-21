/**
 * Compare two buffers in constant time.
 */
declare function constantTimeEqual(a: ArrayBuffer | Uint8Array, b: ArrayBuffer | Uint8Array): boolean;

declare const hashPassword: (password: string) => Promise<string>;
declare const verifyPassword: ({ hash, password, }: {
    hash: string;
    password: string;
}) => Promise<boolean>;

declare const generateRandomString: <SubA extends "a-z" | "A-Z" | "0-9" | "-_">(length: number, alphabet?: SubA | undefined, ...arg_1: SubA[]) => string;

type SymmetricEncryptOptions = {
    key: string;
    data: string;
};
declare const symmetricEncrypt: ({ key, data, }: SymmetricEncryptOptions) => Promise<string>;
type SymmetricDecryptOptions = {
    key: string;
    data: string;
};
declare const symmetricDecrypt: ({ key, data, }: SymmetricDecryptOptions) => Promise<string>;

export { type SymmetricDecryptOptions, type SymmetricEncryptOptions, constantTimeEqual, generateRandomString, hashPassword, symmetricDecrypt, symmetricEncrypt, verifyPassword };
