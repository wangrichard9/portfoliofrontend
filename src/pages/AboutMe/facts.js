import React from 'react';
import './facts.css';
import computerDesign from '../assets/computer.png';
import schoolDesign from '../assets/school.png';
import hobbieDesign from '../assets/hobbies.png';

const Facts = () => {
    return (
        <section id='skills'>
            <span className="aboutTitle">Things About me</span>
            <br></br><span className="skillDesc">Below is more information in the three categories of computer skills, school, and interests. It'll explain things such as computer languages/skills, school classes and interests, and hobbies/things I am interested in.</span>
            <div className="aboutBars">
                <div className = "aboutBar">
                    <img src={computerDesign} alt="" className="aboutBarImg" height={60} width={80} />
                    <div className="aboutBarText">
                        <h2>Computer Skills</h2>
                        <p>I have coding experience starting from 7th grade when I first started with Python. After that, I learned languages including Java and C++. I have some experience in Coding Competitions as well as current experience in website development</p>
                    </div>
                </div>
                <div className = "aboutBar">
                    <img src={schoolDesign} alt="" className="aboutBarImg" height={70} width={80}/>
                    <div className="aboutBarText">
                        <h2>School Facts</h2>
                        <p>Currently, I am a Freshmen at Walnut High School in Walnut, California. I also attend Coding Stem Academy during the weekends. In High School, some courses I'm currently taking are Biology and Math Analysis (Precalc). In the future, I look towards going to a good college and hopefully a good one.</p>
                    </div>
                </div>
                <div className = "aboutBar">
                    <img src={hobbieDesign} alt="" className="aboutBarImg" height={60} width={80}/>
                    <div className="aboutBarText">
                        <h2>Interests</h2>
                        <p>I am on my high school's freshmen basketball team and I'm looking forward to moving higher in their basketball program. Coding and computer science are things that pique my interest and accomplishing coding problems reward are very satisfying. On my free time, I like to play video games or hangout with friends</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Facts