import { ReactComponent as Badge } from '../images/badge.svg';
function NavBar() {
  return (
    <div className="navbar_container">
      <div className="navbar_badge_container">
        <Badge className="navbar_badge" />
      </div>
      <div className="navbar_center">
        <button className="btn navbar">Create Your Banny Share</button>
        <button className="btn navbar">Browse Shares</button>
        <button className="btn navbar">Our Story</button>
      </div>
      <div className="navbar_right between_space">
        <button className="btn navbar special">Become a Nanny Share Host</button>
        <button className="btn navbar">Sign In</button>
      </div>
    </div>
  )
}

export default NavBar;
