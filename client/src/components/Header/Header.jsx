//import css
import './Header.css'
//menu icons
import { CgMenu, CgClose } from "react-icons/cg";
//import logo
import Logo from '../../assets/Capture-removebg-preview (1).png'
//import menu
import Menu from '../menu/Menu'

function Header() {



    return (
        <header id='header'>
            <Menu />
            <div className="containere">
                <nav>
                    <div className="logo">
                        <a href=""><img src={Logo} /></a>
                    </div>
                    <div className="map">
                        <i id='open' onClick={() => {
                            document.querySelector('.menu').style.transform = 'translate(0px)'
                            setTimeout(() => {
                                document.getElementById('open').style.display = 'none'
                                document.getElementById('close').style.display = 'block'
                            }, 200);
                        }}><CgMenu /></i>
                        <i id='close' onClick={() => {
                            document.querySelector('.menu').style.transform = 'translate(-700px)'
                            setTimeout(() => {
                                document.getElementById('open').style.display = 'block'
                                document.getElementById('close').style.display = 'none'
                            }, 200);
                        }}><CgClose /></i>
                    </div>
                </nav>
            </div>
        </header >
    )
}
export default Header