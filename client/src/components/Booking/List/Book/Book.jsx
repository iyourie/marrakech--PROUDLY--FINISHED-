//files
import './Book.css'
import SmallMap from './SmallMap/SmallMap';
import { Link } from 'react-router-dom';
//hooks
import { useTranslation } from "react-i18next"
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
//icons
import { BiLockAlt } from "react-icons/bi";
import { HiArrowNarrowLeft } from "react-icons/hi";
//pic
import p from '../../../../assets/102.webp'

let Left = () => {
    const [t] = useTranslation()
    const [isFocused, setIsFocused] = useState(false);
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const location = useLocation();
    return (
        <div className="left">
            <div className="top">
                <h2>1. {t('personal')} </h2>
                <span>{'>'}</span>
                <h2>2. {t('Payment')}</h2>
            </div>
            <div className="middle">
                <h1>{t('Enter your personal details')}</h1>
                <div>
                    <i><BiLockAlt /></i>
                    <h2>{t('Checkout is fast and secure')}</h2>
                </div>
                <div className="form">
                    <div>
                        <span style={{ color: isFocused ? '#21b939' : 'rgb(199 199 199)' }}>{t('full name')}</span>
                        <input type="text" onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)} />
                    </div>
                    <div>
                        <span style={{ color: isFocused1 ? '#21b939' : 'rgb(199 199 199)' }}>email</span>
                        <input type="email" onFocus={() => setIsFocused1(true)}
                            onBlur={() => setIsFocused1(false)} />
                    </div>
                    <div>
                        <span style={{ color: isFocused2 ? '#21b939' : 'rgb(199 199 199)' }}>Phone Number</span>
                        <input type="number" onFocus={() => setIsFocused2(true)}
                            onBlur={() => setIsFocused2(false)} />
                    </div>
                </div>
            </div>
            <hr className='middle-bottom' />
            <div className="bottom">
                <h1>{t('w')}</h1>
                <div className="moreInfo">
                    <img src={p} alt="" />
                    <div>
                        <h2>{t('From')}</h2>
                        <span>{location.state}</span>
                    </div>
                </div>
                <h3>{t('Select your pickup location')}</h3>
                <h3 className='h32'>{t('your pickup location')}</h3>
                <SmallMap />
                <div className="appear">
                    <span className='truth'></span>
                    <button onClick={() => {
                        document.querySelector('.SmallMap input').value = document.querySelector('.appear .truth').innerHTML
                        document.querySelectorAll('.bottom button')[1].style.display = 'block'
                        document.querySelector('.bottom .ooo').style.display = 'none'
                        document.querySelector('.bottom .appear').style.display = 'none'
                        document.querySelector('.SmallMap').style.display = 'block'
                        document.querySelectorAll('.bottom h3')[0].style.display = 'block'
                        document.querySelectorAll('.bottom h3')[1].style.display = 'none'
                        document.querySelector('.book .nxt-a').style.marginTop = '130px'
                    }}>edit</button>
                </div>
                <span className='ooo'>{t('oo')}</span>
                <button onClick={() => {
                    document.querySelector('.appear .truth').innerHTML = document.querySelector('.SmallMap input').value
                    document.querySelectorAll('.bottom button')[1].style.display = 'none'
                    document.querySelector('.bottom .ooo').style.display = 'block'
                    document.querySelector('.bottom .appear').style.display = 'flex'
                    document.querySelector('.SmallMap').style.display = 'none'
                    document.querySelectorAll('.bottom h3')[0].style.display = 'none'
                    document.querySelectorAll('.bottom h3')[1].style.display = 'block'
                    document.querySelector('.book .nxt-a').style.marginTop = '30px'
                }} className='no'>{t('confirm pickup location')}</button>
            </div>
            <Link to='/Payment' className='nxt-a'>{t('next: payment')}</Link>
        </div>
    )
}

let Book = () => {
    return (
        <div className="book">
            <div className="containere">
                <Link to="/List1"><i className='Arr1'><HiArrowNarrowLeft /></i></Link>
                <hr className='back' />
                <div className="allBook">
                    <Left />
                </div>
            </div>
        </div >
    )
}
export default Book
