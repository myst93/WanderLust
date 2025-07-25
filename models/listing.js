// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ListingSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     image: {
//     type: String,
//     default:
//       "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     set: (v) =>
//       v === ""
//         ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
//         : v,
//   },
//     price: Number,
//     location: String,
//     country: String
// });


// const Listing =mongoose.model('Listing', ListingSchema)// yeh Listing model ko create karta h jo ki ListingSchema ke according h

// module.exports = Listing;// yeh Listing model ko export karta h taaki dusre files mein use kiya ja sake


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        filename: { type: String, default: "listingimage" },
        url: { type: String, default: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" }
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model('Listing', ListingSchema); 
// Create the Listing model based on the ListingSchema
module.exports = Listing; // This exports the Listing model so it can be used in other files