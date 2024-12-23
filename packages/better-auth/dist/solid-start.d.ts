import { i as Auth } from './auth-BcCDy1CJ.js';
import 'kysely';
import 'better-call';
import 'zod';
import './helper-Bi8FQwDD.js';
import './index-4d8GiU4g.js';
import 'jose';
import 'better-sqlite3';

declare function toSolidStartHandler(auth: Auth | Auth["handler"]): {
    GET: (event: {
        request: Request;
    }) => Promise<Response>;
    POST: (event: {
        request: Request;
    }) => Promise<Response>;
};

export { toSolidStartHandler };
