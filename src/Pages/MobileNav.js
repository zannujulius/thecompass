import profileImage from '../assets/images/profileimg.jpg'


const MobileNav = () => {
    return (
        <div className="mobile-nav" style={{ "display": "none" }}>
            <div className="mobile-nav-profile">
                <div className="mobile-nav__img">
                    {/* <img src={profileImage} className="profileimg" alt="profile images" /> */}
                </div>
                <div className="mobile-nav__profile-details">
                    <p className="mobile-nav__profil-emails">
                        zannujulius@gmail.com
                    </p>
                    <p className="mobile-nav__profil-name">
                        Zannu Julius
                    </p>
                </div>
            </div>
            <hr />
            <ul className="mobile-nav__item">
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Category
                    </a>
                </li>
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Tags
                    </a>
                </li>
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Country
                    </a>
                </li>
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Become a journalist
                    </a>
                </li>
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Publish your Article
                    </a>

                </li>
            </ul>
            <hr />

            <ul className="mobile-nav__item">
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Settings
                    </a>
                </li>
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Support
                    </a>
                </li>
                <li className="mobile-nav__items">
                    <a href="" className="mobile-nav__link">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MobileNav;