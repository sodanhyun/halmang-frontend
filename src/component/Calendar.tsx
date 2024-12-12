import leftArrow from "../../static/images/arrow_left.svg";
import rightArrow from "../../static/images/arrow_right.svg";
import { addDays, subDays } from "date-fns";

const CalendarDay = ({
  yyyymmdd,
  setCurrentDate,
}: {
  yyyymmdd: string;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const handlePrevDay = () => {
    setCurrentDate((prevDate) => subDays(prevDate, 1));
  };

  const handleNextDay = () => {
    setCurrentDate((prevDate) => addDays(prevDate, 1));
  };

  return (
    <div className="flex justify-center items-center gap-[32px] padding-x-[24px] h-[58px] mb-[24px]">
      <img className="cursor-pointer" src={leftArrow} onClick={handlePrevDay} alt="leftArrow" />
      <p className="text-body1SemiBold text-primary-brown-950">{yyyymmdd}</p>
      <img className="cursor-pointer" src={rightArrow} alt="rightArrow" onClick={handleNextDay} />
    </div>
  );
};

export { CalendarDay };
