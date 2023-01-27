//import css
import '../Ptours/Ptours.css'

//import images
import P1 from '../../../assets/P1.webp'
import P2 from '../../../assets/P2.webp'
import P3 from '../../../assets/P3.webp'
import P4 from '../../../assets/P4.webp'
import P5 from '../../../assets/P5.webp'
import P6 from '../../../assets/P6.webp'

//import stars icon
import { AiTwotoneStar } from "react-icons/ai";

//react hook
import { useTranslation } from 'react-i18next';

//import Link function
import Link from '../Link/Link'

let Stour = () => {
    const [t] = useTranslation()
    return (
        <div className="c2">
            <Link id="7" src={P4} h2={t('Private')} h1={t('4p')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(300 reviews)" price1={t('PrivateP4')} />
            <Link id="8" src={P6} h2={t('Private')} h1={t('6p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(20000 reviews)" price1={t('PrivateP5')} />
            <Link id="9" src={P1} h2={t('Private')} h1={t('1p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2000 reviews)" price1={t('PrivateP1')} />
            <Link id="10" src={P2} h2={t('Private')} h1={t('2p')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(250 reviews)" price1={t('PrivateP2')} />
            <Link id="11" src={P3} h2={t('Private')} h1={t('3p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(16000 reviews)" price1={t('PrivateP3')} />
            <Link id="12" src={P5} h2={t('Private')} h1={t('5p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(20 reviews)" price1={t('PrivateP5')} />
        </div>
    )
}
export default Stour