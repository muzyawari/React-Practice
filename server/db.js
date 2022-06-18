const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  post: 5422,
  database: "todolist",
});

module.exports = pool;
