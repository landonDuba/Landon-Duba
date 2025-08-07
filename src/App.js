import './App.css';
import { FaLinkedin, FaGithub, FaJava, FaPython, FaHtml5, FaDocker, FaReact } from 'react-icons/fa'; 
import { GiBasketballBasket } from "react-icons/gi";
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { BsCCircleFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaBasketballBall } from "react-icons/fa";








function App() {
  const [clicked, setClicked] = useState(false);
  const [animateBall, setAnimateBall] = useState(false);

  const skStuff = [
    { icon: FaPython, name: "Python" },
    { icon: FaJava, name: "Java" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaReact, name: "React" },
    { icon: SiFlask, name: "Flask" },
    { icon: BsFiletypeSql, name: "SQL" },
    { icon: FaDocker, name: "Docker" },
    { icon: BsCCircleFill, name: "C" },
  ];

  return (
    <body class="app">
    {/*This is the Section for the navbar */}
    <div class="navbar">
      <h2 style={{fontSize: '32px'}}>Landon Duba</h2>
      <GiBasketballBasket 
      size={50}
      style={{cursor:'pointer', color: 'white'}}
      onClick={() => {
        setAnimateBall(true);
        setTimeout(() => setAnimateBall(false), 3000); // match the animation duration
        setClicked(!clicked);
      }}
      />
    </div>

      {animateBall && (
        <div className="flying-basketball">
          <FaBasketballBall size={200} color="orange" />
        </div>
      )}

    <hr style={{color:'white'}}></hr>


    {/*This is the section for the profile */}
    <div class="about_photo">
        <div class="about">
            <h3 class ="intro" style={{fontSize: "24px"}}>Hi, I'm</h3>
            <h1 class="name" style={{color: "Gray", textShadow: '1px 1px white'}}> Landon Duba</h1>
            <h2 class="info" style={{color: "white"}}>Junior at Virginia Tech, Studying CS</h2>
            <a class="temp "href="/Landon Duba Resume.pdf">
              <button className="resume" style={{cursor: 'pointer'}}>Open Resume</button>
            </a>
            <div class="links">
              <a href="https://github.com/landonDuba">
                <FaGithub size={40}></FaGithub>
              </a>
              <a href="mailto:landonduba@vt.edu">
                <MdEmail size={40}></MdEmail>
              </a>
              <a href="https://www.linkedin.com/in/landonduba">
                <FaLinkedin size={40}></FaLinkedin>
              </a>
              <a href="https://leetcode.com/u/LandonDuba/">
                <SiLeetcode size={40}></SiLeetcode>
              </a>
            </div>
        </div>
        <div>
          <img className="photo" src={process.env.PUBLIC_URL + '/landon.jpeg'} alt=""></img>
        </div>
    </div>

    <hr style={{color: 'white'}}></hr>

    {/*This is the section for the Experience */}
    <div class="exp">
      <div class="expTitle">
        <h4>Experience</h4>
      </div>
      <div class="expBoxes">
          <div class="box1">
              <img className='logo1' src={process.env.PUBLIC_URL +"/mant.png"} alt=""></img>
              <div className='box1Text'> 
                <h5 className='title1'>ManTech International</h5>
                <p>Software Engineer Intern</p>
                <p>December 2024 - March 2025</p>
              </div>
          </div>
            <div class="box1">
              <img className='logo2' src={process.env.PUBLIC_URL +"/vtlogo.png"} alt=""></img>
              <div className='box1Text'> 
                <h5 className='title1'>Virginia Tech</h5>
                <p>Bachelor's of Science, Computer Science</p>
                <p>August 2023 - May 2027</p>
              </div>
          </div>
      </div>
    </div>

    <hr style={{color: 'white'}}></hr>

    {/*This is the section for the Projects */}
    <div class="exp">
      <div class="expTitle">
        <h4>Projects</h4>
      </div>
      <div class="proBoxes">
          <div class="box1">
              <img className='logo3' src={process.env.PUBLIC_URL +"/map.png"} alt=""></img>
              <div className='box2Text'> 
                <h5 className='title1'>Safety Map</h5>
                <p>A map that scores the safety of your route</p>
                <div className='projLink'>
                  <a href="https://github.com/landonDuba/Safety-Map-V2"><FaGithub size={20} className='gitLink'></FaGithub></a>
                  <a href="https://github.com/landonDuba/Safety-Map-V2">Check it Out!</a>
                </div>
              </div>
          </div>
            <div class="box1">
              <img className='logo4' src={process.env.PUBLIC_URL +"/discord.png"} alt=""></img>
              <div className='box2Text'> 
                <h5 className='title1'>Discord Extension</h5>
                <p>Added more customization, 35+ Downloads</p>
                <div className='projLink'>
                  <a href="https://github.com/landonDuba/discord-custom"><FaGithub size={20} className='gitLink'></FaGithub></a>
                  <a href="https://github.com/landonDuba/discord-custom">Check it Out!</a>
                </div>
              </div>
          </div>
      </div>
    </div>
    {/*This is the section for the Skills */}
    <hr style={{color: 'white'}}></hr>

    <div className='skills'>
      <div className='headBox'>
        <h4 class="skTitle">Skills</h4>
        <p class="skExtra">Some of the Tools and Languages I've used!</p>
      </div>
      <div className='skillList'>
          {skStuff.map((skill, index) => {
            const IconComp = skill.icon;
            return(
              <div key={index} className="skill">
                <IconComp className="icL" size={30} style={{ marginLeft: '10px', color: 'white', marginRight: '5px'}} />
                <span className="icS" style={{color: 'white'}}>{skill.name}</span>
              </div>
            );
          })}
      </div>
    </div>

    <hr style={{color: 'white'}}></hr>

    <div className='last'>
      <p>Copyright @ Landon Duba. Built from Scratch with React and CSS</p> 
      <p>Email me at landonduba@vt.edu</p>
    </div>

    </body>
  );
}

export default App;
