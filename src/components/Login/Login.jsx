import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FacebookOutlined, Google } from "@mui/icons-material";

import "./style.css";
import PassInput from "../PassInput";
import OrangeBtn from "../Button/OrangeBtn";
import { useLoginUserMutation } from "../../store/server/authApi";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const [loginUser, { error, isError, isLoading, isSuccess, data }] =
    useLoginUserMutation();

  const handlePassword = (pass) => {
    setPassValue(pass);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser({ email: emailValue, password: passValue });
  };

  useEffect(() => {
    if (isError) {
      setErrorMsg(error?.data?.message);
    }

    if (isSuccess) {
      localStorage.setItem(
        "token",
        JSON.stringify({
          userLogin: true,
          token: data.user_token.access_token,
        })
      );

      setErrorMsg("");
      setEmailValue("");
      setPassValue("");
      navigate("/");
    }
  }, [isError, isSuccess]);

  return (
    <div className="auth-form-contint">
      {isError && <p className="error">{errorMsg}</p>}
      
      <h1 className="auth-title">login</h1>

      <form action="" method="post">
        <div className="form-group">
          <label className="costum-label" htmlFor="email">
            Email
          </label>

          <input
            type="text"
            id="email"
            required
            placeholder="ex@gmail.com"
            className="form-control costum-input"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="costum-label" htmlFor="password">
            Password
          </label>

          <PassInput id={"password"} handlePass={handlePassword} value={passValue} />
        </div>

        <div className="form-action">
          <OrangeBtn type="submit" handleClick={handleLogin}>
            {isLoading ? "Loading..." : "Login"}
          </OrangeBtn>
        </div>

        <Link to="/auth/forgot-password" className="forget-link">
          Forget password ?
        </Link>
      </form>

      <div className="or-line">
        <span>or</span>
        <hr />
      </div>

      <div className="social-login">
        <a href="#" className="social-login-btn google">
          <Google />

          <span>login with google</span>
        </a>

        <a href="#" className="social-login-btn facebook">
          <FacebookOutlined />

          <span>login with facebook</span>
        </a>
      </div>

      <div className="login-info">
        <p className="login-desc">
          By continuing, you agree to accept our Privacy Policy & Terms of
          Service.
        </p>

        <p className="login-desc">
          Don't have an account? <Link to={"/auth/register"}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
