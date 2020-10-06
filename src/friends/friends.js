import React from 'react';
import Footer from '../core/Footer';
import Menu from '../core/menu';
import "../styles.css";


const Friends = () => {

    return (
        <div>
            <Menu log="a"/>
          <div className="container">
              <div className="row">
                  <div className="offset-md-2 col-8 ">
                  <form className="form-inline " >
                 
                    <input type="text" className="form-control mt-5 mb-sm-1  mb-3 mr-sm-2" style={{ width: "500px" }} id="name" placeholder="Himanshu"/>
                    <button type="submit" className="btn btn-primary mt-5 mb-sm-1 mb-3">Search</button>
                     </form>
                  </div>
                  <div className="col-12">
                  <div className="list-group">
     <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
      <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
      <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
      <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
      <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger  float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
      <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
      <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
      <div  className="list-group-item list-group-item-action font-weight-bolder"> 
      Himanshu Gupta
      <button type="button" class="btn btn-outline-danger float-right">
          <i class="fa fa-user-times" aria-hidden="true"></i> UnFriend</button>
          <button type="button" class="btn btn-outline-primary float-right">
         <i class="fa fa-comments-o" aria-hidden="true"></i> Message</button>
      </div>
                  </div>
              </div>
</div>
          </div>
     

         <Footer></Footer>
        </div>
    )
}

export default Friends;