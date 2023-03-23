import "./style.css";
import { storeImg } from "../../assets";
import { useDeleteStoreMutation } from "../../server/storeApi";

const StoreCard = ({item}) => {
  const [deleteStore] = useDeleteStoreMutation();
  return (
    <div className="store-card"
      onClick={() => {
        deleteStore({id:item.id});
      }}

    >
      <div className="card-img">
        <img src={storeImg} alt={item.name} loading="lazy" />
      </div>

      <div className="card-body">
        <h1 className="store-name">{item.name}</h1>

        <h2 className="store-location">{item.location}</h2>
      </div>
    </div>
  );
};

export default StoreCard;
