// Styling
import { Logo, NavItem, ThemeButton } from "../styles";

import darkLogo from "../dark-logo.png";
import lightLogo from "../light-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { signout } from "../store/actions/authActions";

const NavBar = ({ currentTheme, toggleTheme }) => {
  const user = useSelector((state) => state.user.user);

  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? lightLogo : darkLogo} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <h2 style={{ marginRight: "150px" }}>hello {user.username}</h2>
            <NavItem className="nav-item" to="/products">
              Products
            </NavItem>
            <NavItem className="nav-item" to="/shops">
              Shops
            </NavItem>
            <button
              style={{ color: "white" }}
              className="nav-item btn btn-success"
              onClick={() => dispatch(signout(history))}
            >
              signOut
            </button>
          </>
        ) : (
          <>
            <NavItem className="nav-item" to="/signup">
              Signup
            </NavItem>
            <NavItem className="nav-item" to="/signin">
              Signin
            </NavItem>
          </>
        )}
        <ThemeButton className="nav-item" onClick={toggleTheme}>
          {currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
