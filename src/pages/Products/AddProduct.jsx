import { Add, Done } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { logo } from "../../assets";
import { OrangeBtn, SelctCategory } from "../../components";
import { useAddProductMutation } from "../../server/prouctApi";
import "./style.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [addItem, setAddItem] = useState(false);

  const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleAddItem = async (e) => {
    await addProduct({
      name,
      price,
      category,
      data: new Date().toLocaleDateString()
    });
    e.preventDefault();
    setAddItem(true);
  };

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setPrice("");
      setCategory("");
    }

    var second = setTimeout(() => {
      setAddItem(false);
    }, 5000);

    return () => {
      clearTimeout(second);
    };
  }, [isSuccess]);

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
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">price</label>

                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="300 $"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">category</label>

                <div className="add-category">
                  <SelctCategory handleCategory={handleCategory} />
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
