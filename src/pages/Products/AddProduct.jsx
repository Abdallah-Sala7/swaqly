import { Add, Done } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { logo } from "../../assets";
import { OrangeBtn, SelctCategory } from "../../components";
import "./style.css";

const AddProduct = () => {
  const [addItem, setAddItem] = useState(false);

  const handleAddItem = (e) => {
    setAddItem(true);
    e.preventDefault();
  };

  useEffect(() => {
    const second = setTimeout(() => {
      setAddItem(false);
    }, 5000);

    return () => {
      clearTimeout(second);
    };
  }, [addItem]);

  return (
    <div className="add-product-container">
      <div className="add-product">
        <div className="bg-img">
          <img src={logo} alt="logo" loading="lazy" />
        </div>

        {!addItem ? (
          <form action="">
            <div className="form-contint">
              <div className="form-group">
                <label htmlFor="img" className="file">
                  <span className="icon-add">
                    <Add />
                  </span>

                  <span className="title">Upload Image</span>
                </label>

                <input type="file" name="img" id="img" />
              </div>

              <div className="form-group">
                <label htmlFor="name">name</label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="product name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">price</label>

                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="300 $"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">category</label>

                <div className="add-category">
                  <SelctCategory />
                </div>
              </div>

              <OrangeBtn handleClick={handleAddItem} className={"add-btn"}>
                Add
              </OrangeBtn>
            </div>
          </form>
        ) : (
          <div className="add-product-action">
            <span className="icon-add">
              <Done />
            </span>

            <span className="title">done</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
