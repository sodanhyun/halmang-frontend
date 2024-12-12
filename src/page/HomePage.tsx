import { useEffect, useState } from "react";
import { Banner } from "../component";
import { UserRole } from "../type/user";
import cardBackground from "../../static/images/card-background.svg";
import card01Lg from "../../static/images/card_01_lg.svg";

const HomePageCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-[310px] h-[398px]">
      <img src={src} alt={alt} />
    </div>
  );
};

/* TODO: /api/emoji/read */
const HomePageCardStack = () => {
  return (
    <div className="mb-[30px] flex items-center justify-center">
      <div className="stack">
        <HomePageCard src={card01Lg} alt="card01Lg" />
        {/* NOTE: FIXED THIS COMPONENT */}
        <img className="w-[342px] h-[426px]" src={cardBackground} alt="cardBackground" />
      </div>
    </div>
  );
};

const HomePage = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    console.log("click");
  };

  // useEffect(() => {});

  return (
    <>
      {/* TODO: 더미 데이터입니다. 이후 api 요청을 통해 값을 채워넣어야 합니다. */}
      <Banner role={UserRole.PARENT} count={3} />
      <h1 className="text-primary-brown-950 text-heading1Bold">오늘 받은 안부</h1>
      <HomePageCardStack />
      <GreetingButton onClick={handleButtonClick} />
    </>
  );
};

export default HomePage;
