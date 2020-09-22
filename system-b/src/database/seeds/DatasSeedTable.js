
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("financial_assets").del();
  await knex('persons').del();
  await knex('persons').insert([
      {
        "age": "20",
        "source_rent": "Progammer",
        "cpf": "70659393166", 
        "address": "Street test",
      }
  ]);

  await knex("financial_assets").insert([
    {
      "description": "Car", 
      "value": "1000",
      "person_id": 1
    },
    {
      "description": "Motocycle", 
      "value": "100",
      "person_id": 1
    }
  ]);
};
