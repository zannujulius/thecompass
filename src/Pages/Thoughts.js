import img2 from '../assets/images/imgthoughs3.jpg';


const Thoughts = () => {

    const imgStyle = {
        background: `url(${img2})`,
        backgroundPosition: "50% 20%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        boxShadow: "0 0px 10px rgba(240, 240, 240, 0.374)"
    }


    return (
        <div className="thoughts">
            <div className="thoughts-title">
                Thoughts
            </div>
            <hr />
            <div className="thoughts-content">
                <div className="thoughts-details">
                    <div className="thoughts-img" style={imgStyle}>

                    </div>
                    <div className="thoughts-text">
                        <div className="thoughts-name">
                            Micheal Vorak
                        </div>
                        <div className="thought-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint.
                        </div>
                    </div>
                </div>
                <div className="thoughts-details">
                    <div className="thoughts-img" style={imgStyle}>

                    </div>
                    <div className="thoughts-text">
                        <div className="thoughts-name">
                            Micheal Vorak
                        </div>
                        <div className="thought-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint.
                        </div>
                    </div>
                </div>
                <div className="thoughts-details">
                    <div className="thoughts-img" style={imgStyle}>

                    </div>
                    <div className="thoughts-text">
                        <div className="thoughts-name">
                            Micheal Vorak
                        </div>
                        <div className="thought-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint.
                        </div>
                    </div>
                </div>
                <div className="thoughts-details">
                    <div className="thoughts-img" style={imgStyle}>

                    </div>
                    <div className="thoughts-text">
                        <div className="thoughts-name">
                            Olivia Steel
                        </div>
                        <div className="thought-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint.
                        </div>
                    </div>
                </div>
                <div className="thoughts-details">
                    <div className="thoughts-img" style={imgStyle}>

                    </div>
                    <div className="thoughts-text">
                        <div className="thoughts-name">
                            Olivia Steel
                        </div>
                        <div className="thought-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint.
                        </div>
                    </div>
                </div>
                <div className="thoughts-details">
                    <div className="thoughts-img" style={imgStyle}>

                    </div>
                    <div className="thoughts-text">
                        <div className="thoughts-name">
                            Olivia Steel
                        </div>
                        <div className="thought-subtext">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, sint.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thoughts;