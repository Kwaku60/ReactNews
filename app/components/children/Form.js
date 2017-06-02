// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({


  getInitialState: function() {
    return { term: "" };
  },

  //respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  // When a user submits
  handleSubmit: function(event) {
 
    event.preventDefault();

    // Set the parent to empty again
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },
  // component's render method
  render: function() {
    return (
      <div>
      
        <div className="text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="search-heading">
                <strong>Article Search</strong>
              </h4>
             
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center search-input"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <button
                className="btn search-btn"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
