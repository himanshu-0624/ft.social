import React, {useState} from 'react';
import Footer from '../core/Footer';
import Menu from '../core/menu';
import "../styles.css";
import "./add.css"
import Card3 from './card3';





const Add = () => {
  const frnd = [ 
    {
       name: "harry",
       bio : "dancer and singer",
       url : "https://placeimg.com/600/300/people"
    },
    {
       name: "hitesh",
       bio : "i dont know",
       url : "https://placeimg.com/600/300/animals"
    },
    {
       name: "haye",
       bio : "i am in sleep ",
       url : "https://placeimg.com/600/300/nature"
    },
    {
       name: "bruno",
       bio : "developer",
       url : "https://placeimg.com/600/300/tech"
    },
    {
       name: "dexter",
       bio : "developer and musician",
       url : "https://placeimg.com/600/300/art"
    }
   ];
   const [d, setd] = useState(0);

   
  const change = () => {
    const c = d<4 ? d + 1 : 0;
    setd(c);
  }
  

    return (
        <div>
            <Menu log="a"/>
           <div className="container">
             <div className="row">
           <div className="offset-2 col-8 ">
                  <form className="form-inline " >
                 
                    <input type="text" className="form-control mt-5 mb-sm-1  mb-3 mr-sm-2" style={{ width: "500px" }} id="name" placeholder="Himanshu"/>
                    <button type="submit" className="btn btn-primary mt-5 mb-sm-1 mb-3">Search</button>
                     </form>
                  </div>
                 <div className="col-8 mt-3 offset-2">
                   <Card3 Name={frnd[d].name} Bio={frnd[d].bio} Url={frnd[d].url} />
                   <div className="row">
          <div className="col-6">
          <button type="button" onClick={() => {change()}} className="btn btn-lg btn-danger">
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> NEXT 
                </button>
                </div>
                <div className="col-6">
                <button type="button" onClick={() => {change()}} className="btn btn-lg btn-primary">
                <i class="fa fa-user-plus" aria-hidden="true"></i> ADD
                </button>
                </div>
               
          </div>
                   </div> 
                  </div>
           </div>
          <Footer></Footer>
        </div>
    )
}

export default Add;