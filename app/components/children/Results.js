// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({


  render: function() {
    return (
      <div>



    
        <div className="panel-body text-center results" id="results-well" > Results
        
          <p className="article-hold"></p>

  {this.props.articles.map((article, i) => (
              <div key={i} id={"result_"+(i+1)} className="well">
                <h2><span className="btn btn-primary">{i+1}</span> {article.headline.main}</h2>
                <p>{article.byline ? article.byline.original : "No Author"}</p>
                <p>{article.section_name}</p>
                <p>{article.pub_date}</p>
                <a href={article.web_url} target="_blank" >{article.web_url}</a>
                <br/>
                <button className="btn btn-primary">Save Article</button>
              </div>
            ))
          }



 
        </div>



      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
