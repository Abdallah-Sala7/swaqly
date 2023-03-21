import "./style.css";

import {
  AccountCircleOutlined,
  Menu,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { showAside, showNotification } from "../../store/reducers/appSlice";
import Notification from "../Notification";

const Navbar = () => {
  const dispatch = useDispatch();

  const { notification } = useSelector((state) => state.app);

  const handleAside = (e) => {
    dispatch(showAside());
    e.preventDefault();
  };

  const handleNotification = (e) => {
    dispatch(showNotification());
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
              <a
                href="#"
                className={`link-icon ${notification && "active"}`}
                onClick={(e) => handleNotification(e)}
              >
                <NotificationsOutlined />
              </a>

              <a href="#" className="link-icon">
                <AccountCircleOutlined />
              </a>
            </div>
          </div>

          {notification && (
            <div className="notification-contint">
              <Notification />
              <Notification />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
