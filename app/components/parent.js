// Include React
var React = require("react");

// include all of the sub-components
var a = require("./a");


var Parent = React.createClass({

  getInitialState: function() {
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
          <div className="jumbotron">
            <h2>React News</h2>
            <p><em>Speed is on our side</em></p>

            <p>
              
              <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Shift Theme</button>
            
              <button className="btn btn-danger btn-lg" onClick={this.resetClick}>Reset</button>
            </p>

          </div>

          <div className="col-md-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center"></h3>
              </div>
              <div className="panel-body text-center">

   
                <h1>{this.state.clicks}</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

// Export the component 
module.exports = Parent;
