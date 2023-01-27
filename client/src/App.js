//import css
import './App.css';
//import components
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel';
import Recommended from './components/recommended/Recommended';
import Tours from './components/Tours/Tours';
import Package from './components/Packages/Package';
import Activitie from './components/Activities/Activitie';
import Transfer from './components/Transfer/Transfer'
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
//bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';
//import scroll file
import Scroll from './components/Scroll'

function App() {
  return (
    <>
      <Scroll />
      <Header />
      <Carousel />
      <Recommended />
      <Tours />
      <Package />
      <Activitie />
      <Transfer />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
