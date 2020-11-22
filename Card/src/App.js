

import whatsapp from "./img/wahtsapp.png"
import Facebook from "./img/facebook.png"
import Insta from "./img/insta.png"
import edit from "./img/edit.png"


import './App.css';


function App(props) {

  
  return (
    
   <div className="card">
     
     <div className="cover" style={{backgroundImage: `url(${props.cover})`}} >
       
       <a href="#"> <img className="edit" src={edit}/></a></div>
     <img className="profile" src={props.profile} alt=""/>
    <div className="info">

     <h2>{props.name}</h2>
  <b>{props.address}</b>
     <h3>{props.job}</h3>
     <p>{props.desc}
</p>
    </div>
     <div className="icons">
      <a href={props.whatsapp}><img className="icon"  src={whatsapp} alt=""/></a> 
      <a href={props.facebook}><img className="icon" src={Facebook} alt=""/></a> 
      <a href={props.insta}><img className="icon" src={Insta} alt=""/></a> 
     </div>

   </div>
  );
}

export default App;
