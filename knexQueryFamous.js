const pg = require("pg");
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  connection: {
    host :  settings.hostname,
    user : settings.user,
    password : settings.password,
    database : 'test_db'
  }
});

//knex.select().from('famous_people').timeout(1000);

const query = function(name){ 
  knex('famous_people')
    .where({first_name : name})
    .orWhere({last_name : name})
  .then(rows => console.log(rows))
  .finally(function() { knex.destroy(); });
}

const name = process.argv[2];
query(name+"");