import React, { useState, useEffect } from "react";
import Like from "./like.svg";
import Dislike from "./dislike.svg";
const Card = ({
  Name,Bio, Url
 
}) => {


  const cardTitle = Name ? Name : "ELON MUSK";
  const cardDescription = Bio ? Bio : "Founder of TESLA";
  const imageurl = Url ? Url : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  return (
    <div className="card text-info  border border-info ">
      <div className="card-header lead">{cardTitle}</div>
      <div className="card-body">
        <div className="rounded border border-success p-2">
          <img
            src={imageurl}
            alt="photo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded"
          />
        </div>
        <p className="lead  font-weight-normal text-wrap">
          {cardDescription}
        </p>
     
        <div className="row">
          <div className="col-12">
          <button type="button">
                  <img src={Like} alt="Like" />
                </button>
                <button type="button">
                  <img src={Dislike} alt="Like" />
                </button>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Card;
