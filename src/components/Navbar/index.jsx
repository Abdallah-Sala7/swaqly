import "./style.css";

import {
  AccountCircleOutlined,
  EmailOutlined,
  Menu,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { showAside } from "../../store/reducers/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleAside = (e) => {
    dispatch(showAside());
    e.preventDefault();
  };

  return (
    <nav>
      <div className="container">
        <div className="nav-layout">
          <a href="#" className="link-icon" onClick={(e) => handleAside(e)}>
            <Menu />
          </a>

          <div className="nav-content">
            <div className="search-bar">
              <input type="text" placeholder="Search" />

              <a href="#" type="button" className="search-icon">
                <Search />
              </a>
            </div>

            <div className="nav-links">
              <a href="#" className="link-icon">
                <NotificationsOutlined />
              </a>

              <a href="#" className="link-icon">
                <EmailOutlined />
              </a>

              <a href="#" className="link-icon">
                <AccountCircleOutlined />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
