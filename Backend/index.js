const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ecommerce'
})



app.listen(3000, ()=>console.log("the backend is working"))
app.get('/', (req,res)=>{
    connection.query('SELECT * FROM products WHERE `name` ="sugar"', (err,result)=>{
        if (err) {
          console.log(err.sqlMessage)  
        }else{
            res.send(result)
        }
    })
})

app.post('/create', (req,res, next)=>{
    const name = req.body.name;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const description = req.body.description;
    connection.query("INSERT INTO `products`(name,price,quantity,description) VALUES (?,?,?,?)",[name,price,quantity,description], (err, result)=>{
        if (err) {
            console.log(err.sqlMessage)
        }else{console.log(result)}
    })
})

app.delete('/delete/:id', (req,res)=>{
    const id = req.params.id;
    connection.query("DELETE FROM `products`(id) WHERE id = ?",[id], (err, result)=>{
        if (err) {
            console.log(err.sqlMessage)
        }else{console.log(result)}
    })
})

app.put('/edit/:id', (req,res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    connection.query(`UPDATE products SET name=${name},price=${price},quantity=${quantity} WHERE id = ?`,[id], (err, result)=>{
        if (err) {
            console.log(err.sqlMessage)
        }else{console.log(result)}
    })
})