//import css
import '../Promo/Promo.css'

//import images
import PROMO1 from '../../../assets/PROMO1.webp'
import PROMO2 from '../../../assets/PROMO2.webp'


//import stars icon
import { AiTwotoneStar } from "react-icons/ai";

//react hook
import { useTranslation } from 'react-i18next';

//import Link function
import Link from '../Link/Link'

let Promo = () => {
    const [t] = useTranslation()
    return (
        <div className="c4">
            <Link src={PROMO2} h2={t('PR')} h1={t('Promo2')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(250 reviews)" price1={t('pr2')} />
            <Link src={PROMO1} h2={t('PR')} h1={t('Promo1')} h3={t('p3')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(2000 reviews)" price1={t('pr1')} />
            <Link src={PROMO2} h2={t('PR')} h1={t('Promo2')} h3={t('p2')} ratingS={<><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></>} ratingR='5.0' ratingN="(250 reviews)" price1={t('pr2')} />
        </div>
    )
}
export default Promo