// Include React
var React = require("react");

// // include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Parent = React.createClass({


  getInitialState: function() {
    return { searchTerm: "", results: "", history: [] };
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

    // Run the query for the address
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

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
      }
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

          <div className="col-md-5">

            <div className="panel panel-default count-div">
              <div>
                <h3 className="panel-title text-center"></h3>
              </div>
              <div className="panel-body text-center click-count-div">

   
                <h1 className="col-md-3" >{this.state.clicks}</h1>
              </div>
            </div>
          </div>

        </div>



<div className="col-md-6">

            <Form setTerm={this.setTerm} />
   </div>         


 <div className="col-md-6">

            <Results articles={this.state.results} />

          </div>

 <div className="row">

          <History history={this.state.history} />

        </div>
        </div>




          

      
    );
  }
});

// Export the component 
module.exports = Parent;


