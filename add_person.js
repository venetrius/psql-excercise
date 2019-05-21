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

const query = function(new_person){ 
  knex('famous_people').insert(new_person)
  .finally(function() { knex.destroy(); });
}

const newPerson =
  {
    first_name : process.argv[2],
    last_name : process.argv[3],
    birthdate : process.argv[4]
  }


query(newPerson);