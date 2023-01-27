//logo in black and white for the scroll function
import HeaderImage1 from '../assets/Capture-removebg-preview (1).png'
import HeaderImage2 from '../assets/6-removebg-preview.png'
function Scroll() {
    window.onscroll = function () {
        //when user scroll , the header background and logo change 
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('header').style.boxShadow = '1px 1px 10px grey'
        document.querySelector('header nav img').src = HeaderImage2
        document.querySelector('header nav img').style.width = '130px'
        document.querySelector('header nav img').style.paddingBottom = '5px'
        document.querySelector('header nav #open').style.color = 'black'
        document.querySelector('header nav #close').style.color = 'black'
        if (window.scrollY === 0) {
            document.querySelector('header').style.backgroundColor = 'transparent'
            document.querySelector('header').style.boxShadow = '0px 0px 0px grey'
            document.querySelector('header nav img').src = HeaderImage1
            document.querySelector('header nav img').style.width = '180px'
            document.querySelector('header nav img').style.paddingBottom = '0px'
            document.querySelector('header nav #open').style.color = 'white'
            document.querySelector('header nav #close').style.color = 'white'
        }
    }
}
export default Scroll