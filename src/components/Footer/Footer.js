import "./Footer.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = ()=>{
    return(
        <div className="all_content_footer">
            <p className="footer_brand">POLL TOWARDS A GOAL - THE POLLING APP</p>
            <p className="footer_by">Coded with ❤ by Vijay Joshi</p>
            <p>Connect with me</p>
            <a href="https://github.com/vijayjoshi16"><GitHubIcon style={{color:"white"}} className="icon"></GitHubIcon></a>
            <a href="https://www.instagram.com/vijayjoshi802/"><InstagramIcon style={{color:"white"}}  className="icon"></InstagramIcon></a>
            <a href="https://www.linkedin.com/in/vijay-joshi-80221a193/"><LinkedInIcon style={{color:"white"}} className="icon"></LinkedInIcon></a>
            <a href="https://www.facebook.com/vijayjoshi802/"><FacebookIcon style={{color:"white"}} className="icon"></FacebookIcon></a>
            <a href="https://twitter.com/vijay_joshi16"><TwitterIcon style={{color:"white"}} className="icon"></TwitterIcon></a>
        </div>
    );
}

export default Footer;