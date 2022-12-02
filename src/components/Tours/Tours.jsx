//import css
import './Tours.css'

//import Shared tours
import Stour from './Stours/Stour'
//import private tours
import Ptour from './Ptours/Ptours'
//import Day trips 
import Dtrips from './Dtrips/Dtrips'
//import promo tours
import Promo from './Promo/Promo'


//react hook
import { useTranslation } from 'react-i18next';

//tours function component
let Tours = () => {
    const [t] = useTranslation()
    return (
        <div className="tours" id='tours'>
            <div className="containere">
                <h1 id='h1' className='heading'>Tours</h1>
                <div className='buttons'>
                    <button onClick={() => {
                        document.getElementsByClassName('c1')[0].style.display = 'grid';
                        document.querySelectorAll('.buttons button')[0].classList.add('active')
                        document.getElementsByClassName('c2')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[1].classList.remove('active')
                        document.getElementsByClassName('c3')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[2].classList.remove('active')
                        document.getElementsByClassName('c4')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[3].classList.remove('active')
                    }} className='active heading'>{t('S')}</button>
                    <button onClick={() => {
                        document.getElementsByClassName('c1')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[0].classList.remove('active')
                        document.getElementsByClassName('c2')[0].style.display = 'grid';
                        document.querySelectorAll('.buttons button')[1].classList.add('active')
                        document.getElementsByClassName('c3')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[2].classList.remove('active')
                        document.getElementsByClassName('c4')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[3].classList.remove('active')
                    }} className='heading'>{t('P')}</button>
                    <button onClick={() => {
                        document.getElementsByClassName('c1')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[0].classList.remove('active')
                        document.getElementsByClassName('c2')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[1].classList.remove('active')
                        document.getElementsByClassName('c3')[0].style.display = 'grid';
                        document.querySelectorAll('.buttons button')[2].classList.add('active')
                        document.getElementsByClassName('c4')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[3].classList.remove('active')
                    }} className='heading'>{t('D.T')}</button>
                    <button onClick={() => {
                        document.getElementsByClassName('c1')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[0].classList.remove('active')
                        document.getElementsByClassName('c2')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[1].classList.remove('active')
                        document.getElementsByClassName('c3')[0].style.display = 'none';
                        document.querySelectorAll('.buttons button')[2].classList.remove('active')
                        document.getElementsByClassName('c4')[0].style.display = 'grid';
                        document.querySelectorAll('.buttons button')[3].classList.add('active')
                    }} className='heading'>{t('PRO')}</button>
                </div>
                <div className="content">
                    <Stour />
                    <Ptour />
                    <Dtrips />
                    <Promo />
                </div>
            </div>
        </div>
    )
}
export default Tours
