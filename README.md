# Airbnb Clone - WanderLust

A simple Airbnb-like property listing web application built with Node.js, Express, MongoDB, and EJS.

## Features

- View all property listings
- Add new listings
- Edit and delete existing listings
- View details for each listing
- Responsive UI with Bootstrap

## Project Structure

```
.
├── app.js
├── package.json
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   └── listing.js
├── public/
│   └── css/
│       └── style.css
└── views/
    ├── includes/
    │   ├── footer.ejs
    │   └── navbar.ejs
    ├── layouts/
    │   └── biolerplate.ejs
    └── listing/
        ├── edit.ejs
        ├── index.ejs
        ├── new.ejs
        └── show.ejs
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Make sure MongoDB is running locally on `mongodb://127.0.0.1:27017/wanderlust`.
4. To seed the database with sample data, run:

   ```sh
   node init/index.js
   ```

5. Start the server:

   ```sh
   node app.js
   ```

6. Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Main Files

- [`app.js`](app.js): Main Express application, sets up routes and middleware.
- [`models/listing.js`](models/listing.js): Mongoose schema/model for property listings.
- [`init/data.js`](init/data.js): Sample data for seeding the database.
- [`init/index.js`](init/index.js): Script to initialize the database with sample data.
- [`views/`](views/): EJS templates for rendering pages.
- [`public/css/style.css`](public/css/style.css): Custom CSS styles.

## License

ISC

---

*This project is for educational purposes and is not affiliated
