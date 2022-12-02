//import css
import './Menu.css'
//import icons
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMap } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
//import logo
import Logo from '../../assets/6-removebg-preview.png'
//import translation hook
import { useTranslation } from 'react-i18next';

function Menu() {

    const [t, i18n] = useTranslation()
    return (
        <div className="menu">
            <i id='close2' onClick={() => {
                document.querySelector('.menu').style.transform = 'translate(-700px)'
                document.getElementById('open').style.display = 'block'
                document.getElementById('close').style.display = 'none'
            }}><CgClose /></i>
            <div className="logo-map">
                <a href=""><img src={Logo} /></a>
                <a href=""><FaMap /></a>
            </div>

            <div className="menu-links">
                <a href="">{t('Home')}  </a>
                <a href="#tours" onClick={() => {
                    document.getElementsByClassName('c1')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[0].classList.remove('active')
                    document.getElementsByClassName('c2')[0].style.display = 'grid';
                    document.querySelectorAll('.buttons button')[1].classList.add('active')
                    document.getElementsByClassName('c3')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[2].classList.remove('active')
                    document.getElementsByClassName('c4')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[3].classList.remove('active')
                }} >{t('Tours')}  </a>
                <a href="#tours" onClick={() => {
                    document.getElementsByClassName('c1')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[0].classList.remove('active')
                    document.getElementsByClassName('c2')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[1].classList.remove('active')
                    document.getElementsByClassName('c3')[0].style.display = 'grid';
                    document.querySelectorAll('.buttons button')[2].classList.add('active')
                    document.getElementsByClassName('c4')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[3].classList.remove('active')
                }}>{t('Day trips')}  </a>
                <a href="#tours" onClick={() => {
                    document.getElementsByClassName('c1')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[0].classList.remove('active')
                    document.getElementsByClassName('c2')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[1].classList.remove('active')
                    document.getElementsByClassName('c3')[0].style.display = 'none';
                    document.querySelectorAll('.buttons button')[2].classList.remove('active')
                    document.getElementsByClassName('c4')[0].style.display = 'grid';
                    document.querySelectorAll('.buttons button')[3].classList.add('active')
                }}>{t('Promo')}  </a>
                <a href="#package">{t('Packages')}  </a>
                <a href="#activitie">{t('Activities')}  </a>
                <a href="">{t('Airport transfer')}  </a>
                <a href="">{t('Car rental')}  </a>
                <a href="">{t('Contact')}  </a>
                <a href='#'><span>{t('group')}</span></a>
            </div>

            <div className="social">
                <a href='https://www.facebook.com/marrakeshtravelservices?_rdc=2&_rdr' target='_blank' rel='noreferrer'><GrFacebookOption /></a>
                <a href='https://twitter.com/MarrakeshTS' target='_blank' rel='noreferrer'><GrTwitter /></a>
                <form action="mailto:contact@marrakeshtravelservices.com">
                    <button type='submit'><MdEmail /></button>
                </form>
                <a href='https://api.whatsapp.com/send?phone=%20212667471403&text=Hello%20Marrakesh%20Travel%20Services' target='_blank' rel='noreferrer'><IoLogoWhatsapp /></a>
                <a href='https://www.instagram.com/marrakeshtravelservice' target='_blank' rel='noreferrer'><RiInstagramFill /></a>
            </div>

            <div className="lng">
                <p>
                    <span id='en' onClick={() => {
                        i18n.changeLanguage('en')
                        document.querySelector('#fr').style.opacity = 0.5
                        document.querySelector('#en').style.opacity = 1
                    }}>EN</span>
                    <span>-</span>
                    <span id='fr' onClick={() => {
                        i18n.changeLanguage('fr')
                        document.querySelector('#fr').style.opacity = 1
                        document.querySelector('#en').style.opacity = 0.5
                    }}>FR</span>
                </p>
            </div>
        </div>
    )
}
export default Menu