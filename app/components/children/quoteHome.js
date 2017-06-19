import React, { Component } from "react";
import Panel from "./common/Panel";
import QuoteForm from "./common/QuoteForm";
import API from "../utils/API";

class QuoteHome extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
    // Binding getQuotes to our component since we'll be passing this
    // method to child components
    this.getQuotes = this.getQuotes.bind(this);
  }
  // Getting all quotes when the component mounts
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  // helper method for rendering one panel for each quote
  renderQuotes() {
    return this.state.quotes.map(quote => (
      <Panel
        quote={quote}
        key={quote._id}
        getQuotes={this.getQuotes}
      />
    ));
  }
  render() {
    return (
      <div className="quotes-hold">
        <div className="row" id="submit-section" >
          <QuoteForm
            getQuotes={this.getQuotes}
          />
        </div>
        <div className="row"  id="discussion-well" >
          <hr />
          {this.renderQuotes()}
        </div>
      </div>
    );
  }
}

module.exports = QuoteHome;
