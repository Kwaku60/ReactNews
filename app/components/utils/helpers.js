// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");



var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";



// Helper functions for making API Calls
var helper = {


  //this function takes the search term to find the NYT articles.
  runQuery: function(searchTerm) {

    console.log(searchTerm);
     searchTerm = searchTerm.replace(/\s/g, '+');


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +  authKey + "&q=" + searchTerm;

    return axios.get(queryURL)
    
   
  },

  // retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  //  posts new searches to database.
  postHistory: function(searchTerm) {
    return axios.post("/api", { terms: searchTerm });
  }
};

//export API helper
module.exports = helper;
