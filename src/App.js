import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Country from './Pages/Country';
import MobileNav from './Pages/MobileNav';

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
    </>
  );
}

export default App;
