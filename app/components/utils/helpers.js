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

    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result
      //**find a way to return the entire array of search results */

      var data = response.data.response.docs;
      console.log(data);

      return data;
      // data = data.map(function(item, i){
      //           var title = item.headline.main;
      //           var published_date = (item.pub_date) ? item.pub_date : 'Unavailable Date';
      //           var abstract = item.snippet;
      //           var url = item.web_url

      //           return{
      //             title,
      //             published_date,
      //             abstract,
      //             url,
      //           };

      // });

      // if (response.data) {
      //   return response.data.response.docs[0].headline.main;
      // }
      // // no results, return this string
      // return "Nothing Found";
    });
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
