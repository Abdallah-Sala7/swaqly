import "./style.css";
import { HomeChart, StoreCard } from "../../components";
import { logo } from "../../assets";
import { useGetProductMutation } from "../../store/server/prouctApi";
import { useEffect } from "react";

const Home = () => {
  const [getStore, { data: stores, isError, error, isLoading, isSuccess }] =
    useGetProductMutation();

  useEffect(()=>{
    getStore({
      api_password: "ase1iXcLAxanvXLZcgh6tk"
    });
  },[])

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

          <div className="store-contint">
            {isError ? (
              <h1>{error.message}</h1>
            ) : isLoading ? (
              <h1>Loading...</h1>
            ) : (
              isSuccess &&
              stores.map((item) => <StoreCard key={item.id} item={item} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
