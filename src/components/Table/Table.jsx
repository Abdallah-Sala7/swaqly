import { useState } from "react";
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
              <td>Loading...</td>
            </tr>
          ) : data.length > 0 ? (
            data.map((item) => <TableBody key={item.id} item={item} />)
          ) : (
            <tr>
              <td>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
