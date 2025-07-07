import Header from "../../components/Header";

const Top = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url('/img/background-top.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header color="white" />
      <h1 className="text-white text-4xl font-bold">Top Page</h1>
    </div>
  );
};

export default Top;
