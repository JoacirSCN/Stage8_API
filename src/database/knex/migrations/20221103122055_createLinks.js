exports.up = knex => knex.schema.createTable('links', table => {
  table.increments('id');
  table.text('url').notNullable();

  table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE'); // o note_ vai fazer referencia ao id de notes, fazendo com que fique, ligados
  table.timestamp('created_at').default(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable('links');
