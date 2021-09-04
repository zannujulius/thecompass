import img2 from '../assets/images/img2.jpg';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';
// import useFetch from '../useFetch';

const Headline = () => {

    // const {error, data: articles, isPending } = useFetch('http://localhost:5000');
    // const data = articles.articles;
    const [error, setState] = useState(true);
    const [isPending, setisPending] = useState(true) 

    return (
        <>

            <div className="headline">
                <div className="headline-title__content">
                    <div className="headline-title">
                    
                    </div>
                    <div className="headline-status">
                        Live
                    </div>
                </div>

                <div className="headline-holder">

                    <div className="headline-top">
                        <div className="headline-top__date">
                            Mon, 21st, 2021
                        </div>
                        <div className="headline-top__journalist">
                            James Krivaj
                        </div>
                    </div>

                    <a href="#" className="headline-article">
                        <div className="headline-content">
                            <div className="headline-header">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad!
                            </div>
                            <div className="headline-image">
                                {/* <img src={img2} alt="" /> */}
                            </div>
                            <div className="headline-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis pariatur
                                omnis labore error! Perspiciatis corporis distinctio ab placeat dicta vel.Nostrum
                                delectus ipsa, molestiae qui officia aspernatur sapiente numquam veniam quidem quod
                                voluptas nihil illum nemo iure a cumque.
                            </div>
                        </div>
                        <div className="headline-footer">
                            <div className="headline-location">
                                ~ Ireland
                            </div>
                        </div>
                    </a >
                </div>
                <div className="headline-holder">
                    <div className="headline-top">
                        <div className="headline-top__date">
                            Mon, 21st, 2021
                        </div>
                        <div className="headline-top__journalist">
                            James Krivaj
                        </div>
                    </div>
                    <a href="#" className="headline-article">
                        <div className="headline-content">
                            <div className="headline-header">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad!
                            </div>
                            <div className="headline-image">
                                {/* <img src={img2} alt="" /> */}
                            </div>
                            <div className="headline-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis pariatur
                                omnis labore error! Perspiciatis corporis distinctio ab placeat dicta vel.Nostrum
                                delectus ipsa, molestiae qui officia aspernatur sapiente numquam veniam quidem quod
                                voluptas nihil illum nemo iure a cumque.
                            </div>
                        </div>
                        <div className="headline-footer">
                            <div className="headline-location">
                                ~ Ireland
                            </div>
                        </div>
                    </a >
                </div>

                <div className="headline-holder">
                    <div className="headline-top">
                        <div className="headline-top__date">
                            Mon, 21st, 2021
                        </div>
                        <div className="headline-top__journalist">
                            James Krivaj
                        </div>
                    </div>
                    <a href="#" className="headline-article">
                        <div className="headline-content">
                            <div className="headline-header">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad!
                            </div>
                            <div className="headline-image">
                                {/* <img src={img2} alt="" /> */}
                            </div>
                            <div className="headline-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis pariatur
                                omnis labore error! Perspiciatis corporis distinctio ab placeat dicta vel.Nostrum
                                delectus ipsa, molestiae qui officia aspernatur sapiente numquam veniam quidem quod
                                voluptas nihil illum nemo iure a cumque.
                            </div>
                        </div>
                        <div className="headline-footer">
                            <div className="headline-location">
                                ~ Ireland
                            </div>
                        </div>
                    </a >
                </div>
                <div className="headline-holder">
                    <div className="headline-top">
                        <div className="headline-top__date">
                            Mon, 21st, 2021
                        </div>
                        <div className="headline-top__journalist">
                            James Krivaj
                        </div>
                    </div>
                    <a href="#" className="headline-article">
                        <div className="headline-content">
                            <div className="headline-header">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad!
                            </div>
                            <div className="headline-image">
                                {/* <img src={img2} alt="" /> */}
                            </div>
                            <div className="headline-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis pariatur
                                omnis labore error! Perspiciatis corporis distinctio ab placeat dicta vel.Nostrum
                                delectus ipsa, molestiae qui officia aspernatur sapiente numquam veniam quidem quod
                                voluptas nihil illum nemo iure a cumque.
                            </div>
                        </div>
                        <div className="headline-footer">
                            <div className="headline-location">
                                ~ Ireland
                            </div>
                        </div>
                    </a >
                </div>
            </div >
        </>
    );
}

export default Headline;