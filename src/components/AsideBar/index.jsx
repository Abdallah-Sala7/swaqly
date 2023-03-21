import "./style.css";

import {
  AccountCircleOutlined,
  Add,
  Help,
  HomeOutlined,
  KeyboardArrowDown,
  LogoutOutlined,
  Settings,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AsideBar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem("login");
    navigate("/auth");
    e.preventDefault();
  };

  return (
    <div className="aside-contint">
      <ul className="aside-list">
        <li className="aside-item">
          <NavLink to="/" className="aside-link">
            <span className="aside-icon">
              <HomeOutlined />
            </span>

            <span className="aside-text">home</span>
          </NavLink>
        </li>

        <li className="aside-item">
          <NavLink to="profile" className="aside-link">
            <span className="aside-icon">
              <AccountCircleOutlined />
            </span>

            <span className="aside-text">profile</span>
          </NavLink>
        </li>

        <li className="aside-item">
          <NavLink to="products" className="aside-link">
            <span className="aside-icon">
              <ShoppingBagOutlined />
            </span>

            <span className="aside-text">products</span>

            <span className="aside-icon arrow-icon">
              <KeyboardArrowDown />
            </span>
          </NavLink>

          <ul className="aside-sublist">
            <li className="aside-subitem">
              <NavLink to="products/add" className="aside-sublink">
                <span className="aside-icon">
                  <Add />
                </span>

                <span className="aside-text">add product</span>
              </NavLink>
            </li>

            <li className="aside-subitem">
              <NavLink to="products/all" className="aside-sublink">
                <span className="aside-icon">
                  <ShoppingCartOutlined />
                </span>

                <span className="aside-text">all products</span>
              </NavLink>
            </li>
          </ul>
        </li>

        <li className="aside-item">
          <NavLink to="/setting" className="aside-link">
            <span className="aside-icon">
              <Settings />
            </span>

            <span className="aside-text">setting</span>
          </NavLink>
        </li>

        <li className="aside-item">
          <Link to="/help" className="aside-link">
            <span className="aside-icon">
              <Help />
            </span>

            <span className="aside-text">help</span>
          </Link>
        </li>

        <li className="aside-item">
          <a href="#" onClick={handleLogout} className="aside-link">
            <span className="aside-icon">
              <LogoutOutlined />
            </span>

            <span className="aside-text">Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideBar;
