import React from "react";
import Form from "./Form";
import Navbar from './Navbar';
import { useState } from "react";
import '../App.css';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => 
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   
    <React.Fragment>
       <Navbar title = 'TextUtils'  mode = {mode} toggleMode = {toggleMode}/>
      <div className="container">
      <div className="m-4 container-fluid">
      <Form heading = 'Enter the text here for analyze below' mode = {mode}/>
      </div>
      </div>
      </React.Fragment>
  );
}

export default App;
