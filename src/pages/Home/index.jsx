import "./style.css";
import { HomeChart, StoreCard } from "../../components";
import { logo } from "../../assets";

const Home = () => {
  return (
    <section>
      <div className="chart-container">
        <HomeChart />
      </div>

      <div className="store-container">
        <div className="store-cover">
          <div className="bg-img">
            <img src={logo} alt="swaqly logo" loading="lazy" />
          </div>

          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
          <StoreCard />
        </div>
      </div>
    </section>
  );
};

export default Home;
