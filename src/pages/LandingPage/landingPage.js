import React from 'react';
import './landingPage.css';
import bg from "../assets/me.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className = "hello">Hello,</span>
                <span className = "introText"> I'm <span className="introName">Richard Wang</span> <br />A current Student at Walnut High</span>
                <p className="introPara">I'm 15 and I enjoy playing basketball or playing games. Currently, I'm learning cs, various languages, <br/>and soft skills like website development</p>
                <img src={bg} alt="" className="bg" />
            </div>
            
        </section>
    )
}

export default Intro