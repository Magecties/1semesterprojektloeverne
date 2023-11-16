const express = require('express');
const app = express();
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Configure morgan to log requests
app.use(morgan('dev'));

// Parse JSON request bodies
app.use(bodyParser.json());

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: 'postgres://wqynvjtr:p2fzm-0YY5RHj2hcczCiL63PoaxUPhtL@cornelius.db.elephantsql.com/wqynvjtr',
});

// Test the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connected to the database');
  }
});

// Define your routes and CRUD operations here

// Start your Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/skrald', (req, res) => {
    pool.query('SELECT * FROM skrald;', (err, result) => {
      if (err) {
        console.error('Error executing SQL query', err);
        res.status(500).json({ error: 'Internal server error' });
      }
    });
  });