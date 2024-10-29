import React from "react";
import Header from "../../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const navigate = useNavigation();
  return (
    <div>
      <Header />
      <main style={{ height: "100vh" }}>
        {navigate.state === "loading" ? "Loading" : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
export default Home;
