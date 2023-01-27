import { useTranslation } from "react-i18next";
import { MdOutlineFreeCancellation } from "react-icons/md";

import { useNavigate } from 'react-router-dom';

import './Checked.css'
import '../Check/Check'

let Checked = () => {
    const navigate = useNavigate();
    const toComponentB = () => {
        navigate('/book', { state: document.querySelector('.date h3').innerHTML });
    }
    const [t] = useTranslation()

    return (
        < div className="Checked" >
            <div className="top">
                <div className="left">
                    <h1>{t('1s')}</h1>
                    <h3>{ }</h3>
                </div>
                <div className="right">
                    <span>{t('Total price')}</span>
                    <h1>{ }</h1>
                    <h5>all taxes and fees included</h5>
                </div>
            </div>
            <hr />
            <div className="top2">
                <p>{t('o')}</p>
            </div>
            <hr />
            <div className="bottom">
                <div className="left">
                    <span>{t('starting time')}</span>
                    <h2>7:20 am</h2>
                </div>
                <div className="right">
                    <h1 className="ss-ss">{t('Price breakdown')}</h1>
                    <hr />
                    <div className="right-little1">
                        <h1>{ }</h1>
                        <span></span>
                    </div>
                    <hr />
                    <div className="right-little2">
                        <h1>{ }</h1>
                        <span></span>
                    </div>
                    <hr />
                    <div className="right-little3">
                        <h1>{ }</h1>
                        <span></span>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="bottom2">
                <div className="left">
                    <i><MdOutlineFreeCancellation /></i>
                    <h2>Cancel before 7:20 AM on January 10 for a full refund</h2>
                </div>
                <div className="right">
                    <a onClick={() => toComponentB()}>book</a>
                </div>
            </div>
        </div >
    )
}
export default Checked
