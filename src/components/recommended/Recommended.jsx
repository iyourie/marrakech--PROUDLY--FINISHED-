//import css
import './Recommended.css'
//import images
import one from '../../assets/1-removebg-preview.png'
import two from '../../assets/2-removebg-preview.png'
import three from '../../assets/3-removebg-preview.png'
import four from '../../assets/4-removebg-preview.png'
import five from '../../assets/Sans-titre-1-removebg-preview.png'
import six from '../../assets/6.png'

//react hook    
import { useTranslation } from 'react-i18next';


let Recommended = () => {
    const [t] = useTranslation()
    return (
        <div className="recommended">
            <div className="containere">
                <h1>{t('reco')}</h1>
                <div className="companies">
                    <a href="https://www.tripadvisor.com/Attraction_Review-g293734-d8514036-Reviews-Marrakesh_Travel_Services-Marrakech_Marrakech_Safi.html" target='_blank' rel='noreferrer'><img src={one} alt="" /></a>
                    <a href="#"><img src={five} alt="" /></a>
                    <a href="https://riad-azra-marrakech.com/" target='_blank' rel='noreferrer'><img src={six} alt="" /></a>
                </div>
                <div className="companies">
                    <a href="https://www.getyourguide.com/marrakesh-travel-services-s15823/" target='_blank' rel='noreferrer'><img src={two} alt="" /></a>
                    <a href=""><img src={four} alt="" /></a>
                    <a href=""> <img src={three} alt="" /></a>
                </div>
            </div>
        </div>
    )
}
export default Recommended