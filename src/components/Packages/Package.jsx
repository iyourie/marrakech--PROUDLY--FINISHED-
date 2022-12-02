//import css
import './Package.css'
//import images
import Pa1 from '../../assets/5.webp'
import Pa2 from '../../assets/D1.webp'
import Pa3 from '../../assets/D2.webp'
import Pa4 from '../../assets/D3.webp'
import Pa5 from '../../assets/D4.webp'
import Pa6 from '../../assets/P1.webp'
import Pa7 from '../../assets/P2.webp'
import Pa8 from '../../assets/P3.webp'
import Pa9 from '../../assets/P4.webp'
import Pa10 from '../../assets/PROMO2.webp'
import Pa11 from '../../assets/P6.webp'

//import stars icon
import { AiTwotoneStar } from "react-icons/ai";

//react hook
import { useTranslation } from 'react-i18next';

//import Link function
import Link from '../Tours/Link/Link'


let Package = () => {
    const [t] = useTranslation()
    return (
        <div className="package" id='package'>
            <div className="containere">
                <h1 id='h1' className='heading'>Packages</h1>
                <div className="c0">
                    <Link src={Pa2} h2={t('shared')} h1={t('5s')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2640 reviews)" price1={t('sharedP5')} />
                    <Link src={Pa9} h2={t('DT')} h1={t('1D')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1680 reviews)" price1={t('Day1')} />
                    <Link src={Pa11} h2={t('DT')} h1={t('2D')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2000 reviews)" price1={t('Day2')} />
                    <Link src={Pa8} h2={t('Private')} h1={t('3p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1670 reviews)" price1={t('PrivateP3')} />
                    <Link src={Pa6} h2={t('Private')} h1={t('1p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(4000 reviews)" price1={t('PrivateP1')} />
                    <Link src={Pa7} h2={t('Private')} h1={t('2p')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2350 reviews)" price1={t('PrivateP2')} />
                    <Link src={Pa5} h2={t('Private')} h1={t('5p')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1205 reviews)" price1={t('PrivateP5')} />
                    <Link src={Pa1} h2={t('shared')} h1={t('3s')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(6000 reviews)" price1={t('sharedP3')} />
                    <Link src={Pa3} h2={t('shared')} h1={t('1s')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1600 reviews)" price1={t('sharedP1')} />
                    <Link src={Pa4} h2={t('shared')} h1={t('2s')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1650 reviews)" price1={t('sharedP2')} />
                    <Link src={Pa10} h2={t('DT')} h1={t('3D')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1280 reviews)" price1={t('Day3')} />
                </div>
            </div>
        </div>
    )
}
export default Package