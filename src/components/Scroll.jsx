//logo in black and white for the scroll function
import HeaderImage1 from '../assets/Capture-removebg-preview (1).png'
import HeaderImage2 from '../assets/6-removebg-preview.png'
function Scroll() {
    window.onscroll = function () {


        //when user scroll , the header background and logo change 
        document.querySelector('header').style.backgroundColor = 'white'
        document.querySelector('header').style.boxShadow = '1px 1px 10px grey'
        document.querySelector('header nav img').src = HeaderImage2
        document.querySelector('header nav img').style.width = '160px'
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


        //when user scroll , the recommended section appear with animation
        if (window.scrollY <= 200) {
            document.getElementsByClassName('heading')[0].classList.add('show')
        } else if (window.scrollY >= 350) {

            document.querySelectorAll('.companies a')[0].classList.add('show')
            document.querySelectorAll('.companies a')[0].style.transition = '.6s'

            document.querySelectorAll('.companies a')[1].classList.add('show')
            document.querySelectorAll('.companies a')[1].style.transition = '.8s'

            document.querySelectorAll('.companies a')[2].classList.add('show')
            document.querySelectorAll('.companies a')[2].style.transition = '1s'

            document.querySelectorAll('.companies a')[3].classList.add('show')
            document.querySelectorAll('.companies a')[3].style.transition = '.6s'

            document.querySelectorAll('.companies a')[4].classList.add('show')
            document.querySelectorAll('.companies a')[4].style.transition = '.8s'

            document.querySelectorAll('.companies a')[5].classList.add('show')
            document.querySelectorAll('.companies a')[5].style.transition = '1s'
        }



        //when user scroll , the Tours section appear with animation
        if (window.scrollY >= 600) {
            document.getElementById('h1').classList.add('show')
        }
        if (window.scrollY >= 700) {
            document.querySelectorAll('.buttons button')[0].classList.add('show')
            document.querySelectorAll('.buttons button')[0].style.transition = '.6s'

            document.querySelectorAll('.buttons button')[1].classList.add('show')
            document.querySelectorAll('.buttons button')[1].style.transition = '.6s'

            document.querySelectorAll('.buttons button')[2].classList.add('show')
            document.querySelectorAll('.buttons button')[2].style.transition = '.6s'

            document.querySelectorAll('.buttons button')[3].classList.add('show')
            document.querySelectorAll('.buttons button')[3].style.transition = '.6s'
        }
        //after 0.2 seconds transition of the buttons back to 0.2s
        setTimeout(() => {
            document.querySelectorAll('.buttons button')[0].style.transition = '.2s'
            document.querySelectorAll('.buttons button')[1].style.transition = '.2s'
            document.querySelectorAll('.buttons button')[2].style.transition = '.2s'
            document.querySelectorAll('.buttons button')[3].style.transition = '.2s'
        }, 200);
        if (window.scrollY >= 900) {
            document.querySelectorAll('.content a').forEach(e => {
                e.classList.add('show')
            })
            document.querySelectorAll('.content a')[0].style.transition = '.2s'
            document.querySelectorAll('.content a')[1].style.transition = '.4s'
            document.querySelectorAll('.content a')[2].style.transition = '.6s'
            document.querySelectorAll('.content a')[3].style.transition = '.8s'
            document.querySelectorAll('.content a')[4].style.transition = '1s'
        }

        //when user scroll , the Packages section appear with animation
        if (window.scrollY >= 1600) {
            document.querySelectorAll('#h1')[1].classList.add('show')
        }
        if (window.scrollY >= 2000) {
            document.querySelectorAll('.c0 a').forEach(e => {
                e.classList.add('show')
            })
            document.querySelectorAll('.c0 a')[0].style.transition = '.2s'
            document.querySelectorAll('.c0 a')[1].style.transition = '.4s'
            document.querySelectorAll('.c0 a')[2].style.transition = '.6s'

            document.querySelectorAll('.c0 a')[3].style.transition = '.2s'
            document.querySelectorAll('.c0 a')[4].style.transition = '.4s'
            document.querySelectorAll('.c0 a')[5].style.transition = '.6s'

            document.querySelectorAll('.c0 a')[6].style.transition = '.2s'
            document.querySelectorAll('.c0 a')[7].style.transition = '.4s'
            document.querySelectorAll('.c0 a')[8].style.transition = '.6s'

            document.querySelectorAll('.c0 a')[9].style.transition = '.2s'
            document.querySelectorAll('.c0 a')[10].style.transition = '.4s'
        }

        //when user scroll , the Activities section appear with animation
        if (window.scrollY >= 3300) {
            document.querySelectorAll('#h1')[2].classList.add('show')
        }
        if (window.scrollY >= 3800) {
            document.querySelectorAll('.c5 a').forEach(e => {
                e.classList.add('show')
            })
            document.querySelectorAll('.c5 a')[0].style.transition = '.2s'
            document.querySelectorAll('.c5 a')[1].style.transition = '.4s'
            document.querySelectorAll('.c5 a')[2].style.transition = '.6s'
            document.querySelectorAll('.c5 a')[3].style.transition = '.2s'
            document.querySelectorAll('.c5 a')[4].style.transition = '.4s'
            document.querySelectorAll('.c5 a')[5].style.transition = '.6s'
            document.querySelectorAll('.c5 a')[6].style.transition = '.2s'
            document.querySelectorAll('.c5 a')[7].style.transition = '.4s'
            document.querySelectorAll('.c5 a')[8].style.transition = '.6s'
            document.querySelectorAll('.c5 a')[9].style.transition = '.2s'
            document.querySelectorAll('.c5 a')[10].style.transition = '.4s'
        }
    }
}
export default Scroll