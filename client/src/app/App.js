import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/ui/navBar/navBar";
import AppLoader from "./components/ui/hoc/appLoader";
import routes from "./routes";
import { loadClientsList } from "./store/clients";
import { loadTrainersList } from "./store/trainers";
import { loadworkoutsList } from "./store/workouts";
import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadworkoutsList());
    dispatch(loadTrainersList());
    dispatch(loadClientsList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const element = useRoutes(routes());
  return (
    <>
      <AppLoader>
        <ConfigProvider locale={ruRU}>
          <NavBar />
          {element}
        </ConfigProvider>
      </AppLoader>
    </>
  );
}

export default App;
