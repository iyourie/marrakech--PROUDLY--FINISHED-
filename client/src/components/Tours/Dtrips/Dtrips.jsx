//import css
import '../Dtrips/Dtrips.css'

//import images
import D1 from '../../../assets/D1.webp'
import D2 from '../../../assets/D2.webp'
import D3 from '../../../assets/D3.webp'
import D4 from '../../../assets/D4.webp'

//import stars icon
import { AiTwotoneStar } from "react-icons/ai";

//react hook
import { useTranslation } from 'react-i18next';

//import Link function
import Link from '../Link/Link'

let Dtrips = () => {
    const [t] = useTranslation()
    return (
        <div className="c3">
            <Link id="13" src={D1} h2={t('DT')} h1={t('1p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2000 reviews)" price1={t('PrivateP1')} />
            <Link id="14" src={D2} h2={t('DT')} h1={t('2p')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(250 reviews)" price1={t('PrivateP2')} />
            <Link id="15" src={D3} h2={t('DT')} h1={t('3p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(16000 reviews)" price1={t('PrivateP3')} /> 
            <Link id="16" src={D4} h2={t('DT')} h1={t('4p')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(300 reviews)" price1={t('PrivateP4')} />
            <Link id="17" src={D2} h2={t('DT')} h1={t('2p')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(250 reviews)" price1={t('PrivateP2')} />
            <Link id="18" src={D1} h2={t('DT')} h1={t('1p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2000 reviews)" price1={t('PrivateP1')} />
        </div>
    )
}
export default Dtrips