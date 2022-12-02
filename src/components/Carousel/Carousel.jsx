import './Carousel.css'
import Carousele from 'react-bootstrap/Carousel';
import a1 from '../../assets/11.jpg'
import a2 from '../../assets/22.jpg'
import a3 from '../../assets/33.jpg'
import a4 from '../../assets/44.jpg'
import a5 from '../../assets/55.jpg'
import a6 from '../../assets/66.jpg'
import a7 from '../../assets/77.jpg'
import a8 from '../../assets/88.jpg'
import a9 from '../../assets/99.jpg'

//import translation hook
import { useTranslation } from 'react-i18next';
function Carousel() {
    const [t] = useTranslation()
    return (
        <div className="carousel">
            <Carousele>

                <Carousele.Item>
                    <img src={a1} alt="" />
                    <Carousele.Caption>
                        <h1>{t('1')}</h1>
                        <p>{t('11')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a2} alt="" />
                    <Carousele.Caption>
                        <h1>{t('2')}</h1>
                        <p>{t('22')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a3} alt="" />
                    <Carousele.Caption>
                        <h1>{t('3')}</h1>
                        <p>{t('33')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a4} alt="" />
                    <Carousele.Caption>
                        <h1>{t('4')}</h1>
                        <p>{t('44')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a5} alt="" />
                    <Carousele.Caption>
                        <h1>{t('5')}</h1>
                        <p>{t('55')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a6} alt="" />
                    <Carousele.Caption>
                        <h1>{t('6')}</h1>
                        <p>{t('66')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a7} alt="" />
                    <Carousele.Caption>
                        <h1>{t('7')}</h1>
                        <p>{t('77')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a8} alt="" />
                    <Carousele.Caption>
                        <h1>{t('8')}</h1>
                        <p>{t('88')}</p>
                    </Carousele.Caption>
                </Carousele.Item>

                <Carousele.Item>
                    <img src={a9} alt="" />
                    <Carousele.Caption>
                        <h1>{t('9')}</h1>
                        <p>{t('99')}</p>
                    </Carousele.Caption>
                </Carousele.Item>
            </Carousele>
        </div>
    )
}
export default Carousel