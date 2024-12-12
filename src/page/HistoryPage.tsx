import { useEffect, useState } from "react";
import { CalendarDay } from "../component/Calendar";
import HistoryStream from "../component/HistoryStream";
import { format } from "date-fns";
import { getEmojiHistory } from "../api/emoji";
import { EmojiHistoryResponse } from "../type/emoji";
import HistoryBanner from "../component/HistoryBanner";

const formatDate = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

const fetchEmojiHistory = async (date: string) => {
  try {
    const response = await getEmojiHistory(date);
    return response;
  } catch (error) {
    console.error("Error fetching emoji history:", error);
    return [];
  }
};

const HistoryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<EmojiHistoryResponse[]>([]);

  useEffect(() => {
    const formattedDate = formatDate(currentDate);
    fetchEmojiHistory(formattedDate).then((response) => {
      setCount(response.length);
      setHistory(response);
    });
  }, []);

  useEffect(() => {
    const formattedDate = formatDate(currentDate);
    fetchEmojiHistory(formattedDate).then((response) => {
      setCount(response.length);
      setHistory(response);
    });
  }, [currentDate]);

  return (
    <div className="flex flex-col h-full">
      <CalendarDay yyyymmdd={format(currentDate, "yyyy.MM.dd")} setCurrentDate={setCurrentDate} />
      <HistoryBanner count={count} />
      <HistoryStream history={history} />
    </div>
  );
};

export default HistoryPage;
