const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const assets = __dirname + "/public"
app.use(express.static(assets));
app.use(cors({optionSuccessStatus:200}));

app.route("/").get((req,res)=>{
	res.sendFile(__dirname+"/views/index.html");
})

app.route("/api/whoami").get((req,res)=>{
	res.json({"ipaddress":req.ip,"language":req.get('Accept-Language'),"software":req.get('User-Agent')})
})

app.listen(process.env.PORT,()=>console.log("header parser API is now listening...."));