import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Navbar, AsideBar } from "../components";
import { showAside } from "../store/reducers/appSlice";

const RootLayout = () => {
  const { aside } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />
      <main>
        <div className={`main-layout ${aside && "active"}`}>
          <aside className="aside-bar">
            <AsideBar />
          </aside>

          <div className="main-content container">
            <Outlet />

            <div
              role={"button"}
              onClick={() => dispatch(showAside())}
              className={`overlay ${aside && "oppenned"}`}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RootLayout;
