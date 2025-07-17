
const mongoose= require("mongoose");
const Listing= require("../models/listing.js");
const initdata= require("./data.js");


main()
  .then(res=>{
    console.log('Database connected successfully');
  })
    .catch(err=>{
    console.error('Database connection failed:', err);
    })


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}


const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("Database initialized with sample data");
}

initDB();