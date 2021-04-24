import React , {Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout , isAuthenticated } from "../auth/helper";
import { motion } from "framer-motion";



const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
      
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAuthenticated() && isAuthenticated().user.role=== 0 && (
        <li className="nav-item">
        <Link
          style={currentTab(history, "/user/dashboard")}
          className="nav-link"
          to="/user/dashboard"
        >
          Dashboard
        </Link>
      </li>
      )}
      <li className="nav-item">
      {isAuthenticated() && isAuthenticated().user.role ===1 && (
          <Link
          style={currentTab(history, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          A. Dashboard
        </Link>
      )}
      
      </li>
     {!isAuthenticated() && (
        <Fragment>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/signup")}
            className="nav-link"
            to="/signup"
          >
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/signin")}
            className="nav-link"
            to="/signin"
          >
            Sign In
          </Link>
        </li>
        </Fragment>
     )}
      {isAuthenticated() &&(
        <li className="nav-item">
          <span 
          className="nav-link text -warning"
          onClick={() => {
            signout(() => {
              history.push("/");
            });
          }}
          >
            Signout
          </span>
          </li>
      )}
    </ul>
    
  
  </div>

);
export default withRouter(Menu); // with router will pick all the routes using the link in router.js
// className="nav-item"