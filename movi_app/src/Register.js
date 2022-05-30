import {Link} from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import Button from './Button';

function Register(){
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="space" type="email" placeholder="Correo electronico"></Form.Control>
        
          <Form.Control className="space" type="password" placeholder="Crea tu contraseña"></Form.Control>
         
          <Form.Control className="space" type="text" placeholder="Celular"></Form.Control>
          </Form.Group>
          
  
          <Link to="/home"> 
          <Button Text="Crear cuenta" ></Button>
            {/* <button type="button" className='button'> Crear cuenta</button> */}
          </Link>

        </Form>
    )
}

export default Register;