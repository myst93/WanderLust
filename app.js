const express= require('express');
const mongoose= require('mongoose');
const app= express();
const Listing = require('./models/listing.js');
const path= require('path');
const MethodOverride = require('method-override');
const ejsMate = require('ejs-mate');


app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}))
app.use(MethodOverride("_method"))
app.engine('ejs', ejsMate);// use ejs-locals for all ejs templates:
app.use(express.static(path.join(__dirname,"public")))// serve static files from the public directory

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





//Index Route
app.get('/listings', async (req,res)=>{
  const allListing = await Listing.find({})
  res.render("./listing/index.ejs", {allListing})
})


//New and Create Route
//yeh wala get request upar aayga show route kuki agar hum isko neecha rakh raha h toh yeh usko as a ID treat kar raha h
app.get('/listings/new', (req,res)=>{
  res.render('./listing/new.ejs')
})


//Show Route
app.get('/listings/:id',async (req,res)=>{
  let {id}=req.params
  const listing= await Listing.findById(id)
  res.render('./listing/show.ejs',{listing})
})

//Create Route
app.post('/listings', async (req,res)=>{
  // let {title,description,image,price,location,country}=req.body 
 //this is not the good apprach instead we can make the changes in the form and make as a object
//  let listing = req.body
 const newlisting=new Listing(req.body)
 await newlisting.save();
 res.redirect('/listings')
})

//EDIT Route
app.get('/listings/:id/edit', async (req,res)=>{
  let {id}=req.params
  const listing= await Listing.findById(id)
  res.render("./listing/edit.ejs",{listing})
})


//PUT Route
app.put('/listings/:id', async (req,res)=>{
  let {id}=req.params
  // const listing= await Listing.findById(id)
  // let listing=req.body.listing
  // let newlisting = await Listing.findByIdAndUpdate(id, {listing})
  await Listing.findByIdAndUpdate(id,req.body)
  res.redirect("/listings")
})

//DELETE route 

app.delete('/listings/:id', async (req,res)=>{
  let {id} = req.params
  await Listing.findByIdAndDelete(id)
  res.redirect("/listings")
})

// app.get('/testListing', async (req, res) => { 
//     let sampleListing = new Listing({
//         title: "My First Villa",
//         description: 'A beautiful villa with a sea view.',
//         price: 150,
//         location: 'Maldives',
//         country: 'India'
//     })
//     await sampleListing.save(); //this is used to save the data in the database and it is a async function
//     console.log(sampleListing);
//     res.send('Sample listing created successfully');
// })




app.get('/',(req,res)=>{
    res.send('Welcome to Airbnb Clone');
})


app.listen(8080,(req,res)=>{
    console.log('Server is running on port 8080');
})