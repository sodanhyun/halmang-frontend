import { useEffect, useState } from "react";
import { Banner } from "../component";
import { CalendarDay } from "../component/Calendar";
import HistoryStream from "../component/HistoryStream";
import { UserRole } from "../type/user";
import { format } from "date-fns";

const formatDate = (date: Date) => {
  return format(date, "yyyy.MM.dd");
};

const HistoryPage = () => {
  // NOTE: today포맷은 YYYY-MM-DD 형식으로 들어옵니다.
  const [currentDate, setCurrentDate] = useState(new Date("2021-10-01"));

  // useEffect(() => {
  //   setCurrentDate(new Date());
  // });

  return (
    <div className="flex flex-col h-full">
      <CalendarDay yyyymmdd={formatDate(currentDate)} setCurrentDate={setCurrentDate} />
      <Banner role={UserRole.PARENT} count={3} />
      <HistoryStream />
    </div>
  );
};

export default HistoryPage;
