import { useGetProductQuery } from "../../server/prouctApi";
import "./style.css";
import TableBody from "./TableBody";

const Table = () => {
  const { data, isLoading } = useGetProductQuery();

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
              <td colSpan={5}>
                loading...              
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item, i) => <TableBody key={i} item={item} />)
          ) : (
            <tr>
              <td colSpan={5}>
                No data found                
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
