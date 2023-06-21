import { useState } from "react";
import { AddItem, AddProductContainer } from "../../components";
import { useAddStoreMutation } from "../../store/server/storeApi";

const AddStore = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [addStore, { isLoading, isSuccess }] = useAddStoreMutation();

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleName = (name) => {
    setName(name);
  };

  const handleLocation = (location) => {
    setLocation(location);
  };

  const handleImage = (image) => {
    setImage(image);
  };

  const handleAddItem = async (e) => {
    await addStore({
      api_password: "ase1iXcLAxanvXLZcgh6tk",
      name,
      category,
      location,
      trader_id: 1,
      data: new Date().toLocaleDateString(),
      image,
    });

    setName("");
    setLocation("");
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
        handleLocation={handleLocation}
        isSuccess={isSuccess}
        isLoading={isLoading}
        type={"store"}
      />
    </AddProductContainer>
  );
};

export default AddStore;
