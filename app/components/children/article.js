
import React from 'react';

export default class Article extends React.Component {
render() {
          var {title, date, abstract, url} = this.props; 

            return( 
              <div class="col-md-4">
              <h4>{title}</h4>
              <p class ="article-date">{date}</p>
              <p>{abstract}</p>
              <a class="btn btn-default text-info" href={url} target= "_blank">More info...</a>
              </div>
                )


         }      
}