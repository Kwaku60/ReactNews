// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");



var authKey = "1c9e7ecba5ef477aa0e87cd1efcf7657";



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
