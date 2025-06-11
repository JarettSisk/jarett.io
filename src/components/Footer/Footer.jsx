import "./Footer.css";

const Footer = (props) => {

    return (
        <div class="footer">
            <ul class="social-links">
                <li>
                <a href="https://github.com/JarettSisk" >
                    <i class="uil uil-github link-hover-effects link-hover-effects"></i>
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/jarett-sisk/" >
                    <i class="uil uil-linkedin link-hover-effects"></i>
                </a>
                </li>
                <li>
                <a href="https://www.youtube.com/channel/UCU5w8NK6R8I5yTLmKVNXWkQ" >
                    <i class="uil uil-youtube link-hover-effects"></i>
                </a>
                </li>
            </ul>
            <p>Designed & Built by Jarett Sisk</p>
        </div>
    )
}