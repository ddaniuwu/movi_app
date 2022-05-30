import Title from './Header';
import Movi from './MoviHome'
import './welcome.css'

function Welcome(){
    return(
    <div id="back">
       <Title/>
        <div  className="wrapper">
            <div id="separate">
                <Movi/>
            </div>
        </div>

    </div>
    )
}
export default Welcome;