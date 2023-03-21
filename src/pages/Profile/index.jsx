import "./style.css";

import { logo } from "../../assets";
import { OrangeBtn, PassInput } from "../../components";

const Profile = () => {
  return (
    <div className="profile-contait">
      <div className="profile">
        <div className="bg-img">
          <img src={logo} alt="swaqly logo" />
        </div>

        <div className="profile-add-img">
          <div className="form-group">
            <input type="file" name="addImg" id="addImg" />
          </div>

          <div className="add-img-setting">
            <p>asa.png</p>

            <p>size 30k</p>

            <div className="img-btns">
              <label htmlFor="addImg">Browse</label>

              <a href="#">Done</a>
            </div>
          </div>
        </div>

        <form action="">
          <div className="profile-form">
            <div className="form-group">
              <label className="costum-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="costum-input"
              />
            </div>

            <div className="form-group">
              <label className="costum-label" htmlFor="email">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="costum-input"
              />
            </div>

            <div className="form-group">
              <label className="costum-label" htmlFor="mobileNumber">
                Mobile number
              </label>
              <input
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Enter your Mobile"
                className="costum-input"
              />
            </div>

            <div className="form-group">
              <label className="costum-label" htmlFor="address">
                address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your name"
                className="costum-input"
              />
            </div>

            <div className="form-group">
              <label className="costum-label" htmlFor="password">
                password
              </label>

              <PassInput id={"password"} />
            </div>

            <div className="form-group">
              <label className="costum-label" htmlFor="location">
                location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Enter your location"
                className="costum-input"
              />
            </div>
          </div>

          <OrangeBtn className={"profile-form-btn"}>confirm</OrangeBtn>
        </form>
      </div>
    </div>
  );
};

export default Profile;
