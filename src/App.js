import './App.css';
import NavBar from './Components/NavBar';
import Form from './Components/Form';
import { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const toggleHandler = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#2f4a5a'
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
   <>
   <NavBar title="Text Utils" mode={mode} toggleHandler={toggleHandler}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Form heading="Enter you text here" mode ={mode} showAlert={showAlert}/>
   {/* <About/> */}
   </div>
   </>
  );
}

export default App;
