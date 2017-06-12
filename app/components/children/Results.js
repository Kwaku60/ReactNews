// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({


  render: function() {
    return (
      <div>



    
        <div className="panel-body text-center results" id="results-well" > Results
        
          <p className="article-hold">{this.props.articles}</p>
 
        </div>



      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
