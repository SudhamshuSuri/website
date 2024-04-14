requirejs.config({
    baseUrl: '.',
    paths: {
      'surrealdb': 'website/node_modules/surrealdb.node' // replace with the actual path to the surrealdb module
    }
  });
  
  requirejs(['surrealdb'], function(surrealdb) {
    // use the surrealdb object to interact with the database
  });