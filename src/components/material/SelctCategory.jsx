import { useState } from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    position: "relative",
    fontSize: 15,
    color: "#495057",
    fontFamily: ["PingFang"].join(","),
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
}));

export default function SelctCategory({ handleCategory, dark }) {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
    handleCategory(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ width: "100%" }} variant="standard">
        <NativeSelect
          id="demo-customized-select-native"
          value={category}
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{
            backgroundColor: dark ? "#F2F2F2E5" : "#fff",
            width: "100%",
            padding: "10px 26px 10px 12px",
            height: 45,
            border: "1px solid #ced4da",
            borderRadius: '8px',
          }}
        >
          <option aria-label="None" value="">
            None
          </option>
          <option value={"vegetables"}>vegetables</option>
          <option value={"fruits"}>fruits</option>
          <option value={"other"}>other</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
