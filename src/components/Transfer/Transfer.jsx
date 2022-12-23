//import css
import './Transfer.css'
//import pictures
import p1 from '../../assets/P4.webp'
import p2 from '../../assets/P6.webp'

//react hook
import { useTranslation } from 'react-i18next';

let TransferLink = ({ link, src, h1, price }) => {
    return (
        <a href={link}>
            <img src={src} alt="" />
            <h2>AirPort Transfer</h2>
            <h1>{h1}</h1>
            <span>{price}</span>
        </a>
    )
}
let Transfer = () => {
    const [t] = useTranslation()
    return (
        <div className="transfer" id='transfer'>
            <div className="containere">
                <h1>{t('Airport transfer')}</h1>

                <div className="buttonss">
                    <button className='active' onClick={() => {
                        document.querySelectorAll('.buttonss button')[0].classList.add('active')
                        document.querySelectorAll('.buttonss button')[1].classList.remove('active')
                        document.getElementsByClassName('in')[0].style.display = 'grid'
                        document.getElementsByClassName('out')[0].style.display = 'none'
                    }}>{t('in')}</button>
                    <button onClick={() => {
                        document.querySelectorAll('.buttonss button')[0].classList.remove('active')
                        document.querySelectorAll('.buttonss button')[1].classList.add('active')
                        document.getElementsByClassName('in')[0].style.display = 'none'
                        document.getElementsByClassName('out')[0].style.display = 'grid'
                    }}>{t('ou')}</button>
                </div>

                <div className="content">
                    <div className="in">
                        <TransferLink src={p1} h1={t('ati1')} price='22Dh' />
                        <TransferLink src={p1} h1={t('ati3')} price='19Dh' />
                        <TransferLink src={p1} h1={t('ati8')} price='16Dh' />
                        <TransferLink src={p1} h1={t('ati4')} price='19Dh' />
                        <TransferLink src={p1} h1={t('ati5')} price='16Dh' />
                        <TransferLink src={p1} h1={t('ati6')} price='15Dh' />
                        <TransferLink src={p1} h1={t('ati7')} price='18Dh' />
                        <TransferLink src={p1} h1={t('ati2')} price='20Dh' />
                        <TransferLink src={p1} h1={t('ati8')} price='16Dh' />
                    </div>

                    <div className="out">
                        <TransferLink src={p2} h1={t('ato1')} price='140Dh' />
                        <TransferLink src={p2} h1={t('ato3')} price='130Dh' />
                        <TransferLink src={p2} h1={t('ato2')} price='151Dh' />
                        <TransferLink src={p2} h1={t('ato7')} price='350Dh' />
                        <TransferLink src={p2} h1={t('ato5')} price='130Dh' />
                        <TransferLink src={p2} h1={t('ato6')} price='200Dh' />
                        <TransferLink src={p2} h1={t('ato4')} price='100Dh' />
                        <TransferLink src={p2} h1={t('ato7')} price='350Dh' />
                        <TransferLink src={p2} h1={t('ato4')} price='100Dh' />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Transfer