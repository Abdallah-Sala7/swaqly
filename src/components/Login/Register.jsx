import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import PassInput from "../PassInput";
import OrangeBtn from "../Button/OrangeBtn";

const Register = () => {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="auth-form-contint">
      <h1 className="auth-title">register</h1>

      <p className="auth-desc">Add your details to sign up</p>

      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            required
            placeholder="abdallah"
            className="form-control costum-input"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            required
            placeholder="abdallah@gmail.com"
            className="form-control costum-input"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mob-number">Mobile number</label>

          <input
            type={"tel"}
            id="mob-number"
            required
            placeholder="+20 102 507 7437"
            className="form-control costum-input"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>

          <input
            type={"text"}
            id="address"
            required
            placeholder="+20 102 507 7437"
            className="form-control costum-input"
            value={addressValue}
            onChange={(e) => setAddressValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>

          <PassInput id={"password"} />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-pass">Confirm password</label>

          <PassInput id={"confirm-pass"} />
        </div>

        <div className="form-action">
          <OrangeBtn handleClick={handleRegister}>
            register
          </OrangeBtn>
        </div>
      </form>

      <div className="login-info">
        <p className="login-desc">
          Already have an account? <Link to={"/auth/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
