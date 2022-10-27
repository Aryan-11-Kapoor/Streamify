const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "pes2ug20cs069",
    database: "streamify"

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM contact_db";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/", (req,res) =>{
    //const sqlInsert = 
    //" INSERT INTO contact_db (name, email, contact) VALUES('johnson', 'johnson@gmail.com', 7321453211)";
    //db.query(sqlInsert, (error, result) => {
       // console.log("error", error);
       // console.log("result", result);
        //res.send("Hello express");
   // });
    
});

app.listen(5000, () => {
    console.log("Server is running at port 5000");
})
