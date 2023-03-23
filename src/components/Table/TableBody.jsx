import { Delete, Done, Edit } from "@mui/icons-material";
import { useState } from "react";
import {
  useDeleteProductMutation,
  useEditProductMutation,
} from "../../server/prouctApi";

const TableBody = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);

  const [editProduct] = useEditProductMutation();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleOpenEdit = (id) => {
    if (isEdit) {
      setIsEdit(false);
      editProduct({ id, name, price });
    } else {
      setIsEdit(true);
    }
  };
  return (
    <tr>
      <td>
        {isEdit ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="edit-input"
          />
        ) : (
          name
        )}
      </td>

      <td>
        {isEdit ? (
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="edit-input"
          />
        ) : (
          price + " $"
        )}
      </td>

      <td>{item.data}</td>

      <td className="table-btns-container">
        <button
          className="table-btn"
          href="#"
          onClick={(e) => handleOpenEdit(item.id)}
        >
          {isEdit ? <Done /> : <Edit />}
        </button>

        <button
          className="table-btn"
          href="#"
          onClick={() => deleteProduct({id:item.id})}
          disabled={isLoading}
        >
          <Delete />
        </button>
      </td>
    </tr>
  );
};

export default TableBody;
