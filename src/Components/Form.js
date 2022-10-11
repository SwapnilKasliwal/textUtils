import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Form(props) {

    const [text, setText] = useState('')

    const convertToUpperListener = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase', 'success')
    }
    const convertToLowerListener = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to lowercase', 'success')
    }
    const clearTextListener = ()=>{
        setText('')
        props.showAlert('Text Cleared', 'success')
    }
    const copyHandler = ()=>{
        // all this selection and all is not required because we can directly grab the value of text here.
        // var text = document.getElementById('my-box')
        // text.select()
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges();
        props.showAlert('Copied to Clipboard', 'success')
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra spaces have been removed ', 'success')
    }
    const onChaneListener = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={props.mode==='light'?{
        color:'black', backgroundColor: 'white'}:{color:'white', backgroundColor: 'rgb(4 17 63)'}}>
    <h1>
        {props.heading}
    </h1>
    <div className="mb-3">
          <textarea className="form-control my-3" value={text} onChange={onChaneListener} id="my-box" rows="8" style={props.mode==='light'?{
        color:'black', backgroundColor: 'white'}:{color:'white', backgroundColor: '#5171cb'}}></textarea>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToUpperListener}>Convert to upperCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertToLowerListener}>Convert to lowerCase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearTextListener}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyHandler}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container" style={props.mode==='light'?{
        color:'black', backgroundColor: 'white'}:{color:'white', backgroundColor: 'rgb(4 17 63)'}}>
        <h2>Your text Summary</h2>
        {/* Here i would like to describe the function used below, it is just going to filter out the element from
        the array obtained after the spiliting the text and return it's length.
        And the bottom regex code is used to split the text not only on the basis of spaces but also new lines. */}
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes of read</p>
        <h3>Preview</h3>
        {/* Here the backtitcks used below is just to insert the html inside JS and then to use the JS inside of HTML, we are using 
        ${} */}
        <p>{`${text.length===0?'Enter the text in the text box above to see preview':text}`}</p>
    </div>
    </>
  )
}
Form.propTypes = {
    heading: PropTypes.string.isRequired
}
Form.defaultProps = {
    heading: 'Enter your text here'
}