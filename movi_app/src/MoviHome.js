import { Link } from "react-router-dom";
import Button from "./Button"
import './welcome.css'
import User from './images/user.png' 
import Card from './images/card.png' 
import comprobate from './images/comprobate.png' 


function Movi(){
    return(
        <div >
            <h1>¡Bienvenido a Movi!</h1>
            <div className="container">
                <div className="firstIcon">
                <img src={User} align="left" alt="User icon"/><p>Validaremos tu identidad</p>
                </div>

                <div className="secondIcon">
                <img src={Card} align="left" alt="card icon"/><p>Consultaremos tu burò de crèdito</p>
                </div>
                
                <div className="thirdIcon">
                <img src={comprobate} align="left" alt="financies icon"/><p>Comprobaremos tus ingresos</p>
                </div>
            </div>
                <h5>Estás a tres sencillos pasos de estrenar el auto de tus sueños</h5>

             <Button Text="Continuar"></Button>

             <Link to={"/"}>En otro momento</Link>
        </div>
    )
}
export default Movi;
