import { Delete, Edit } from '@mui/icons-material';
import './style.css'

const Table = () => {
  const data = [
    {
      name: "product 1",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 2",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 3",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 1",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 2",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 3",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 1",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 2",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 3",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 1",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 2",
      price: "300$",
      data: "2021-10-10",
    },
    {
      name: "product 3",
      price: "300$",
      data: "2021-10-10",
    },
  ]

  return (
    <div className="table">
      <table className="styled-table">
        <thead className='table-header'>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.data}</td>
              <td className='table-btns-container'>
                <a 
                  className="table-btn"
                  href="#"
                  onClick={() => console.log("edit")}
                >
                  <Edit />
                </a>
                
                <a 
                  className="table-btn"
                  href="#"
                  onClick={() => console.log("delete")}
                >
                  <Delete />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
