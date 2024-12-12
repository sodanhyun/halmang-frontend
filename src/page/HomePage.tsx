import { SetStateAction, useEffect, useState } from "react";
import { Banner } from "../component";
import { UserRole } from "../type/user";
import cardBackground from "../../static/images/card-background.svg";
import card01Lg from "../../static/images/card_01_lg.svg";
import GreetingConfirmButton from "../component/GreetingConfirmButton";
import Bubbles from "../component/Bubbles";
import { getEmojiCount, getUnreadEmojis, markEmojiAsRead } from "../api/emoji";
import { EmojiHistoryResponse, EmojiReadResponse, EmojiSendRequest } from "../type/emoji";
import { emojiMap } from "../constants";

const HomePageCard = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-[310px] h-[398px]">
      <img src={src} alt={alt} />
    </div>
  );
};

interface HomePageCardStackProps {
  emojis: EmojiReadResponse[] | undefined;
  setEmojis: React.Dispatch<SetStateAction<EmojiReadResponse[] | undefined>>;
}

const HomePageCardStack: React.FC<HomePageCardStackProps> = ({ emojis, setEmojis }) => {

  useEffect(() => {
    getUnreadEmojis()
      .then((res) => {
        setEmojis(res);
      })
      .catch((error) => {
        console.error("Error fetching unread emojis:", error);
      });
  }, []);
  
  return (
    <div className="mb-[30px] flex items-center justify-center">
      <div className="stack">
        {emojis?.map((emoji) => (
          <HomePageCard key={emoji.e_id} src={emojiMap[emoji.e_id]} alt="emoji" />
        ))}
        <img className="w-[342px] h-[426px]" src={cardBackground} alt="cardBackground" />
      </div>
    </div>
  );
};

const HomePage = () => {
  const [emojis, setEmojis] = useState<EmojiReadResponse[]>();
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    if(!emojis) return;
    markEmojiAsRead(emojis[0].send_seq).then(() => {
      setEmojis([ ...emojis.slice(1) ]);
    }).catch((error) => {
      console.error("Error marking emoji as read:", error);
    });
  };

  useEffect(() => {
    getEmojiCount().then((res) => {
      setCount(res.count);
    })
  }, []);

  return (
    <>
      {/* TODO: UserRole 전역 상태관리로 바꿔야함 */}
      <Banner role={UserRole.PARENT} count={count} />
      <h1 className="text-primary-brown-950 text-heading1Bold">오늘 받은 안부</h1>
      <HomePageCardStack
        emojis={emojis}
        setEmojis={setEmojis}
      />

      <div>
        <GreetingConfirmButton onClick={handleButtonClick} />
      </div>
    </>
  );
};

export default HomePage;
