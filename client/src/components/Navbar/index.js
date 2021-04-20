import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/cart.png";
import { Nav, NavLogo, NavRight, NavMenuItems } from "./NavbarStyle";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, loggedOut } from "../../features/user/userSlice";

function Navbar() {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    dispatch(loggedOut());
  };

  return (
    <div>
      <Nav>
        <Link to="/shop">
          <NavLogo src={logo} />
        </Link>
        <NavRight>
          {!userData.isLoggedIn ? (
            <>
              <NavMenuItems to="/login">Login</NavMenuItems>
              <NavMenuItems to="/signup">Sign Up</NavMenuItems>
            </>
          ) : (
            <NavMenuItems to="/login" onClick={handleLogOut}>
              Logout
            </NavMenuItems>
          )}

          <NavMenuItems to="/cart">
            <NavLogo style={{ height: "30px", width: "auto" }} src={cart} />
          </NavMenuItems>
        </NavRight>
      </Nav>
    </div>
  );
}

export default Navbar;
