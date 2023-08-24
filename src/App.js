//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] =useState('light'); // wheather dark mode is enable or not.
  const [alert, setAlert] = useState(null);



  const showAlert =(message, type) =>{
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    }, 1500)

  }

  const toggleMode =() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#103874';
      showAlert ("Dark mode is enabled.","success");
      document.title ="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert ("Light mode is enabled.","success");
      document.title ="TextUtils - Light Mode";
    }

  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" Mode={mode} toggleMode={toggleMode} />      
      <div className='container my-3'>   
          <Alert alert={alert}/>  
          <Routes>
                <Route exact path="/about" element={<About Mode={mode}/>}/>
                <Route exact path="/" element={
                  <TextForm showAlert={showAlert} heading="Enter the text to analyse below" Mode={mode} /> 
                  }/>                       
            </Routes>
      </div>
    </Router>                

    </>
  );
}

export default App;
