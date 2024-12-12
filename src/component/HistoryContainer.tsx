import timeStream from "../../static/images/time_stream.svg";
import moon from "../../static/images/moon.svg";
import sun from "../../static/images/sun.svg";
import { getStreamEmoji } from "../utils/emoji";

const HistoryContainer = ({ e_id, sender_id, reg_time }: { e_id: number; sender_id: string; reg_time: string }) => {
  console.log("reg_imte", reg_time);
  const [hour, minute] = reg_time.split("T")[1].split(":").map(Number);
  const timedivide = hour < 12 ? "오전" : "오후";
  const displayHour = hour % 12 || 12;
  const Icon = e_id === 3 ? moon : sun;
  const emojiImage = getStreamEmoji(e_id, sender_id);

  return (
    <div className="grid grid-areas-stream grid-cols-stream grid-rows-stream w-full mb-[12px]">
      <img className="stream-in-line" src={timeStream} alt="timeStream" />
      <div className="stream-in-content ml-[10px]">
        <div className="w-full flex items-center text-labelSemiBold text-text-200 mb-[16px]">
          {timedivide} {displayHour}:{minute.toString().padStart(2, "0")}
          <img className="inline ml-[8px]" src={Icon} alt="Icon" />
        </div>
        <img src={emojiImage} alt="emojiImage" />
      </div>
    </div>
  );
};

export default HistoryContainer;
