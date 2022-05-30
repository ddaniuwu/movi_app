import './App.css';
import Form from 'react-bootstrap/Form';
import {BrowserRouter , Route, Routes,  NavLink} from 'react-router-dom'; 


import Title from './Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register'

function App() {
  return (
    <div className="App">


      <div className='main'>
        <div className='one'>
        <Title></Title>
        
      <h1>Crear cuenta</h1>
      <p>Te damos la bienvenida a la forma màs fàcil y accesible de estrenar un auto</p>

      <Register></Register>

    
        </div>

        <div className='two'>
          <div className='circle'>
          <img src="https://www.gpas-cache.ford.com/guid/40776016-98e1-3f61-8074-8e428764b29d.png">
          </img>
          </div>
          <h5>La forma más fácil de estrenar auto</h5>
          <p>Sin pago y con opción a compra</p>
        </div>
      </div>
    </div>
  );
}

export default App;
