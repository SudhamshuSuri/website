const { default: Surreal } = require('surrealdb.node');

const surreal = new Surreal();

async function main() {

	try {
		// Connect to the database
		await surreal.connect('http://127.0.0.1:8000');

		// Signin as a namespace, database, or root user
		await surreal.signin({
			username: 'root',
			password: 'root',
		});

	} catch (e) {

		console.error('ERROR', e);

	}

}

export {surreal}
main();