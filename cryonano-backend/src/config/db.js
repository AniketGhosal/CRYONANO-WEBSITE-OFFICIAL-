const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.on('connect', () => {
  console.log('Successfully connected to PostgreSQL Cloud Database');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};