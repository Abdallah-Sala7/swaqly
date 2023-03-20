import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrangeBtn from "../Button/OrangeBtn";

const ForgotPass = () => {
  const [emailValue, setEmailValue] = useState("");
  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    navigate("/auth/reset-password");
  };

  return (
    <div className="auth-form-contint">
      <h1 className="auth-title">Forgot password</h1>

      <form action="" method="post">
        <p className="auth-desc">
          Please enter your email to receive a link to create a new password via
          email
        </p>
        <div className="form-group">
          <label className="costum-label" htmlFor="email">
            Email
          </label>

          <input
            type="text"
            id="email"
            placeholder="ex@gmail.com"
            className="form-control costum-input"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="form-action">
          <OrangeBtn handleClick={handleSend}>send</OrangeBtn>
        </div>
      </form>
    </div>
  );
};

export default ForgotPass;
