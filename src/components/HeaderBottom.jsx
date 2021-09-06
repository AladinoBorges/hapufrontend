import { ReactComponent as ProfilePicture } from '../images/hero_header_profile.svg';

function HeaderBottom() {
  return (
    <div className="header_bottom_content">
      <ProfilePicture className="hero_profile_picture" />
      <p className="header_bottom_paragraph">
      <span>
        <a href="https://" className="app_links">Sarah’s day care available now in North Sydney</a>
        <strong> Wednesday, Thursday, Friday - 7:30 - 5:30</strong>
      </span>
      </p>
    </div>
  );
}

export default HeaderBottom;
