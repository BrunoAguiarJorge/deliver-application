import App from "../App"
import './styles.css';
import {ReactComponent as InstagramItem} from './instagram.svg';
import {ReactComponent as LinkedinItem} from './linkedin.svg';
import {ReactComponent as YoutubeItem} from './youtube.svg';


function Footer(){
    return(
       <footer className="main-footer">
           App developed in the second week of the SDS 02

           <div className="footer-icons">
            <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new">
            <YoutubeItem />
            </a>
            <a href="https://www.linkedin.com/in/brunoaguiarjorge/" target="_new">
                <LinkedinItem />
            </a>
            <a href="https://www.instagram.com/brunoaguiarjorge/" target="_new">
                <InstagramItem />
            </a>
           </div>
       </footer>
    )
}

export default Footer;