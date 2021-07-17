import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Country from './Pages/Country';
import MobileNav from './Pages/MobileNav';
import Headline from './Pages/Headline';
import RightContainer from './Pages/RightContainer';
import BreakingNews from './Pages/BreakingNews';
import Suggestions from './Pages/Suggestions';
import Footer from './Pages/Footer';

function App() {
  const closeBackdrop = () => {
    const backdrop = document.querySelector('.backdrop');
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = "none";
    backdrop.style.display = "none";
  }

  return (
    <>
      <div className="backdrop" onClick={closeBackdrop}></div>
      <MobileNav />
      <Country />
      <Navbar />
      <div className="contentbody">
        <Headline />
        <RightContainer />
      </div>
      <section className="middle">
        <BreakingNews />
      </section>
      {/* <section>
        <Suggestions />
      </section> */}
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
