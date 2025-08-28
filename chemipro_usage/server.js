// A simple Node.js server using Express and the pg library to connect to PostgreSQL.
// This file will act as your backend API.

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001; // The backend will run on port 3001.

// Configure the PostgreSQL connection pool.
// You MUST replace the placeholder values with your actual database credentials.
const pool = new Pool({
  user: 'postgres',        // <-- Replace with your PostgreSQL username
  host: 'localhost',           // <-- The host where your database is running
  database: 'cosmetics_formulation_data', // <-- The name of your database
  password: 'admin1234',    // <-- Replace with your PostgreSQL password
  port: 5432,                  // <-- The default port for PostgreSQL
});

// Use the cors middleware to allow cross-origin requests from your front end.
app.use(cors());

// Define an API endpoint to fetch all skincare products.
app.get('/api/products', async (req, res) => {
  try {
    // A simple query to select all data from the moisturizer_usage_clean table.
    const result = await pool.query('SELECT * FROM moisturizer_usage_clean');
    // Send the query results back as a JSON response.
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server and listen for requests.
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});


