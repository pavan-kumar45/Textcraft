import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLowClick=()=>{
      console.log("LowerCase was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase","success");
    }
    const handleClearClick=()=>{
      
      let newText='';
      setText(newText);
      props.showAlert("text cleared","success");
    }

    const handleCopy=()=>{
      console.log("On change");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("copied to clipboard","success");
    }

    const handleExtraSpaces=()=>{
      console.log("removed extra spaces");
      let newText=text.split(/[ ]+/)
      setText(newText.join(" "));
      props.showAlert("removed extra spaces","success");
    }
    
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState(''); // enter text here
    //text="new text"; //wrong way to change the text
    //setText("new text"); //correct way
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>


    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter something to preview it"}</p>

    </div>
    </>
  )
}
