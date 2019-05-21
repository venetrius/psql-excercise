const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : "test_db",
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


const query = function(name){
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query("SELECT * FROM famous_people WHERE first_name = $1::text OR last_name = $1::text", [name], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      console.log(result.rows); //output: 1
      client.end();
    });
  });
}

const name = process.argv[2];

query(name);