import { useState } from "react";
import { AddItem, AddProductContainer } from "../../components";
import { useAddProductMutation } from "../../store/server/prouctApi";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [addProduct, { isLoading, isSuccess }] = useAddProductMutation();

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleName = (name) => {
    setName(name);
  };

  const handlePrice = (price) => {
    setPrice(price);
  };

  const handleImage = (image) => {
    setImage(image);
  };

  const handleAddItem = async (e) => {
    await addProduct({
      name,
      price,
      category,
      data: new Date().toLocaleDateString(),
      image,
    });

    setName("");
    setPrice("");
    setCategory("");
    setImage("");
  };

  return (
    <AddProductContainer>
      <AddItem
        handleAddItem={handleAddItem}
        handleCategory={handleCategory}
        handleName={handleName}
        handleImage={handleImage}
        handlePrice={handlePrice}
        isSuccess={isSuccess}
        isLoading={isLoading}
        type={"product"}
      />
    </AddProductContainer>
  );
};

export default AddProduct;
