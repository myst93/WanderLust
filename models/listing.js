const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type:String,
        default:"https://create.vista.com/unlimited/stock-photos/198104072/stock-photo-view-swiss-alps-raetikon-maienfeld-switzerland/",
        set: (v) =>
            v=== ""
              ?"https://create.vista.com/unlimited/stock-photos/198104072/stock-photo-view-swiss-alps-raetikon-maienfeld-switzerland/"
              : v,
    },
    price: Number,
    location: String,
    country: String
});


const Listing =mongoose.model('Listing', ListingSchema)// yeh Listing model ko create karta h jo ki ListingSchema ke according h

module.exports = Listing;// yeh Listing model ko export karta h taaki dusre files mein use kiya ja sake