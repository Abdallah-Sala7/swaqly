import { Delete, Done, Edit } from "@mui/icons-material";
import { useState } from "react";
import { useDeleteProductMutation, useEditProductMutation } from "../../server/prouctApi";

const TableBody = ({ item }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);

  const [editProduct] = useEditProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleOpenEdit = (e, id) => {
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
        <a
          className="table-btn"
          href="#"
          onClick={(e) => handleOpenEdit(e, item.id)}
        >
          {isEdit ? <Done /> : <Edit />}
        </a>

        <a className="table-btn" href="#" onClick={() => deleteProduct({id:item.id})}>
          <Delete />
        </a>
      </td>
    </tr>
  );
};

export default TableBody;
