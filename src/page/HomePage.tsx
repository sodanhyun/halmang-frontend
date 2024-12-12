import { SetStateAction, useEffect, useState } from "react";
import Banner from "../component/Banner";
import cardBackground from "../../static/images/card-background.svg";
import GreetingConfirmButton from "../component/GreetingConfirmButton";
import { getEmojiCount, getUnreadEmojis, markEmojiAsRead } from "../api/emoji";
import { EmojiReadResponse } from "../type/emoji";
import { emojiMap } from "../constants";
import noHistoryImage from "../../static/images/no_history.svg";
import readAllEmojiImage from "../../static/images/read_all_emoji.svg";
// import ToastPopup from "../component/ToastPopup";

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


const HomePageCardStack: React.FC<HomePageCardStackProps & { count: number }> = ({
  emojis,
  setEmojis,
  count,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getUnreadEmojis()
      .then((res) => {
        setEmojis(res);
      })
      .catch((error) => {
        console.error("Error fetching unread emojis:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setEmojis]);

  if (isLoading) {
    return null;
  }

  if (count === 0) {
    return (
      <div className="flex items-center justify-center h-[426px]">
        <img src={noHistoryImage} alt="No History" className="w-[240px] h-[296px]" />
      </div>
    );
  }

  if (count > 0 && (!emojis || emojis.length === 0)) {
    return (
      <div className="flex items-center justify-center h-[426px]">
        <img src={readAllEmojiImage} alt="Read All Emoji" className="w-[240px] h-[296px]" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">
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

  useEffect(() => {
    getEmojiCount().then((res) => {
      setCount(res.count);
    });
  }, []);

  const handleButtonClick = () => {
    if (!emojis || emojis.length === 0) return;

    markEmojiAsRead(emojis[0].send_seq)
      .then(() => {
        setEmojis((prev) => (prev ? prev.slice(1) : []));
      })
      .catch((error) => {
        console.error("Error marking emoji as read:", error);
      });
  };

  const buttonText =
    count === 0 || (count > 0 && (!emojis || emojis.length === 0))
      ? "안부 보내기"
      : "안부 확인하기";

  const onNavigate =
    count === 0 || (count > 0 && (!emojis || emojis.length === 0))
      ? () => { }
      : undefined;

  return (
    <div className="flex flex-col h-full">
      <Banner count={count} />
      <h1 className="flex items-center h-[58px] text-primary-brown-950 text-heading1Bold">오늘 받은 안부</h1>
      <HomePageCardStack emojis={emojis} setEmojis={setEmojis} count={count} />
      <div className="mt-auto mb-[24px]">
        <GreetingConfirmButton
          onClick={handleButtonClick}
          buttonText={buttonText}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};

export default HomePage;