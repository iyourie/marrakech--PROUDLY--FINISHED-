//import css
import './Blog.css'
//import images
import one from '../../assets/3-Days-Marrakech-Desert-Tour-to-Merzouga-081019.jpg';
import two from '../../assets/Souks-Marrakech-16-085647.jpg';
import three from '../../assets/Full-day-Trip-Ouzoud-waterfalls-from-Marrakech-083303.jpg'

//react hook    
import { useTranslation } from 'react-i18next';

let Blog = () => {
    const [t] = useTranslation()

    return (
        <div className="blog" id='blog'>
            <div className="containere">
                <h1>Blog</h1>
                <h5>{t('blog')}</h5>
                <div className="B-content">
                    <img src={one} alt="" />
                    <img src={three} alt="" />
                    <img src={two} alt="" />
                    <h2 className='one'>{t('blog1')}</h2>
                    <h2 className='two'>{t('blog2')}</h2>
                    <h2 className='three'>{t('blog3')}</h2>
                </div>
            </div>
        </div>
    )
}
export default Blog