// import MobileNav from "./MobileNav";

const Navbar = () => {

    const mobileView = () => {
        const backdrop = document.querySelector(".backdrop");
        backdrop.style.display = "block";
        // select mobile nav
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.style.display = 'block';
    }


    return (
        <div className="navbar">
            <div className="navbrand">
                <a href="" className="navbar-link">The compass</a>
            </div>
            <nav>
                <ul className="nav-item">
                    <li className="nav-items">
                        {/* <input type="text" placeholder="search.." /> */}
                        <i class="fas fa-search"></i>
                    </li>
                    <li className="nav-items">
                        <i class="far fa-bell"></i>
                    </li>
                    <li className="nav-items" onClick={mobileView}>
                        <i class="fas fa-bars" ></i>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;