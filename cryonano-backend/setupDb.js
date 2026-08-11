// require('dotenv').config();
// const db = require('./src/config/db');

// const createTables = async () => {
//   const queryText = `
//     CREATE TABLE IF NOT EXISTS users (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       email VARCHAR(100) UNIQUE NOT NULL,
//       company VARCHAR(100),
//       phone VARCHAR(20),
//       password VARCHAR(255) NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;

//   try {
//     await db.query(queryText);
//     console.log("Users table created and verified successfully.");
//     process.exit(0);
//   } catch (err) {
//     console.error("Error creating table:", err);
//     process.exit(1);
//   }
// };

// createTables();




require('dotenv').config();
const db = require('./src/config/db');

const createTables = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      company VARCHAR(100),
      phone VARCHAR(20),
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS contact_messages (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(50),
      country VARCHAR(100),
      subject VARCHAR(200),
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS industry_quotes (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(50),
      country VARCHAR(100),
      company VARCHAR(150),
      designation VARCHAR(150),
      industry VARCHAR(100),
      application VARCHAR(100),
      application_other VARCHAR(200),
      project_stage VARCHAR(100),
      purchase_timeline VARCHAR(100),
      quantity VARCHAR(50),
      technical_requirements TEXT,
      additional_info TEXT,
      selected_products TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS research_quotes (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(50),
      country VARCHAR(100),
      institution VARCHAR(150),
      application_area VARCHAR(100),
      project_details TEXT,
      requirements TEXT,
      project_stage VARCHAR(100),
      purchase_timeline VARCHAR(100),
      budget_range VARCHAR(100),
      additional_info TEXT,
      selected_products TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS intern_applications (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(50),
      country VARCHAR(100),
      highest_degree VARCHAR(150),
      experience TEXT,
      projects TEXT,
      why_cryonano TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await db.query(queryText);
    console.log("All tables (Users, Contacts, Quotes) created and verified successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Error creating tables:", err);
    process.exit(1);
  }
};

createTables();