import './App.css';
import Banner from './banner';
import WeCare from './weCare';
import HowWork from './howWork';
import Support from './support';
import Community from './community';
import Partner from './partner';
import Footer from './footer';
import Header from './header';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='parent'>
       <div className='headerParent'>
        <Header/>
      </div>
      <div className='bannerParent'>
        <Banner/>
      </div>
      <div className='weCareParent'>
        <WeCare/>
      </div>
      <div className='howWorkParent'>
        <HowWork/>
      </div>
      <div className='supportParent'>
        <Support/>
      </div>
      <div className='border1pxSolid communityParent'>
        <Community/>
      </div>
      <div className='partnerParent'>
        <Partner/>
      </div>
      <div className='footerParent'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
