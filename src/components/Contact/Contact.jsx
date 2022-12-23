import './Contact.css'
//import icons
import { GiPositionMarker } from "react-icons/gi";
import { BsFillPhoneFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { FaFax } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

//react hook    
import { useTranslation } from 'react-i18next';

let Contact = () => {

    const [t] = useTranslation()

    return (
        <div className="contact" id='contact'>
            <div className="containere">
                <h1 className='k0'>{t('Contact')}</h1>

                <div className="all">

                    <div className="first">
                        <h2>Contact us</h2>
                        <input type="text" placeholder='name' />
                        <input type="email" placeholder='email' />
                        <input type="text" placeholder='subject' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='message'></textarea>
                        <input type="submit" value="send message" className='submit' />
                    </div>

                    <div className="second">
                        <h2>Contact informations</h2>

                        <div className="o1">
                            <div className='icon'>
                                <i><GiPositionMarker /></i>
                            </div>
                            <p>ADDRESS: Rue Bani Marine, Appt N°5, 2ème étage, medina, Marrakech - Morocco</p>
                        </div>

                        <div className="o2">
                            <div className='icon'>
                                <i> <BsFillPhoneFill /></i>
                            </div>
                            <p>GSM: +212 (0) 661-044-503</p>
                        </div>

                        <div className="o3">
                            <div className='icon'>
                                <i> < ImPhone /></i>
                            </div>
                            <p>FIXE: +212 (0) 524-375-251</p>
                        </div>

                        <div className="o4">
                            <div className='icon'>
                                <i> <FaFax /></i>
                            </div>
                            <p>FAX: +212 (0) 524-375-263</p>
                        </div>

                        <div className="o5">
                            <div className='icon'>
                                <i> < IoLogoWhatsapp /></i>
                            </div>
                            <p>WHATSAPP: +212 (0) 661-044-503</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Contact