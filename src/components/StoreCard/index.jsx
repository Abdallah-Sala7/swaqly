import "./style.css";
import { storeImg } from "../../assets";

const StoreCard = () => {
  return (
    <div className="store-card">
      <div className="card-img">
        <img src={storeImg} alt="" loading="lazy" />
      </div>

      <div className="card-body">
        <h1 className="store-name">my store</h1>

        <h2 className="store-location">cairo</h2>
      </div>
    </div>
  );
};

export default StoreCard;
