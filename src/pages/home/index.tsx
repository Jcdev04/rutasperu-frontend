import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url('/img/background-home.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <div className="w-full flex gap-10 items-center justify-center"></div>
    </div>
  );
};

export default Home;
