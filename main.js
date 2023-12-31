const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const { Client } = require("pg");
let pg = require("pg");
let queryData = null;

app.use(cors({ origin: "*" }));

const klient = new Client({
  user: "wqynvjtr",
  host: "cornelius.db.elephantsql.com",
  database: "wqynvjtr",
  password: "p2fzm-0YY5RHj2hcczCiL63PoaxUPhtL",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

const qry = "SELECT * from skrald";
const qry2 = "SELECT * from skraldfarlighed";

klient.connect();

app.get("/skrald", async (req, res) => {
  try {
    queryData = await klient.query(qry);
    res.json({
      ok: true,
      skrald: queryData.rows,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
});

app.get("/skraldfarlighed", async (req, res) => {
  try {
    queryData = await klient.query(qry2);
    res.json({
      ok: true,
      skraldfarlighed: queryData.rows,
    });
  } catch (error) {
    res.json({
      ok: false,
      message: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(
    `fake magnus lytter på https://projektspillet-loverne.onrender.com/:${port}`
  );
});
