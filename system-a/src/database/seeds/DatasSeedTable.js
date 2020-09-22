
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('debts').del();
  await knex('users').del()
  await knex('users').insert([
      {
        "cpf": "70659393166", 
        "name": "Tiago rosa da costa",
        "endereco": "Street test",
      }
  ]);

  await knex('debts').insert([
    {
      "description": "Bank debts", 
      "value": "1000",
      "user_id": 1
    }
  ]);
};
