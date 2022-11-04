exports.up = knex => knex.schema.createTable('notes', table => {
  table.increments('id');
  table.text('title');
  table.text('description');
  table.integer('user_id').references('id').inTable('users'); // o user_id vai fazer referencia ao id do usuario, fazendo com que fique, ligados

  table.timestamp('created_at').default(knex.fn.now());
  table.timestamp('updated_at').default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable('notes')