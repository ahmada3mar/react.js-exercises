import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import student from "./comp/student"



const Pers = student.map((item) => <App name={item.name}  job={item.job} address= {item.address} desc={item.desc} facebook={item.facebook} whatsapp= {item.whatsapp} insta={item.insta} profile={item.profile} cover={item.cover}/>);

ReactDOM.render(
  <React.StrictMode>
    <div id="container">

   {Pers}
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
