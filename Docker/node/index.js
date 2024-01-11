const express = require('express')
const app = express()
const port = 3000
const config = { 
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
var connection = mysql.createConnection(config)
var sql = `INSERT INTO people(name) values ('Wesley')`
connection.query(sql)
sql = `Select * from people`
connection.query(sql,function(err,result,fields){
    if(err) throw err;
    console.log(result);
})
connection.end()

app.get('/',(req,res) => {
    sql = `Select * from people`
    connection = mysql.createConnection(config)
    connection.query(sql, function(err,result,fields)   
    {  
        connection.end();
        if (err) throw err;
        res.send('<h1>Full Cycle Rocks!</h1>' + JSON.stringify(result)); 
    });
});
app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})