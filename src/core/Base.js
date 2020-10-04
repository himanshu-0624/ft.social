import React, { useState } from "react";
import Menu from "./menu";
import "../styles.css";
import Footer from "./Footer";
import { Redirect } from "react-router-dom";


const Home = () => {
    const [didRedirect, Setredirect] = useState(false);

    const performRedirect = () => {
    
        if (didRedirect) {
          
            return <Redirect to="/user" />;}
      }
      const change = () =>{
          Setredirect(true);
      }
  return (
    <div>
      <Menu log="" />

      <div className="container">
        <div className="jumbotron mt-5 text-info text-center">
          <h2 className="display-4">Ft.Social</h2>
          <p className="lead">Start Something Epic</p>
        </div>
        <div className="row">
          <div className="col-2 mb-5 offset-5">
          <button className="btn btn-info btn-lg " onClick={()=>{change()}}>Login</button>
          </div>
        </div>
      
      {performRedirect()}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
