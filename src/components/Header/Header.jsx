import "./Header.css";

export const Header = (props) => {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className="header">
            <img className="logo" src="./images/Site-logo.png" alt="logo" />
            <nav>
                <a href="#about" className="nav-link link-hover-effects">1. About</a>
                <a href="#experience" className="nav-link link-hover-effects">2. Experience</a>
                <a href="#contact" className="nav-link link-hover-effects">3. Contact</a>
                <a href="https://https://drive.google.com/file/d/1ryorjbhBvMC2kf73WQ1DZaBUbZk9MLIm/view?usp=sharing.creddle.io/resume/gw9zlq307t2">
                <button className="resume-link link-hover-effects">Resume</button>
                </a>
            </nav>

            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn link-hover-effects" onClick={closeNav}>&times;</a>
                <a href="#about" onClick={closeNav} className="link-hover-effects">1. About</a>
                <a href="#experience" onClick={closeNav} className="link-hover-effects">2. Experience</a>
                <a href="#contact" onClick={closeNav} className="link-hover-effects">3. Contact</a>
            </div>

            <span className="sideNavButton link-hover-effects" style={{fontSize: 30, cursor: "pointer", color: "#04F1FE"}} onClick={openNav}>&#9776;</span>
        </div>
    )
}
