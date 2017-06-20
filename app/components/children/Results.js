// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({


  render: function() {
    return (
      <div>






    
        <div className="panel-body text-center results" id="results-well" > 
        
          <p className="article-hold">

  {this.props.articles.map((article, i) => (
              <div key={i} id={"result_"+(i+1)} className="article-headline">
                <h2 id="title"><span className="article-count">{i+1}</span> {article.headline.main}</h2>
                <p className="by-line" >{article.byline ? article.byline.original : "No Author"}</p>
     
                <p className="publish-date" >{article.pub_date}</p>
           
                <br/>
                <p className="snippit">{article.lead_paragraph} </p>
                     <a className="read-me-link" href={article.web_url} target="_blank" >...read more</a>
     
              </div>
            ))
          }


</p>
 
        </div>



      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
