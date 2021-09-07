import  ImageCard from '../images/header_card.png';
import icon from '../images/play_icon.svg';

function HeaderContent() {
  return (
    <div className="header_info_container">
      <div className="left_content">
        <h2 className="header_title">
          Easily create or join a local nanny share with Hapu
        </h2>
        <p className="header_paragraph">
          Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.
        </p>
        <div className="player_container">
          <button className="round_btn">
            <img src={icon} alt="start play icon" />
          </button>
          <a href="https://" className="app_links_header">See hapu in action (27 seconds)</a>
        </div>
      </div>
      <div className="right_content">
        <img src={ ImageCard } alt="exemple: new nanny share subscriber" className="header_image_card" />
      </div>
    </div>
  );
}

export default HeaderContent;
