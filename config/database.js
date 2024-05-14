const mysql = require('mysql2')
require("dotenv").config();

const pool = mysql.createPool({
    host:       process.env.DB_HOST,
    user:       process.env.DB_USER,
    password:   process.env.DB_PASSWORD,
    database:   process.env.DB_NAME,
    port:       process.env.DB_PORT,
});

module.exports = pool.promise();

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
  connection.release(); // Release the connection
});

// Close the connection pool when your app is terminating
process.on('SIGINT', () => {
  pool.end((err) => {
    if (err) {
      return console.error('Error closing database pool:', err.message);
    }
    console.log('Closed the database pool.');
    process.exit(0);
  });
});