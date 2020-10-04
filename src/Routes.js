import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Add from "./add-friends/add";
import Home from "./core/Base";
import Friends from "./friends/friends";
import UserHome from "./home/UserHome";
import Profile from "./profile/profile";



const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
         
          <Route path="/user" exact component={UserHome} />
          <Route path="/user/profile" exact component={Profile}  />
          <Route path="/user/friends" exact component= {Friends} />
          <Route path="/user/add" exact component={Add}  />
          
        </Switch>
  
      </BrowserRouter>
    );
  };
  
  export default Routes;
  