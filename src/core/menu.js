import React, {Fragment, useState} from 'react';
import { Link, withRouter  } from "react-router-dom";





const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: "black"}
    }
    else{
        return {color: "#FFFFFF"}
    }
}

const Menu = ({history, log}) => {


    return (
           <div>
      <ul className="nav nav-tabs bg-info">  
       {!log && (
             <Fragment>
             <li className="nav-item">
              <Link style={currentTab(history, "/")} className="nav-link" to="/">
                  Home
              </Link>
          </li>
         
             
              <li className="nav-item">
              <span className="nav-link text-white"
              onClick={() => {
                
                      history.push("/user")
                 
              }}
              >LogIn</span>
          </li>
              </Fragment>
       )}
         { log && (
            <Fragment>
              <li className="nav-item"> 
          <Link style={currentTab(history, "/user")} className="nav-link" to="/user">
                  Home
              </Link>
          </li>
          <li className="nav-item"> 
          <Link style={currentTab(history, "/user/profile")} className="nav-link" to="/user/profile">
                  Profile
              </Link>
          </li>
          <li className="nav-item"> 
          <Link style={currentTab(history, "/user/friends")} className="nav-link" to="/user/friends">
                  My Friends
              </Link>
          </li>
          <li className="nav-item"> 
          <Link style={currentTab(history, "/user/add")} className="nav-link" to="/user/add">
                  Add Friends
              </Link>
          </li>
          
              <li className="nav-item">
              <span className="nav-link text-warning"
              onClick={() => {
                   
                      history.push("/")
                 
              }}
              >Logout</span>
          </li>
          </Fragment>
         )}
      </ul>
  </div>
)
}

export default withRouter(Menu);