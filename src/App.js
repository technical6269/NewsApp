
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Alert from './component/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
 const[alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
  setAlert({
      msg: message,
      type: type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 1500)
 }
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor= '#042743';
      document.title="textutils dark mode";
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //     document.title="Textutils is amazing";
      //   }, 2000);
      //    setInterval(() => {
      //     document.title="Install textutils now ";
      //   }, 1500);
    }
    else {
      setMode('light')
       document.body.style.backgroundColor= 'white';
        document.title="textutils light mode";
        showAlert("Light mode has been enabled", "success");
    }
  }
  return (
     <>
     <Router>
 <Navbar tittle= "Textutils" aboutText= "About" mode={mode} toggleMode={toggleMode}/> 
 <Alert alert={alert}/>
  <div className="container my-3">
<Routes>
<Route exact path="/about"
    element={<About/>} />
<Route path="/"  
    element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> } />
  
 </Routes> 
  </div>
   </Router>
   </>
  );
}

export default App;