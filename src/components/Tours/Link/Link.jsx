
let Link = ({ src, h2, h1, h3, ratingS, ratingR, ratingN, price1 }) => {
    return (
        <a href="" className="heading">
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
        </a>
    )
}
export default Link