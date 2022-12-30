 import React,{useState} from 'react'
//  import PropTypes from 'prop-types'
 
 export default function TsextForm(props) {
  const [text, setText] = useState('');


         var words = text.split(" ").length;
         var length = text.length;
         var seconds = (0.008 * 60 * (text.split(" ").length)).toFixed(2)
         var  minutes = (0.008 * (text.split(" ").length)).toFixed(2)

        const handleUpClick = ()=>{
            // console.log("Button was clicked" + text)
            let newText = text.toUpperCase(text); 
            setText(newText);
        }
        const handleLoClick = ()=>{
          // console.log("Button was clicked" + text)
          let newText = text.toLowerCase(text); 
          setText(newText);
      }
        const handleOnChange = (event)=>{
          // console.log("CLICKED");
          setText(event.target.value);
          let para2 = document.getElementById('time')
          let para1 = document.getElementById('length');
          para1.innerText = words + " words and " + length + " characters"
          para2.innerText = "Expected time to read the text is " + seconds + " Seconds and " + minutes + " Minutes"
        }
        const TextClear = ()=>{
        //  let box = document.getElementById('myBox');
        //  box.value = "";
        console.log("");

        }
        
        const clearEverything = ()=>{
          let preview = document.getElementById('preview');
          preview.innerText="";
          words = 0;
          length = 0;
          seconds = 0;
          minutes = 0;
          let box = document.getElementById('myBox');
          let para1 = document.getElementById('length');
          let para2 = document.getElementById('time')
          para2.innerText = ""
          para1.innerText = ""
          box.value = ""


        }
        if(text ==="Enter the text here"){
          words = 0;
          length = 0;
        }

       
        

   return (
    <>
     <div className='container-fluid text-dark bg-secondary'>
        <h1> 
            {props.heading}
        </h1>
        <div className="mb-3">
  {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} onClick={TextClear} id="myBox" rows="5"></textarea>
  <button className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>Convert to UPPERCASE  </button> <button className="btn btn-primary" onClick={handleLoClick}>CONVERT TO lowercase</button> <button onClick={clearEverything} type="button" className="btn btn-danger my-4 mx-2">Clear</button>
</div>

     </div>
     <div className="container-fluid my-3 text-dark bg-secondary">
      <h1>Your Text Summary</h1>
      <p id='length'>
        
        </p>
        
     <p id='time'></p>
    <div className="preview">
    <h2>Text Preview </h2>
     <p id='preview'>{text}</p>
    </div>
     </div>
     </>
   )
 }
             