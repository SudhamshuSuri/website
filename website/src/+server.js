import { Surreal } from 'surrealdb.node';

const db = new Surreal();

await db.connect('ws:127.0.0.1:8080/rpc', {
    auth: {
        username: 'root',
        password: 'root',
    }
});

await db.connect();
await db.use({ namespace: 'test', database: 'test'});

async function SignUp(username, password, email){
    db.signup({
        namespace: username,
        database: username,
        scope: 'user',
        email: email,
        pass: password
    });
}
exports.modules.SignUp = SignUp;


async function SignIn(username, pass, email){
    db.signin({
        namespace: username,
        password: pass,
        database: username,
        email: email
    });
}
exports.modules.SignIn = SignIn;
