import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import { useState } from "react";
import "./style.css";

const PassInput = ({ handlePass, placeholder, id, value }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="pass-contint">
      <input
        type={showPass ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        required
        value={value}
        className="costum-input pass-input"
        onChange={(e) => handlePass(e.target.value)}
      />

      <span
        className="show-pass-btn"
        role={"button"}
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
      </span>
    </div>
  );
};

export default PassInput;
