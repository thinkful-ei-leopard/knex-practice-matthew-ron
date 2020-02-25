require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
});


// Drill 1
function getItemsByText(searchTerm) {
  return knexInstance
    .select('*')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

//getItemsByText('beef');

// Drill 2
function getPaginatedItems(pageNumber=1) {
  if(pageNumber < 1) {
    console.log('Page Number must be greater than 0!');
    return;
  }
  return knexInstance
    .select('*')
    .from('shopping_list')
    .limit(6)
    .offset(6 * (pageNumber - 1))
    .then(result => {
      console.log(result);
    });
}

getPaginatedItems();