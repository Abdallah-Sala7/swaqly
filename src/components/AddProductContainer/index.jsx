import "./style.css";
import { logo } from "../../assets";


const AddProductContainer = ({children}) => {
  return (
    <div className="add-product-container">
      <div className="add-product">
        <div className="bg-img">
          <img src={logo} alt="logo" loading="lazy" />
        </div>

        {children}
      </div>
    </div>
  );
};

export default AddProductContainer;
