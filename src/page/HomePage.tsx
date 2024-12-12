import GreetingButton from "../component/GreetingButton";

const HomePage = () => {
  const handleButtonClick = () => {
    console.log("click");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <GreetingButton onClick={handleButtonClick} /> */}
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;