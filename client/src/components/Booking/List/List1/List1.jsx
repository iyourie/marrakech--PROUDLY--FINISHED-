import Used from "../Used/Used"
import './List1.css'
import { Link } from "react-router-dom"
//import images
import a1 from '../../../../assets/a1.jpg'
import a2 from '../../../../assets/a2.jpg'
import a3 from '../../../../assets/a3.jpg'
import a4 from '../../../../assets/a4.jpg'

//react hook    
import { useTranslation } from 'react-i18next';

//icon
import { GrClose } from "react-icons/gr";

let List1 = () => {
    const [t] = useTranslation()
    return (
        <div className="List1" id="List1">
            <Link to='/'><i className="closeIt"><GrClose /></i></Link>
            <Used span={t("shared")} Big_title={t('1s')} rate="4.6 / 5" rev="1178 reviews" src1={a1} src2={a2} src3={a3} src4={a4} small_title={t('small_title')} h21={t('h21')} p1={t('p1')} h22={t('h22')} p2={t('pp2')} h23={t('h23')} p3={t('pp3')} h24={t('h24')} p4={t('p4')} h25={t('h25')} p5={t('p5')} h26={t('h26')} p6={t('p6')} itiTITLE={t('itiTITLE')} itiLINE={t('itiLINE')} itiINFOTITLE1={t('itiINFOTITLE1')} itiINFO1={t('itiINFO1')} itiINFOTITLE2={t('itiINFOTITLE2')} itiINFO2={t('itiINFO2')} itiINFOTITLE3={t('itiINFOTITLE3')} itiINFO3={t('itiINFO3')} li1={t('li1')} li2={t('li2')} li3={t('li3')} li4={t('li4')} li5={t('li5')} li6={t('li6')} li7={t('li7')} li11={t('li11')} li12={t('li12')} li13={t('li13')} li21={t('li21')} li22={t('li22')} li23={t('li23')} li24={t('li24')} li25={t('li25')} li26={t('li26')} li27={t('li27')} />
        </div>
    )
}
export default List1
