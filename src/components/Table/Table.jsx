import { Delete, Done, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  useDeleteProductMutation,
  useEditProductMutation,
  useGetProductMutation,
} from "../../store/server/prouctApi";
import "./style.css";

const Table = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [editProduct] = useEditProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const [getProduct, { isLoading, isSuccess, data }] = useGetProductMutation();

  useEffect(() => {
    getProduct({
      api_password: "ase1iXcLAxanvXLZcgh6tk",
    });
  }, []);

  return (
    <div className="table">
      <table className="styled-table">
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={5}>loading...</td>
            </tr>
          ) : data?.length > 0 ? (
            data?.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>

                <td>{item.price}</td>

                <td>{item.data}</td>

                <td className="table-btns-container">
                  <button
                    className="table-btn"
                    href="#"
                    onClick={(e) => console.log("edite")}
                  >
                    {isEdit ? <Done /> : <Edit />}
                  </button>

                  <button
                    className="table-btn"
                    href="#"
                    onClick={() =>
                      deleteProduct({
                        id: item.id,
                        api_password: "ase1iXcLAxanvXLZcgh6tk",
                      })
                    }
                  >
                    <Delete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
