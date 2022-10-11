import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const toggleHandler = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(4 17 63)'
      showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
    }
  }
  const showAlert = (message, type)=>{
      setAlert({
        message : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  return (
   <Router>
   <NavBar title="Text Utils" mode={mode} toggleHandler={toggleHandler}/>
   <Alert alert={alert}/>
   <div className="container my-3">
      <Routes>
          <Route path="/about" element = {<About mode = {mode}/>}/>
          <Route path="/" element = { <Form heading="Enter you text here" mode ={mode} showAlert={showAlert}/>}/>
      </Routes>
   </div>
   </Router>
  );
}

export default App;
