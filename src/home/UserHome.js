import React from 'react';

import Footer from '../core/Footer';
import Menu from '../core/menu';
import Card2 from '../profile/card2';
import "../styles.css";


const UserHome = () => {

    return (
        <div>
            <Menu log="a"/>
     <div class="jumbotron jumbotron-fluid">
      <div class="container">
       <h1 class="display-4 text-center">Today's Feed</h1>
  
     </div>
</div>
            <div className="container">

                 <div className="row">
                    
                     <div className="col-8 offset-2"> <Card2 Name="post2" Bio="I love to play and sing  way the through wind blows "  Url="https://placeimg.com/600/300/people"/></div>
                     <div className="col-8 offset-2"> <Card2 Name="post23" Bio="I’m not gonna sugar coat the truth, I’m not Willy Wonk"  Url="https://placeimg.com/600/300/road"/></div>
                     <div className="col-8 offset-2"> <Card2 Name="post2" Bio="I love to play and sing  way the through wind blows "  Url="https://placeimg.com/600/300/people"/></div>
                     <div className="col-8 offset-2"> <Card2 Name="post23" Bio="I’m not gonna sugar coat the truth, I’m not Willy Wonk"  Url="https://placeimg.com/600/300/road"/></div>
                     <div className="col-8 offset-2"> <Card2 Name="post2" Bio="I love to play and sing  way the through wind blows "  Url="https://placeimg.com/600/300/people"/></div>
                     <div className="col-8 offset-2"> <Card2 Name="post23" Bio="I’m not gonna sugar coat the truth, I’m not Willy Wonk"  Url="https://placeimg.com/600/300/road"/></div>
                     <div className="col-8 offset-2"> <Card2 Name="post2" Bio="I love to play and sing  way the through wind blows "  Url="https://placeimg.com/600/300/people"/></div>
                     <div className="col-8 offset-2"> <Card2 Name="post23" Bio="I’m not gonna sugar coat the truth, I’m not Willy Wonk"  Url="https://placeimg.com/600/300/road"/></div>
                 </div>
            </div>
         
         <Footer></Footer>
        </div>
    )
}

export default UserHome;