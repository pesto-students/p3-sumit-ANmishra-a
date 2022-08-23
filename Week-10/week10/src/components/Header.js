import "./Header.css";
function Header() {
  return (
    <div className="header-container">
      <div className="header-container__logo">
        <h1>Shortly</h1>
      </div>
      <div className="header-options">
        <div className="header-options__Features">Features</div>
        <div className="header-options__Pricing">Pricing</div>
        <div className="header-options__Resources">Resources</div>
        <div className="header-options__Login">Login</div>
        <div className="header-options__Signup">Sign up</div>
      </div>
    </div>
  );
}
export default Header;
