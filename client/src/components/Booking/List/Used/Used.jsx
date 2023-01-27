//import react hooks
import { useTranslation } from "react-i18next"

//import files
import Check from '../Check/Check'
import MyMapp from '../map/Map'
import Checking from '../CheckedPromp/Checked'

let Used = ({ span, Big_title, rate, rev, src1, src2, src3, src4, small_title, p1, p2, p3, p4, p5, p6, h21, h22, h23, h24, h25, h26, itiTITLE, itiLINE, itiINFOTITLE1, itiINFOTITLE2, itiINFOTITLE3, itiINFO1, itiINFO2, itiINFO3, li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13, li14, li15, li16, li17, li18, li19, li20, li21, li22, li23, li24, li25, li26, li27 }) => {
    const [t] = useTranslation()
    return (
        <>
            <span className='span1'>{span}</span>``
            <h1 className="Bh1">{Big_title}</h1>
            <div className="review">
                <span>{rate}</span>
                <span>{rev}</span>
            </div>
            <div className="pics">
                <img src={src1} alt="" />
                <img src={src2} alt="" />
                <img src={src3} alt="" />
                <img src={src4} alt="" />
            </div>
            <div className="alll">
                <h3 className='smallT'>{small_title}</h3>
                <div className="price">
                    <a href="#Check">{t('book')}</a>
                    <a href="#contact" onClick={() => {
                        document.getElementsByClassName('List1')[0].style.inset = '-9999px'
                        document.body.style.overflow = 'auto'
                        document.querySelector('header').style.display = 'block'
                        document.querySelector('.tours').style.paddingTop = '160px'
                    }}>{t('questino')}</a>
                    <div>
                        <h2>{t('bookP')}</h2>
                        <h5>+212(0)661-044-503</h5>
                        <h5>+212(0)667-471-403</h5>
                    </div>
                </div>
            </div>
            <hr />
            <div className="info">
                <h1>{t('AboutAct')}</h1>
                <h2>{h21}</h2>
                <p>{p1}</p>
                <h2>{h22}</h2>
                <p>{p2}</p>
                <h2>{h23}</h2>
                <p>{p3}</p>
                <h2>{h24}</h2>
                <p>{p4}</p>
                <h2>{h25}</h2>
                <p>{p5}</p>
                <h2>{h26}</h2>
                <p>{p6}</p>
            </div>
            <hr />
            <Check />
            <Checking />
            <hr />
            <div className="itinerary">
                <h1>{itiTITLE}</h1>
                <h3>{itiLINE}</h3>
                <div className="infor">
                    <h2>{itiINFOTITLE1}</h2>
                    <p>{itiINFO1}</p>
                    <h2>{itiINFOTITLE2}</h2>
                    <p>{itiINFO2}</p>
                    <h2>{itiINFOTITLE3}</h2>
                    <p>{itiINFO3}</p>
                </div>
            </div>
            <hr />
            < MyMapp />
            <hr />
            <div className="include">
                <h1>{t('info')}</h1>
                <h1 className='leader'>{t('Included')}</h1>
                <ul className="yes">
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                    <li>{li4}</li>
                    <li>{li5}</li>
                    <li>{li6}</li>
                    <li>{li7}</li>
                </ul>
                <h1 className='leader'>{t('Not Included')}</h1>
                <ul className="no">
                    <li>{li11}</li>
                    <li>{li12}</li>
                    <li>{li13}</li>
                </ul>
            </div>
            <hr />
            <div className="bring">
                <div className="tobring">
                    <h1 className='leader'>{t('br')}</h1>
                    <ul>
                        <li>{li21}</li>
                        <li>{li22}</li>
                        <li>{li23}</li>
                        <li>{li24}</li>
                        <li>{li25}</li>
                    </ul>
                </div>
                <div className="Nallow">
                    <h1 className='leader'>{t('allw')}</h1>
                    <ul>
                        <li>{li26}</li>
                        <li>{li27}</li>
                    </ul>
                </div>
            </div>
        </>
    )

}
export default Used
