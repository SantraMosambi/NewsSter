import React from "react";

const NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl,author,time } = props;
    return (
      <div className="my-3  ">
        <div className="card" >
          <img src={!imageUrl?"https://www.91-cdn.com/hub/wp-content/uploads/2021/09/iqoo-z5-launch-date-india-feat.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown":author} publish at {new Date(time).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem