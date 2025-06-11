import "./Main.css";

export const Main = (props) => {

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className="main" onClick={closeNav}>
            <section className="intro">
                <p>Hello, my name is</p>
                <h1>Jarett Sisk.</h1>
                <h2>I create things using code.</h2>
                <p>I started coding as a hobby back in 2015, and what started as a hobby soon became a passion. Over the years I spent alot of time self-learning and in 2021 finally had the opportunity to join a coding bootcamp and graduated in 2022. Currently, I am a full-time software engineer with a focus on web development.</p>
                <a href="https://drive.google.com/file/d/1ryorjbhBvMC2kf73WQ1DZaBUbZk9MLIm/view?usp=sharing">
                <button className="resume-link link-hover-effects">View my resume</button>
                </a>
            </section>

            <section className="about" id="about">
                <div className="reveal-container reveal">
                <h3>1. About Me</h3>
                <div className="hr-div"></div>
                <p>Hi! my name is Jarett. I am a software engineer with a focus on web developement. Growing up I always had a deep fascination with technology, and enjoyed all things electronic. After working heavy labor for most of my life, I always knew that I wanted something different when it came to a career. So back in 2015 I started learning to code. </p>
        
                <p>Fast forward to today, and I have dabbled in everything from creating games with unity and c#, to building full-stack apps for the web using JavaScript, Node.js and more. </p>
        
                <p>Some of my other hobbies include Electronic Music Production, Gaming ocasionally, and spending quality time with friends and family.</p>
        
                <p>Here are a few of the technologies I have been working with recently.</p>
                <div className="tech-stack-div">
                    <ul>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    </ul>
                    <ul>
                    <li>React.js</li>
                    <li>MySQL</li>
                    <li>Sequelize ORM</li>
                    </ul>
                </div>
                </div>
            </section>

            <section className="experience" id="experience">
                <div className="reveal-container reveal">
                <h3>2. My Experience</h3>
                <div className="hr-div"></div>
                <div className="projects">
                    <div className="project-card">
                    <h4>360-photo</h4>
                    <p>View 360 photos in your browser</p>
                        <div className="project-image-container">
                        <img src="./images/360-photo.png" alt="360 photo project" />
                        <a href="https://three60-photo.onrender.com/photo">
                        <div className="project-image-overlay"></div>
                        </a>
                        </div>
                    <div className="project-links">
                        <a href="https://three60-photo.onrender.com/photo" ><i className="uil uil-link-alt link-hover-effects"></i></a>
                        <a href="https://github.com/JarettSisk/360-photo-app" ><i className="uil uil-github link-hover-effects link-hover-effects"></i></a>
                    </div>
                    </div>
                    <div className="project-card">
                    <h4>Sprinboard Dark Theme</h4>
                    <p>A dark theme for my bootcamp's website</p>
                        <div className="project-image-container">
                        <img src="./images/springboard-dark-theme.png" alt="Springboard dark theme project" />
                        <a href="https://chrome.google.com/webstore/detail/springboard-dark-theme-be/momeonbdhfiamhnpjmgdmnkommfdlfhh">
                            <div className="project-image-overlay"></div>
                        </a>
                        </div>
                    <div className="project-links">
                        <a href="https://chrome.google.com/webstore/detail/springboard-dark-theme-be/momeonbdhfiamhnpjmgdmnkommfdlfhh" ><i className="uil uil-link-alt link-hover-effects"></i></a>
                        <a href="https://github.com/JarettSisk/Springboard-dark-theme-chrome-extension" ><i className="uil uil-github link-hover-effects link-hover-effects"></i></a>
                    </div>
                    </div>
                    <div className="project-card">
                    <h4>Hangman</h4>
                    <p>A fun hangman game for the web</p>
                        <div className="project-image-container">
                        <img src="./images/hangman.png" alt="360 photo project" />
                        <a href="https://zealous-bassi-e07d0d.netlify.app/">
                            <div className="project-image-overlay"></div>
                        </a>
                        </div>
                    <div className="project-links">
                        <a href="https://zealous-bassi-e07d0d.netlify.app/" ><i className="uil uil-link-alt link-hover-effects"></i></a>
                        <a href="https://github.com/JarettSisk/hangman-game" ><i className="uil uil-github link-hover-effects link-hover-effects"></i></a>
                    </div>
                    </div>
                    <div className="project-card">
                    <h4>Playlister</h4>
                    <p>Create and share playlists for your event</p>
                        <div className="project-image-container">
                        <img src="./images/playlister.png" alt="360 photo project" />
                        <a href="https://jarett-sisk-playlister-app.herokuapp.com/">
                            <div className="project-image-overlay"></div>
                        </a>
                        </div>
                    <div className="project-links">
                        <a href="https://jarett-sisk-playlister-app.herokuapp.com/" ><i className="uil uil-link-alt link-hover-effects"></i></a>
                        <a href="https://github.com/JarettSisk/Playlister" ><i className="uil uil-github link-hover-effects link-hover-effects"></i></a>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="reveal-container reveal">
                <h3>3. Contact Information</h3>
                <div className="hr-div"></div>
                <div className="faceCard">
                    <img src="./images/jarett-photo.png" />
                    <div style={{padding: 0}}>
                    <h2 className="faceCard-title" style={{margin: 0}}>Jarett Sisk</h2>
                    <p>816-269-4911.</p>
                    <p>jarett.sisk@gmail.com</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}