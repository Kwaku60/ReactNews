// Include React
var React = require("react");

// the History component displays  recent searches.
var History = React.createClass({
  //component's render method
  render: function() {
    return (
      <div className="history-container">
        <div>
          <h3 className="text-center history-heading">Previous Searches:</h3>
        </div>
        <div className="panel-body text-center">

         {/*//a map function to loop through the array in JSX */}
          {this.props.history.map(function(search, i) {
            return (
              <p key={i}>{search.terms} - {search.date}</p>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = History;
