import React from 'react'
import NewsListItem from './news-list-item.js'

const NewsList = (props)=>{
    
    const sortTerm = props.sortTerm;
    var NewsList = props.news.map((newsItem)=>{
        if(newsItem.multimedia.length > 0)
        return <NewsListItem onNewsSelect={props.onNewsSelect} news={newsItem} key={newsItem.url} />;
    })
    
    NewsList.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.props.news[sortTerm]) - new Date(a.props.news[sortTerm]);
    });
    
    return(
        <ul className="list-group">
            {NewsList}
        </ul>
    )
}

export default NewsList;