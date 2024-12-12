import GreetingConfirmButton from "../component/GreetingConfirmButton";

const HomePage = () => {
  const handleButtonClick = () => {
    console.log("click");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <GreetingConfirmButton onClick={handleButtonClick} />
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;