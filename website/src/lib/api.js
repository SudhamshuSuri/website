import { Surreal } from 'surrealdb.js';

export const endpoint = 'http//127.0.0.1:8000';
export const user ='root';
export const pass = 'root';
export const ns = 'test';
export const db = 'test';
export const surreal = new Surreal(endpoint, {
    ns,
    db,
    auth: { user, pass },
});