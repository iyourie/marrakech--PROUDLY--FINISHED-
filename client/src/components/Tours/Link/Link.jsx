import { useState } from 'react'
import { Link } from 'react-router-dom'


let LinK = ({ src, h2, h1, h3, ratingS, ratingR, ratingN, price1, id }) => {
    let [yes, setYes] = useState(false)

    if (yes === true) {
        document.getElementsByClassName('List1')[0].style.inset = '0px'
        document.getElementsByClassName('List1')[0].style.margin = 'auto'
        document.body.style.overflow = 'hidden'
        document.querySelector('.tours').style.paddingTop = '0px'
        document.querySelector('header').style.display = 'none'
    }
    return (
        <Link className="head" id={id} onClick={() => setYes(true)} to='/List1'>
            <img src={src} alt="" />
            <h2>{h2}</h2>
            <h1>{h1}</h1>
            <h3>{h3}</h3>
            <div>
                <i>{ratingS}</i>
                <h5>{ratingR}</h5>
                <span>{ratingN}</span>
            </div>
            <span className='price'>{price1}</span>
        </Link>
    )
}
export default LinK