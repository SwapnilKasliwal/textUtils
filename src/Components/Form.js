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
        var text = document.getElementById('my-box')
        text.select()
        navigator.clipboard.writeText(text.value)
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
    const noOfWords = ()=>{
        let arr = text.split(' ')
        if(arr.includes("")){
            return arr.length - 1
        }
        return arr.length
    }
  return (
    <>
    <div className="container" style={props.mode==='light'?{
        color:'black', backgroundColor: 'white'}:{color:'white', backgroundColor: '#2f4a5a'}}>
    <h1>
        {props.heading}
    </h1>
    <div className="mb-3">
          <textarea className="form-control my-3" value={text} onChange={onChaneListener} id="my-box" rows="8" style={props.mode==='light'?{
        color:'black', backgroundColor: 'white'}:{color:'white', backgroundColor: 'grey'}}></textarea>
          <button className="btn btn-primary mx-1" onClick={convertToUpperListener}>Convert to upperCase</button>
          <button className="btn btn-primary mx-1" onClick={convertToLowerListener}>Convert to lowerCase</button>
          <button className="btn btn-primary mx-1" onClick={clearTextListener}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={copyHandler}>Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
    <div className="container" style={props.mode==='light'?{
        color:'black', backgroundColor: 'white'}:{color:'white', backgroundColor: '#2f4a5a'}}>
        <h2>Your text Summary</h2>
        <p>{noOfWords()} words and {text.length} characters</p>
        <p>{0.08 * noOfWords()} minutes of read</p>
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