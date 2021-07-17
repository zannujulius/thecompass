// import MobileNav from "./MobileNav";

const Navbar = () => {

    const mobileView = () => {
        const backdrop = document.querySelector(".backdrop");
        backdrop.style.display = "block";
        // select mobile nav
        const mobileNav = document.querySelector('.mobile-nav');
        mobileNav.style.display = 'block';
    }

    const searchbBarWidth = () => {
        // select the seacrh bar 
        const searchbBar = document.querySelector('.nav-item .fas');
    }

    return (
        <div className="navbar">
            <div className="navbrand">
                <a href="" className="navbar-link">The compass</a>
            </div>
            <nav>
                <ul className="nav-item">
                    <li className="nav-items" onClick={searchbBarWidth}>
                        <div className="nav-input__cover">
                            {/* <input type="text" placeholder="search.." /> */}
                            <i class="fas fa-search"></i>
                        </div>
                    </li>
                    <li className="nav-items">
                        <i class="far fa-bell"></i>
                    </li>
                    <li className="nav-items" onClick={mobileView}>
                        <i class="fas fa-bars bar" ></i>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;