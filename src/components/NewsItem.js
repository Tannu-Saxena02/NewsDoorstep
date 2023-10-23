import React from "react";

const NewsItem=(props)=> {
    //destructing of props
    // can be do or not be do its upto you
    let defaultNewsUrl="https://img.freepik.com/free-photo/network-connection-graphic-overlay-background-computer-screen_53876-120776.jpg";
    let {title,description,url,newsUrl,author,date,source}=props;
    return (
      <div className="container my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:"flex-end",right:0,position:"absolute"}}>
          <span className="badge rounded-pill bg-danger" >
            {source}
            </span>
          </div>
          <img src={url?url:defaultNewsUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title?title:"No title"}
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            {/* //by target link open in new tab */}
            <a href={newsUrl} target="_blank" rel="noreferrer noopener" className="btn btn-sm btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
}
export default NewsItem;
