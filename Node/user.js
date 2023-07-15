const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


const app = express();
const cors = require('cors');
app.use(bodyParser.json());

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
   
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/ecommerce", {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  const userSchema = {
    fName:String,
    lName: String,
    email : String,
    password: String,
    // rePassword:String
   
    
    
    
  };
  const userVar = mongoose.model("user", userSchema);
  
  app.post("/users", async (req, res) => {
    console.log(req)
    const record = new userVar({
      email: req.body.email,
      password: req.body.password,
      fName: req.body.fName,
      lName: req.body.lName,
      // rePassword:req.body.rePassword
  
  
    })

    
    await record.save()
    res.json({ message: "Success" });
  })

  app.post("/login", async (req, res) => {
    console.log(req.body.email);
  
  
    const result = await userVar.find({ email:req.body.email,   password:req.body.password, }).exec();
    console.log(result);
    if(result.length === 1){
      res.json({ message: "Success" });
      console.log("Success")
    }else{
      res.json({ message: "failed" });
      console.log("failed")
    }
  

    
  })
  app.listen(5002, function() {
    console.log("Server started on port 5002");
  });