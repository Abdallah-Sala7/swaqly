import "./style.css";
import { useEffect, useState } from "react";
import { Add, Done } from "@mui/icons-material";
import { OrangeBtn, SelctCategory } from "../../components";

const AddItem = ({
  handleName,
  handleImage,
  handlePrice,
  handleCategory,
  handleAddItem,
  handleLocation,
  isSuccess,
  isLoading,
  type,
}) => {
  const [addItem, setAddItem] = useState(false);

  useEffect(() => {
    var second = setTimeout(() => {
      setAddItem(false);
    }, 1000);

    return () => {
      clearTimeout(second);
    };
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem();
    setAddItem(true);
  };

  return (
    <>
      {!addItem ? (
        <form action="" onSubmit={handleSubmit}>
          <div className="form-contint">
            <div className="form-group">
              <label htmlFor="img" className="file">
                <span className="icon-add">
                  <Add />
                </span>

                <span className="title">Upload Image</span>
              </label>

              <input
                type="file"
                name="img"
                id="img"
                onChange={(e) => handleImage(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">name</label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="product name"
                onChange={(e) => handleName(e.target.value)}
              />
            </div>

            {type === "product" && (
              <div className="form-group">
                <label htmlFor="price">price</label>

                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="300 $"
                  onChange={(e) => handlePrice(e.target.value)}
                />
              </div>
            )}

            {type === "store" && (
              <div className="form-group">
                <label htmlFor="location">location</label>

                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="cairo"
                  onChange={(e) => handleLocation(e.target.value)}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="category">category</label>

              <div className="add-category">
                <SelctCategory handleCategory={handleCategory} />
              </div>
            </div>

            <OrangeBtn className={"add-btn"} isLoading={isLoading}>
              {isLoading ? "loading..." : "Add"}
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
    </>
  );
};

export default AddItem;
