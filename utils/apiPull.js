const axios = require("axios");
require('dotenv').config();
const { Business } = require('../models/index');
//create variables from user input to create search


let apiKey = process.env.API_KEY;


// REST
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-type": "application/json",
  },
})

//function to do api data pull for businesses
const findRestList = (userLocation, categorySelection) => {
    console.log('SEARCHING::');
    yelpREST('/businesses/search', { 
        params: { 
            location : userLocation, //user city input
            term: categorySelection, //maintain bar term for specificity
            limit: 12  //choose limit
        } 
    }).then(({ data }) => {
        console.log(data);
      let business = data.businesses;
      business.forEach((b) => {
        //   console.log('ENTER LOCATION::' + b);
        //   const busName = b.name; 
        //   const busClosed= b.is_closed;
        const displayAddress = b.location.display_address[0] + '\n' + b.location.display_address[1];
            
                Business.create({
                id: b.id,
                name: b.name,
                address: displayAddress,
                city: b.location.city,
                zip: b.location.zip_code,
                category: categorySelection,
                phone: b.display_phone,
                isOpen: b.is_closed,
                url: b.url,
                phone: b.display_phone,
                image: b.image_url,
                link: b.url
            }).then((newBusiness) => {
               console.log(newBusiness);
            //    res.json(newBusiness);
            }); 
      });
    })
}

// yelpREST('/businesses/{id}', { params: { key: value } }).then(({ data }) => {
//     // Do something with the data
//   })
//will delete below code before pushing

module.exports = {findRestList};
