import { useNavigate } from "react-router-dom";
import { OrangeBtn, PassInput } from "../../components";

const ResetPass = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    navigate("/");
  };

  return (
    <div className="auth-form-contint">
      <h1 className="auth-title">New password</h1>

      <form action="" method="post">
        <div className="form-group">
          <label className="costum-label" htmlFor="password">
            password
          </label>

          <PassInput id={"password"} />
        </div>

        <div className="form-group">
          <label className="costum-label" htmlFor="confirm-pass">
            Confirm password
          </label>

          <PassInput id={"confirm-pass"} />
        </div>

        <div className="form-action">
          <OrangeBtn handleClick={handleLogin}>login</OrangeBtn>
        </div>
      </form>
    </div>
  );
};

export default ResetPass;
