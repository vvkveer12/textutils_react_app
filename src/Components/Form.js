import React from 'react';
import '../App.css';
import { useState } from 'react';
export default function Form(props) {
  const clearText = () =>
  {
     settext("");
  }
  const SelectText = () => 
  {
    var data  = document.getElementById("textarea");
    data.select();
    navigator.clipboard.writeText(data.value);
    
  }
  const ConvertiToLower = () => {
      let lowetText = text.toLowerCase();
      settext(lowetText);
  }
    const ConvertToUpper = () => {
        let textToUpper = text.toUpperCase();
        settext(textToUpper);
    }
    const Onchangebtn = (event) => {
        settext(event.target.value);
    }
    const [text, settext] = useState("");
  return (
    <div>
      <h2 style={{color : props.mode==='light' ? 'black':'white'}} className="ms-2">{props.heading}</h2>
        <div className="container">
        <textarea  className="form-control" style={{backgroundColor : props.mode==='light' ? 'white':'gray', color : props.mode==='light' ? 'black':'white'}} value={text} onChange={Onchangebtn} placeholder="Write your text here" id='textarea'></textarea>
        <button className='btn btn-primary text-light mt-3 ms-2' onClick={ConvertToUpper}>Convert to upper case</button>
        <button className='btn btn-primary text-light mt-3 ms-2' onClick={ConvertiToLower}>Convert to Lower case</button>
        <button className='btn btn-primary text-light mt-3 ms-2' onClick={clearText}>Clear Text</button>
        <button className='btn btn-primary text-light mt-3 ms-2' onClick={SelectText}>Copy Text</button>
        </div>
        <div className="container mt-5" style = {{color : props.mode==='light' ? 'black':'white'}}>
          <h3>Summary</h3>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{(0.008 * text.split(" ").length).toFixed(3)} minuts take to read</p>
          <h4>Preview</h4>
          <p>{text}</p>
        </div>
    </div>
  )
}
