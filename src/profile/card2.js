import React, { useState, useEffect } from "react";

const Card2 = ({
  Name,Bio, Url
 
}) => {


  const cardTitle = Name ? Name : "ELON MUSK";
  const cardDescription = Bio ? Bio : "Founder of TESLA";
  const imageurl = Url ? Url : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  return (
    <div className="card text-info border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        <div className="rounded border border-success p-2">
          <img
            src={imageurl}
            alt="photo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 "
          />
        </div>
        <p className="lead  font-weight-normal text-wrap">
          {cardDescription}
        </p>
     
        <div className="row">
          <div className="col-6">
          <button type="button" className="btn btn-lg btn-info">
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> <span class="badge badge-light">10</span>
                </button>
                </div>
                <div className="col-6">
                <button type="button" className="btn btn-lg btn-primary">
                <i class="fa fa-comment-o" aria-hidden="true"></i> <span class="badge badge-light">4</span>
                </button>
                </div>
               
          </div>
      
        </div>
      </div>

  );
};

export default Card2;
