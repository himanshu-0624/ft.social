import React from 'react';

import Footer from '../core/Footer';
import Menu from '../core/menu';
import "../styles.css";
import Card2 from './card2';
import Info from './info';
import "./prfile.css"

const Profile = () => {

    return (
        <div>
            <Menu log="a"/>
          <div className="container">
            <div className="row">
                <div className="col-12">
                   <Info/>
                   <hr/>
                </div>
               
                <div className="col-md-4 "> <Card2 Name="post1" Bio="Life is better when you’re laughing" Url="https://placeimg.com/600/300/nature" /></div>
                     <div className="col-md-4 "> <Card2 Name="post2" Bio="I love to play and sing  way the through wind blows "  Url="https://placeimg.com/600/300/people" /></div>
                     <div className="col-md-4 "> <Card2 Name="post23r" Bio="Life is better when you’re laughing"   Url="https://placeimg.com/600/300/art"/></div>
              
                <div className="col-md-4 "> <Card2 Name="post23" Bio="I’m not gonna sugar coat the truth, I’m not Willy Wonk"  Url="https://placeimg.com/600/300/road" /></div>
                     <div className="col-md-4"> <Card2 Name="post23rv" Bio="Life is better when you’re laughing"  Url="https://placeimg.com/600/300/galaxy"/></div>
                     <div className="col-md-4"> <Card2 Name="post23ri" Bio="I’m not gonna sugar coat the truth, I’m not Willy Wonk"  Url="https://placeimg.com/600/300/animals" /></div>
                
                    
                    
            </div>
          </div>
          <Footer></Footer>
        </div>
    )
}

export default Profile;