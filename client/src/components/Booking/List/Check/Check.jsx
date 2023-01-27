//import files
import './Check.css'
import Calendar from './Calendar/Calendar'
// import react hooks 
import { useTranslation } from "react-i18next"
import { useState } from 'react'

// import icons 
import { HiOutlineUsers, HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { GoTriangleDown } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";



// the langaugecom div 
let LanguageCom = () => {
    return (
        <div className="language-com">
            <div onClick={() => {
                document.querySelector('.language h3').innerHTML = "english"
            }}>
                <input type="radio" id="radio1" name="radioGroup" value="option1" />
                <label htmlFor="radio1">english</label><br />
            </div>
            <div onClick={() => {
                document.querySelector('.language h3').innerHTML = "french"
            }}>
                <input type="radio" id="radio2" name="radioGroup" value="option2" />
                <label htmlFor="radio2">french</label><br />
            </div>
            <div onClick={() => {
                document.querySelector('.language h3').innerHTML = "spanish"
            }}>
                <input type="radio" id="radio3" name="radioGroup" value="option3" />
                <label htmlFor="radio3">spanish</label><br />
            </div>
            <div onClick={() => {
                document.querySelector('.language h3').innerHTML = "arabic"
            }}>
                <input type="radio" id="radio4" name="radioGroup" value="option4" />
                <label htmlFor="radio4">arabic</label>
            </div>
        </div>
    )
}



let Check = () => {
    let [num, setNum] = useState(0)
    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    const handleClick = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };
    const handleClick1 = () => {
        if (num1 > 0) {
            setNum1(num1 - 1);
        }
    };
    const handleClick2 = () => {
        if (num2 > 0) {
            setNum2(num2 - 1);
        }
    };
    const [t] = useTranslation()


    return (
        <div className="Check" id="Check">
            <h1 className="title">{t('Check')}</h1>
            <div className="every">

                <div className="partici" onClick={() => {
                    document.querySelector('.partici-div').classList.toggle('none-flex')
                    document.querySelector('.triangle').classList.toggle('rotate')
                }}>
                    <HiOutlineUsers />
                    <h3>{t('adult')} x {num},{t('Children')}..</h3>
                    <GoTriangleDown className="triangle" />
                </div>
                <div className="partici-div">
                    <div className="adult">
                        <div>
                            <h1>{t('adult')}</h1>
                            <span>{t('(Age 16-99)')}</span>
                        </div>
                        <div className="number">
                            <HiOutlineMinusCircle onClick={handleClick} disabled={num <= 0} />
                            <div><span>{num}</span></div>
                            < HiOutlinePlusCircle onClick={() => {
                                setNum(num + 1)
                                document.querySelector('.partici h3').style.display = 'block'
                            }} />
                        </div>
                    </div>
                    <div className="children">
                        <div>
                            <h1>{t('Children')}</h1>
                            <span>{t('(Age 6-15)')}</span>
                        </div>
                        <div className="number">
                            <HiOutlineMinusCircle onClick={handleClick1} disabled={num1 <= 0} />
                            <div><span>{num1}</span></div>
                            < HiOutlinePlusCircle onClick={() => {
                                setNum1(num1 + 1)
                                document.querySelector('.partici h3').style.display = 'block'
                            }
                            } />
                        </div>
                    </div>
                    <div className="baby">
                        <div>
                            <h1>{t('Infant')}</h1>
                            <span>{t('(Age 5 and younger)')}</span>
                        </div>
                        <div className="number">
                            <HiOutlineMinusCircle onClick={handleClick2} disabled={num2 <= 0} />
                            <div><span>{num2}</span></div>
                            < HiOutlinePlusCircle onClick={() => {
                                setNum2(num2 + 1)
                                document.querySelector('.partici h3').style.display = 'block'
                            }
                            } />
                        </div>
                    </div>
                </div>


                <div className="date" onClick={() => {
                    document.querySelector('.calendar').classList.toggle('flex')
                    document.querySelector('.triangle2').classList.toggle('rotate')
                }}>
                    <BiCalendar />
                    <h3>{ }</h3>
                    <GoTriangleDown className="triangle2" />
                </div>
                <Calendar />


                <div className="language" onClick={() => {
                    document.querySelector('.language-com').classList.toggle('none')
                    document.querySelector('.triangle3').classList.toggle('rotate')
                }}>
                    <GrLanguage />
                    <h3>{ }</h3>
                    <GoTriangleDown className="triangle3" />
                </div>
                <LanguageCom />

                <button className="checking-btn" onClick={() => {
                    if (document.querySelector('.partici h3').innerHTML === 'adult x 0,Children..') {
                        document.querySelector('.partici-div').classList.add('none-flex')
                    } else if (document.querySelector('.date h3').innerHTML === '') {
                        document.querySelector('.calendar').classList.add('flex')
                    } else if (document.querySelector('.language h3').innerHTML === '') {
                        document.querySelector('.language-com').classList.add('none')
                    } else {
                        document.querySelector('.Checked').style.display = 'block'
                        document.querySelector('.Checked .left h3').innerHTML = 'Language: ' + document.querySelector('.language h3').innerHTML;
                        document.querySelector('.Checked .right h1').innerHTML = num * 2500 + num1 * 2000 + num2 * 0 + ' dh'

                        document.querySelector('.Checked .bottom .right-little1 h1').innerHTML = `Adult ${num} × 2500 dh`
                        document.querySelector('.Checked .bottom .right-little1 span').innerHTML = `${num * 2500} dh`

                        document.querySelector('.Checked .bottom .right-little2 h1').innerHTML = `Children ${num1} × 2000 dh`
                        document.querySelector('.Checked .bottom .right-little2 span').innerHTML = `${num1 * 2000} dh`

                        document.querySelector('.Checked .bottom .right-little3 h1').innerHTML = `Infant ${num2} × 0 dh`
                        document.querySelector('.Checked .bottom .right-little3 span').innerHTML = `${num2 * 0} dh`
                    }
                }}>check</button>
            </div>
        </div>
    )
}
export default Check
