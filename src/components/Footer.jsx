import NannySheet from '../images/union.svg';
import HapuLogo from '../images/hapu_logo.svg';
import FacebookIcon from '../images/facebook.svg';
import InstagramIcon from '../images/instagram.svg';
import TwitterIcon from '../images/twitter.svg';

function Footer() {
  return (
    <footer className="footer_container">
      <h2>
        Become a nanny share host
      </h2>
      <p className="footer_call_to_action_p">
        Takes less than 5 minutes to get started
      </p>
      <button className="navbar btn_footer">
        <img src={ NannySheet } alt="" />
        <div className="footer_btn_container">
          <p className="medium_paragraph">
            Create Your Nanny Share
          </p>
          <p className="small_paragraph">
            Takes less than 5 minutes
          </p>
        </div>
      </button>
      <a href="https://" className="footer_anchor app_links">
        Or brouwse local nanny shares
      </a>
      <div className="footer_navbar_container">
        <img src={ HapuLogo } alt="" className="hapu_logo" ></img>
        <div className="footer_navbar">
          <button className="default">Share Your Nanny</button>
          <button className="default">Our Story</button>
          <button className="default">Blog</button>
          <button className="default">{ 'Terms & Privacy' }</button>
        </div>
        <div className="footer_social_links">
          <img src={ FacebookIcon } alt="" />
          <img src={ InstagramIcon } alt="" />
          <img src={ TwitterIcon } alt="" />
        </div>
      </div>
      <p className="last_small_paragraph">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
