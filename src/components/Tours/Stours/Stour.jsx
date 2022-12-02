//import css
import '../Stours/Stour.css'

//import images
import S1 from '../../../assets/1.webp'
import S2 from '../../../assets/2.webp'
import S3 from '../../../assets/3.webp'
import S4 from '../../../assets/4.webp'
import S5 from '../../../assets/5.webp'

//import stars icon
import { AiTwotoneStar } from "react-icons/ai";

//react hook
import { useTranslation } from 'react-i18next';

//import Link function
import Link from '../Link/Link'

let Stour = () => {
    const [t] = useTranslation()
    return (
        <div className="c1">
            <Link src={S1} h2={t('shared')} h1={t('1s')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(4000 reviews)" price1={t('sharedP1')} />
            <Link src={S2} h2={t('shared')} h1={t('2s')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2350 reviews)" price1={t('sharedP2')} />
            <Link src={S3} h2={t('shared')} h1={t('3s')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1600 reviews)" price1={t('sharedP3')} />
            <Link src={S4} h2={t('shared')} h1={t('4s')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1650 reviews)" price1={t('sharedP4')} />
            <Link src={S5} h2={t('shared')} h1={t('5s')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(1200 reviews)" price1={t('sharedP5')} />
        </div>
    )
}
export default Stour