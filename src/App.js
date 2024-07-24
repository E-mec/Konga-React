
import About from './About/About';
import Advert from './Add/Advert';
import './App.css';
import Cate from './Cate/Cate';
import Deal from './Deal/Deal';
import Foot from './Foot/Foot';
import Four from './fours/Four';
import Header from './Header/Header';
// import Login from './Login/Login';
import Sprod from './S-Products/Sprod';
import Serve from './Services/Serve';
import Slider from './Slider/Slide/Slider';
import Sponsor from './Spon/Sponsor';

function App() {
  return (
  <>
  <Header/>
  {/* <Login/> */}
  <Slider/>
  <Serve/>
  <Deal/>
  <Sprod/>
  <Cate/>
  <Advert/>
  <Four/>
  <Sponsor/>
  <About/>
  <Foot/>
  </>
  )
}

export default App;
