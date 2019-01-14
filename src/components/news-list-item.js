import React from 'react';

const NewsListItem = (props) => {
    
    const imageURL = props.news['multimedia'].length>0 ? props.news['multimedia'][0].url:"";
    const title = props.news.title;
    const abstract = props.news.abstract;
    const des_facet = props.news.des_facet.map((facet) => {
        return(
            <div className="facet-item">
                {facet}
            </div>
        );
    });
    
    return (
        <li onClick={()=>{props.onNewsSelect(props.news);}} className="list-group-item news-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageURL} alt="" className="media-object"/>
                </div>
                
                <div className="media-body">
                    <div className="media-heading">
                        <h5>{title}</h5>
                    </div>
                    {abstract}
                    <div className="container">
                        <div className="row">
                            {des_facet}
                        </div>
                    </div>
                    
                </div>
            </div>
        </li>
    );
}

export default NewsListItem;