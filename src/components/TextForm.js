import React, {useState} from 'react'
import ColorPallet from './ColorPallet';

export default function TextForm(props) {
    const [text, setText] = useState ('');

    const handleUpClick =()=>{

      //  console.log("Uppercase was clicked");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Entered sentance is converted into upper case","success");
   }

   const handleLocClick =()=>{

    //  console.log("Uppercase was clicked");
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlert("Entered sentance is converted into lower case","success");
 }

 function extractEmails (text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  }

   const handleOnChange =(event)=>{
    setText(event.target.value);
    //console.log("Uppercase was on change - " + text);
   }
  
  // text ="asdasd"; // Wrong way to change the state
  // setText ("asadasdasd")  // Correct way to set the state

  return (
    <>
    <div className='container' style={{color: props.Mode ==='dark'?'white':'black' }}>
       <h2>{props.heading}</h2>
        <div className="my-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.Mode ==='dark'?'gray':'white', color: props.Mode ==='dark'?'white':'black' }} ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleLocClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-1" onClick={extractEmails(text)}>Extract Emails from text</button>
    </div>
    <div className='container my-3' style={{color: props.Mode ==='dark'?'white':'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008  * text.split(" ").length} minutes to read</p>
        <p>Emails in entered string : {extractEmails(text)}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview here'}</p>
        
    </div>
    <ColorPallet/>
    </>
  )
}
