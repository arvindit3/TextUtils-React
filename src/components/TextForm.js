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

 const handleCopyClick=()=>{
    var text = document.getElementById('myBox');
    text.select();    
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy to clipboard!","success");
 }

 const handleClearTextClick =()=>{  
    setText("");
    props.showAlert("Enter text has been cleared!","success");
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
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.Mode ==='dark'?'#13466e':'white', color: props.Mode ==='dark'?'white':'black' }} ></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLocClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1"onClick={handleClearTextClick}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color: props.Mode ==='dark'?'white':'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008  * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <p>Emails in entered string : {extractEmails(text)}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview here!'}</p>
        
    </div>
    {/*<ColorPallet/> */}
    </>
  )
}
