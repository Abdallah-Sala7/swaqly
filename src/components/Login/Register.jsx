import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import PassInput from "../PassInput";
import OrangeBtn from "../Button/OrangeBtn";
import { useRegisterUserMutation } from "../../store/server/authApi";

const Register = () => {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [confirmPassValue, setConfirmPassValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const [registerUser, { data, isError, isLoading, error, isSuccess }] =
    useRegisterUserMutation();

  const handlePassword = (pass) => {
    setPassValue(pass);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser({
      name: nameValue,
      email: emailValue,
      password: passValue,
      password_confirmation: confirmPassValue,
      phoneNumber: numberValue,
      Adress: addressValue,
    });
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

      navigate("/");

      setErrorMsg("");
      setEmailValue("");
      setPassValue("");
    }
  }, [isError, isSuccess]);

  return (
    <div className="auth-form-contint">
      {isError && <p className="error">{errorMsg}</p>}
      <h1 className="auth-title">register</h1>

      <p className="auth-desc">Add your details to sign up</p>

      <form action="" method="post">
        <div className="form-group">
          <label className="costum-label" htmlFor="name">
            Name
          </label>

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
          <label className="costum-label" htmlFor="email">
            Email
          </label>

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
          <label className="costum-label" htmlFor="mob-number">
            Mobile number
          </label>

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
          <label className="costum-label" htmlFor="address">
            Address
          </label>

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
          <label className="costum-label" htmlFor="password">
            Password
          </label>

          <PassInput
            id={"password"}
            handlePass={handlePassword}
            value={passValue}
          />
        </div>

        <div className="form-group">
          <label className="costum-label" htmlFor="confirm-pass">
            Confirm password
          </label>

          <input
            type={"password"}
            id="confirm-pass"
            required
            className="form-control costum-input"
            value={confirmPassValue}
            onChange={(e) => setConfirmPassValue(e.target.value)}
          />
        </div>

        <div className="form-action">
          <OrangeBtn handleClick={handleRegister}>
            {isLoading ? "Loading..." : "Register"}
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
