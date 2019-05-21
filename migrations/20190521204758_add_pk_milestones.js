
exports.up = function(knex, Promise) {
  
};

exports.down = function(knex, Promise) {
  
};

exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.bigInteger('famous_person_id').unsigned().index().references('id').inTable('famous_people');
    })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.dropColumn('famous_person_id');
    })
  ])
};