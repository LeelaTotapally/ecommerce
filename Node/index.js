const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const app = express();
const cors = require('cors');





app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/ecommerce", {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
  // Listen for the error event

  const electonicSchema = {
    brandName: String,
    productName: String,
    color:String,
    price: Number,

  };
  const elec = mongoose.model("electronics", electonicSchema);

  app.post("/", async (req, res) => {
    const record = new elec({
      brandName: req.body.brandName,
      productName: req.body.productName,
     
      color: req.body.color,
      price: req.body.price,
    })
    await record.save()
    res.send(record)
  })

  app.get("/", async function(req, res) {
   
    try {
      const result = await elec.find().exec();
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });



  const furnitureSchema = {
    brandName: String,
    productName: String,
    color:String,
    price: Number,
    image: String,

  };
  const furnit = mongoose.model("furniture", furnitureSchema);

  app.post("/f", async (req, res) => {
    const record = new furnit({
      brandName: req.body.brandName,
      productName: req.body.productName,
     
      color: req.body.color,
      price: req.body.price,
      image: req.body.image
    })
    await record.save()
    res.send(record)
  })

  app.get("/f", async function(req, res) {
   
    try {
      const result = await furnit.find().exec();
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });
  
  

app.listen(5001, function() {
    console.log("Server started on port 5001");
  });