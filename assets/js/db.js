const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/ecommerce-site",{
   
}).then(()=>{
    console.log(`connection successfull.`)
}).catch((e)=>{
    console.log(`connection error`);
})