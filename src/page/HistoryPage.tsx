import { useEffect, useState } from "react";
import { Banner } from "../component";
import { CalendarDay } from "../component/Calendar";
import HistoryStream from "../component/HistoryStream";
import { format } from "date-fns";
import { getEmojiHistory } from "../api/emoji";
import { EmojiHistoryResponse } from "../type/emoji";
import HistoryBanner from "../component/HistoryBanner";

const formatDate = (date: Date) => {
  return format(date, "yyyy.MM.dd");
};

const HistoryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<EmojiHistoryResponse[]>([]);

  useEffect(() => {
    const selectedDate = currentDate.toISOString().split("T")[0];
    getEmojiHistory(selectedDate)
      .then((data) => {
        setHistory(data);
        setCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching emoji history:", error);
      });
  }, [currentDate]);

  return (
    <div className="flex flex-col h-full">
      <CalendarDay yyyymmdd={formatDate(currentDate)} setCurrentDate={setCurrentDate} />
      <HistoryBanner count={count} />
      <HistoryStream history={history} />
    </div>
  );
};

export default HistoryPage;