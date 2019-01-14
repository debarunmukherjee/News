import React from 'react'

const NewsPop = (props) => {
    if(!props.news){
        return(
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            Loading....
          </div>
        </div>
    );
    }
    
    const short_url = props.news.short_url;
    
    return(
        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <iframe src={short_url} className="embeb-responsive-item"></iframe>
          </div>
        </div>
    );
};

export default NewsPop;