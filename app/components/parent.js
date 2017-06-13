// Include React
var React = require("react");

// // include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");
var Article = require("./children/Article");
// var ArticleResults = require("./utils/helpers");
// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Parent = React.createClass({


  getInitialState: function() {
    return { searchTerm: "", results: [], history: [] };
  },

  

  setResults(results) {
   this.setState({results: results});
   console.log(results);
  
  },
  


  // / The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },

  // If the component changes- if a search is entered
  componentDidUpdate: function() {

    // Run the query for the article
    helpers.runQuery(this.state.searchTerm).then(function(response) {

     
 
    
    
 
      // If get get a result, return that result
      //**find a way to return the entire array of search results */

      var data = response.data.response.docs;
      console.log(data);

          var results = []
     data.forEach(function(item) {
                results.push(item)
            });
           console.log(results);
            this.setResults(results);



      // data = data.map(function(item, i){
      //           var title = item.headline.main;
      //           console.log(title);
      //           var date = (item.pub_date) ? item.pub_date : 'Unavailable Date';

      //           var abstract = item.snippet;
      //           console.log(abstract);

      //           var url = item.web_url;
      //    console.log(url);

      //   console.log("Results", data);






        


// data.map(function(data, i) {
//              <div class="col-md-4">
//               <h4>{title}</h4>
//               <p class ="article-date">{date}</p>
//               <p>{abstract}</p>
//               <a class="btn btn-default text-info" href={url} target= "_blank">More info...</a>
//               </div>
//         });



        // })




      
    

      // if (response.data) {
      //   return response.data.response.docs[0].headline.main;
      // }
      // // no results, return this string
      // return "Nothing Found";
   


















//data is undefined

// var { articles } = this.state;

    




        // this.state.results = resultArray; 
        
        this.setState({ results: results });

        // After getting the result... then post the search term to  history.
        helpers.postHistory(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After the post then get the updated history
          helpers.getHistory().then(function(response) {
            console.log("Current History", response.data);

            console.log("History", response.data);

            this.setState({ history: response.data });

          }.bind(this));
        }.bind(this));
      
    }.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  getInitialStateClicks: function() {
    return {
      clicks: 0
    };
  },


  handleClick: function() {
    this.setState({ clicks: this.state.clicks + 1 });
  },

  resetClick: function() {
    this.setState({ clicks: 0 });
  },

  // render 
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="row header">
            <h2>React News</h2>
            <p><em>Speed is on our side</em></p>

            <p>
              
              <button className=" btn-md theme-btn" onClick={this.handleClick}>Shift Theme</button>
            
              <button className=" theme-btn" onClick={this.resetClick}>Reset</button>
            </p>

          </div>

          <div className=" row border-block" > </div>
<div className = "col-md-2">
<h1 className="col-md-1" >{this.state.clicks}</h1>
  </div>
    </div>
       


    

<div className="row">

          

 <div className="col-md-6">

          <History history={this.state.history} />

        </div>

        <div className="col-md-6">

            <Form setTerm={this.setTerm} />
   </div>  

        </div>



         <div className="col-md-6">

            <Results articles={this.state.results} />
            

          </div>
        </div>




          

      
    );
  }
});

// Export the component 
module.exports = Parent;


