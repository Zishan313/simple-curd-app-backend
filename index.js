const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute =require('./routes/product.routes.js')
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello from node api");
});



// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     console.log("data received", req.body);
//     res.status(200).json({ message: "data sent", product });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     console.log("Get all the data from Data base", products);
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const {id} = req.params;
//     const product = await Product.findById(id);
//     console.log("Get product by id",product);
//     res.status(200).json(product);

//   } catch (error) {
//     res.status(500).json({message:error.message});
//   }
// });

// Update product

// app.put("/api/products/:id" , async(req,res) => {

//     try {
        
//         const {id} = req.params;

//         const product = await Product.findByIdAndUpdate(id,req.body);

//         if(!product){
//            return res.status(500).json({message:"Product not found"});
//         }

//         const updatedProduct = await Product.findById(id);

//         res.status(200).json({message:"updatedProduct",updatedProduct}) 
//       } catch (error) {
        
//         res.status(500).json({message:error.message});
//     }
// })

//Delete product 

// app.delete("/api/products/:id",async(req,res) => {

//     const {id} =req.params;

//     const product = await Product.findByIdAndDelete(id);

//     if(!product){
//         return res.status(500).json({message:"User not found"});
//     }
//     console.log("Product deleted successfully ",id);

//    res.status(200).json({message:"Product deleted successfully "})
// })



mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => {
      console.log("hello vipul, server is running at 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
