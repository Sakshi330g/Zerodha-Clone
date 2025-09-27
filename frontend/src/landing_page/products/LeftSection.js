import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5 mt-5">
      <div className="row ">
        <div className="col-6   ">
          <img src={imageURL} className="p-5" />
        </div>
        
        <div className="col-6 p-5 mt-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          
          <div className="mb-3" >
          <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          <a href={learnMore} style={{marginLeft: "12rem", textDecoration: "none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div >
          <a href={googlePlay}>
            <img src="media/images/images/googlePlayBadge.svg" />
          </a>
          <a href={appStore} style={{marginLeft: "7rem"}}>
            <img src="media/images/images/appstoreBadge.svg" />
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
