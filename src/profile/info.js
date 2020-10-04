import React, { useState, useEffect } from "react";
import abc from "./abc.jpg"

const Info = () => {



  return (
      <div>
          <div className="card  text-white">
  <img className="card-img "  style={{ height: "300px" }} src={ abc}  alt="Card image"/>
  <div className="card-img-overlay">
    <h2 className="card-title">Himanshu Gupta</h2>
    <p className="card-text">BIO - “There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.” </p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
    </div>
  );
};

export default Info;
