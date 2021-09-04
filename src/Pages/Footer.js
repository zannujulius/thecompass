



const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-brand">
                    The compass
                </div>
                <hr />
                <div className="footer-content">
                    <div className="footer-top__link">
                        <div className="footer-title">
                            News
                        </div>
                        <ul class="footer-top__link-item">
                            <li class="footer-top__link-items">
                                <a href="" class="footer-top__link-items__link">Breaking News</a>
                            </li>
                            <li class="footer-top__link-items">
                                <a href="" class="footer-top__link-items__link">Thoughs</a>
                            </li>
                            <li class="footer-top__link-items">
                                <a href="" class="footer-top__link-items__link">Sports</a>
                            </li>
                            <li class="footer-top__link-items">
                                <a href="" class="footer-top__link-items__link">Travel</a>
                            </li>
                            <li class="footer-top__link-items">
                                <a href="" class="footer-top__link-items__link">Business</a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="legal-top__link">
                        <div className="legal-title">
                            Legal
                        </div>
                        <ul class="legal-top__link-item">
                            <li class="legal-top__link-items">
                                <a href="" class="legal-top__link-items__link">Privacy policy</a>
                            </li>
                            <li class="legal-top__link-items">
                                <a href="" class="legal-top__link-items__link">Term and condition</a>
                            </li>
                            <li class="legal-top__link-items">
                                <a href="" class="legal-top__link-items__link">Cookie policy</a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="legal-top__link">
                        <div className="legal-title">
                            Actvities
                        </div>
                        <ul class="legal-top__link-item">
                            <li class="legal-top__link-items">
                                <a href="" class="legal-top__link-items__link">Advertise</a>
                            </li>
                            <li class="legal-top__link-items">
                                <a href="" class="legal-top__link-items__link">Support</a>
                            </li>
                            <li class="legal-top__link-items">
                                <a href="" class="legal-top__link-items__link">Subcriptions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="newsletter">
                        <div className="newsletter-text">
                            Enter your email address to receive daily news
                        </div>
                        <div className="newsletter-option">
                            <div className="option">
                                <select name="selectCategory" placeholder="select a category" id="" className="newsletter-select__btn">
                                    <option value="sports"> sports</option>
                                    <option value="sports"> travel</option>
                                    <option value="sports"> food</option>
                                    <option value="sports"> technology</option>
                                    <option value="sports"> politics</option>
                                    <option value="sports"> stocks</option>
                                </select>
                            </div>
                            <div className="newsletter-input">
                                <input type="text" placeholder="thecompass@gmail.com" />
                                <button className="newsletter-btn">submit</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="country-container">
                        <div className="country-items first-item">
                            <a href="" className="country-link">Chinese  语</a>
                        </div>
                        <div className="country-items first-item">
                            <a href="" className="country-link">English en</a>
                        </div>
                        <div className="country-items first-item">
                            <a href="" className="country-link">língua</a>
                        </div>
                    </div>
                    <div className="copyright">
                        2021 &#169; <span>ChevrTech</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;