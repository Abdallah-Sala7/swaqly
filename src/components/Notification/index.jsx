import { Close, Error } from '@mui/icons-material';
import './style.css'

const Notification = () => {
  return (
    <div className="notification">
      <span className="notification-icon">
        <Error />
      </span>

      <div className="notification-text">
        <h1 className="notification-title">Lorem ipsum</h1>

        <p className="notification-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quod.
        </p>
      </div>

      <a href='#' className="remove-notification">
        <Close />
      </a>
    </div>
  );
};

export default Notification;
