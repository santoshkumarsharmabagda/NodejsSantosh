const express = require("express");
const bcrypt = require('bcrypt')
require("./Conact");
const cors = require('cors')
const Login = require("./Product");



const App = express();

App.use(cors());
App.use(express.json());


App.post("/list",async(req,res)=>{
   let {email,password} = new Login(req.body)
   
});


App.post("/login",async(req,res)=>{
    let { email, password } = new Login(req.body)
    const hashed_password = await bcrypt.hash(password, 10);

  const login = new Login({
    email: email,
    password: hashed_password
  });

  try {
    const result = await login.save();
    res.send({status:001, result});
  } catch (error) {
    console.log(error);
    res.send('Error saving login data');
  }
})


App.listen(8080);



