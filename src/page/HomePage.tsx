import { Banner } from "../component";
import GreetingButton from "../component/GreetingButton";
import { UserRole } from "../type/user";

const HomePage = () => {
  const handleButtonClick = () => {
    console.log("click");
  };

  return (
    <>
      {/* NOTE: 더미 데이터입니다. 이후 api 요청을 통해 값을 채워넣어야 합니다. */}
      <Banner role={UserRole.PARENT} count={3} />
      <h1>Home Page</h1>
      <GreetingButton onClick={handleButtonClick} />
    </>
  );
};

export default HomePage;
