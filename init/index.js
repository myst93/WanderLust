const mongoose= require("mongoose"); // used to interact node.js with MongoDB
const Listing= require("../models/listing.js");  
const initdata= require("./data.js"); 


main() // main function to connect to the database
  .then(res=>{
    console.log('Database connected successfully');
  })
    .catch(err=>{
    console.error('Database connection failed:', err);
  })


async function main(){ 
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust'); // Connect to the MongoDB database
}
// Function to initialize the database with sample data
// This function clears existing listings and inserts new sample data
const initDB = async () =>{
    await Listing.deleteMany({}); // Clear the existing listings in the database
    await Listing.insertMany(initdata.data); // Insert initial data into the database
    console.log("Database initialized with sample data");
}

initDB(); // Call the function to initialize the database with sample data