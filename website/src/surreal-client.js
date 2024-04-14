import pkg from 'surrealdb';
const { surreal } = pkg;

export const db = surreal();

// Use the db object to interact with the database