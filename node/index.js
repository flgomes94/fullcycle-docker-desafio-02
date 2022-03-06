const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values ('Wesley');`
connection.query(sql);
const sql2 = `SELECT * from people;`
let peoples = {};
const result = connection.query(sql2, function (error, results, fields) {
    if (error) throw error;
    peoples = results;
    //console.log('The solution is: ', results[0].solution);
  });
connection.end();

app.get('/', (req,res)=> {
    res.send(`<h1>Full Cycles</h1></ br><p>${JSON.stringify(peoples)}</p>`)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})