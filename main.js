const express = require("express");
const app = express();
const port = 3000;
const { Client } = require("pg");
var pg = require('pg');

const klient = new Client({
user: "wqynvjtr",
host: "cornelius.db.elephantsql.com",
database: "wqynvjtr", //læg mærke til at user og database er det samme på elephant, da vi er på en shared instance
password: "p2fzm-0YY5RHj2hcczCiL63PoaxUPhtL",
port: 5432,
ssl: {
rejectUnauthorized: false,
},
});

const qry = 'SELECT * from skrald';
const qry2 = 'SELECT navn from skrald';

klient.connect();

app.get("/skrald", async (req, res) => {
try {
let queryData = await klient.query(qry);
res.json({
"ok": true,
"skrald": queryData.rows,
})
} catch (error) {
res.json({
"ok": false,
"message": error.message,
})
};
})

app.get("/skraldnavn", async (req, res) => {
    try {
    let queryData = await klient.query(qry2);
    res.json({
    "ok": true,
    "navn": queryData.rows,
    })
    } catch (error) {
    res.json({
    "ok": false,
    "message": error.message,
    })
    };
    })

app.listen(port, () => {
console.log(`Appl. lytter på http://localhost:${port}`);
});
