import { ReactComponent as Badge } from '../images/badge.svg';
function NavBar() {
  return (
    <div className="navbar_container">
      <div className="navbar_badge_container">
        <Badge className="navbar_badge" />
      </div>
      <div className="navbar_center">
        <a className="between_space">Create Your Banny Share</a>
        <a className="between_space">Browse Shares</a>
        <a className="between_space">Our Story</a>
      </div>
      <div className="navbar_right between_space">
        <button className="between_space">Become a Nanny Share Host</button>
        <a href="">Sign In</a>
      </div>
    </div>
  )
}

export default NavBar;
