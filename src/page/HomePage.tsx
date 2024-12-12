import { SetStateAction, useCallback, useEffect, useState } from "react";
import Banner from "../component/Banner";
import cardBackground from "../../static/images/card-background.svg";
import GreetingConfirmButton from "../component/GreetingConfirmButton";
import { getEmojiCount, getUnreadEmojis, markEmojiAsRead } from "../api/emoji";
import { EmojiReadResponse } from "../type/emoji";
import { emojiMap } from "../constants";
import noHistoryImage from "../../static/images/no_history.svg";
import readAllEmojiImage from "../../static/images/complete.svg";

const HomePageCard = ({
  src,
  alt,
  currentIndex,
  totalCount,
}: {
  src: string;
  alt: string;
  currentIndex: number;
  totalCount: number;
}) => {
  return (
    <div className="w-[310px] h-[398px] relative">
      <img src={src} alt={alt} />
      <div className="absolute top-2 right-[1.5rem] w-[65px] h-[30px] px-[17px] py-1.5 opacity-80 bg-[#fcfcfc] rounded-[100px] flex flex-col justify-center items-center">
        <div className="flex justify-start items-center gap-1">
          <div className="text-center text-[#565873] text-sm font-bold font-['Pretendard'] leading-tight">
            {currentIndex}
          </div>
          <div className="text-center text-[#d7d8e0] text-sm font-medium font-['Pretendard'] leading-tight">
            /
          </div>
          <div className="text-center text-[#d7d8e0] text-sm font-medium font-['Pretendard'] leading-tight">
            {totalCount}
          </div>
        </div>
      </div>
    </div>
  );
};

interface HomePageCardStackProps {
  emojis: EmojiReadResponse[] | undefined;
  setEmojis: React.Dispatch<SetStateAction<EmojiReadResponse[] | undefined>>;
  totalCount: number;
  currentIndex: number;
}

const HomePageCardStack: React.FC<HomePageCardStackProps & { count: number }> = ({
  emojis,
  setEmojis,
  count,
  totalCount,
  currentIndex,
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
  }, []);

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
        {emojis
          ?.slice()
          .sort((a, b) => b.send_seq - a.send_seq)
          .map((emoji, index) => (
            <HomePageCard
              key={`${emoji.e_id}-${emoji.send_seq}`}
              src={emojiMap[emoji.e_id]}
              alt="emoji"
              currentIndex={currentIndex}
              totalCount={totalCount}
            />
          ))}
        <img className="w-[342px] h-[436px]" src={cardBackground} alt="cardBackground" />
      </div>
    </div>
  );
};

const HomePage = () => {
  const [emojis, setEmojis] = useState<EmojiReadResponse[]>();
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getUnreadEmojis().then((res) => {
      setEmojis(res);
      setTotalCount(res.length);
    });
  }, []);


  useEffect(() => {
    getEmojiCount().then((res) => {
      setCount(res.count);
    });
  }, []);

  const handleButtonClick = useCallback(() => {
    if (!emojis || emojis.length === 0) return;

    const sortedEmojis = [...emojis].sort((a, b) => b.send_seq - a.send_seq);

    markEmojiAsRead(sortedEmojis[0].send_seq)
      .then(() => {
        setEmojis((prev) =>
          prev
            ? prev.filter((emoji) => emoji.send_seq !== sortedEmojis[0].send_seq)
            : []
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      })
      .catch((error) => {
        console.error("Error marking emoji as read:", error);
      });
  }, [emojis]);

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
      <h1 className="flex items-center h-[58px] text-primary-brown-950 text-heading1Bold">
        오늘 받은 안부
      </h1>
      <HomePageCardStack
        emojis={emojis}
        setEmojis={setEmojis}
        totalCount={totalCount}
        currentIndex={currentIndex}
        count={count}
      />
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
