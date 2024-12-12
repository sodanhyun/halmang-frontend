import timeStream from "../../static/images/time_stream.svg";
import moon from "../../static/images/moon.svg";
import sun from "../../static/images/sun.svg";
import { UserRole } from "../type/user";
import { getStreamEmoji } from "../utils/emoji";

// NOTE: time은 HH:MM 형식으로 들어옵니다.
const HistoryContainer = ({ e_id, role, time }: { e_id: number; role: UserRole; time: string }) => {
  // TODO: 편안하우까 라면 moon emoji를 사용하고, 그 외에는 sun emoji를 사용하도록 구현
  // TODO: backend에서 타글락타글락, 소랑햄수다, 펜안하우꽈 각각 어떤 e_id를 사용하는지 확인.
  // TODO: 지금은 3번이 편안하우까 라고 가정.
  const Icon = e_id === 3 ? moon : sun;
  let [hour, min] = time.split(":").map(Number);
  const timedivide = hour < 12 ? "오전" : "오후";
  hour = hour % 12;
  const emojiImage = getStreamEmoji(e_id, role);

  return (
    <div className="grid grid-areas-stream grid-cols-stream grid-rows-stream w-full mb-[12px]">
      <img className="stream-in-line" src={timeStream} alt="timeStream" />
      <div className="stream-in-content ml-[10px]">
        <div className="w-full flex items-center text-labelSemiBold text-text-200 mb-[16px]">
          {timedivide} {hour}:{min}
          <img className="inline ml-[8px]" src={Icon} alt="Icon" />
        </div>
        <img src={emojiImage} alt="emojiImage" />
      </div>
    </div>
  );
};

const HistoryStream = () => {
  return (
    <div className="flex flex-col items-center h-[503px] overflow-y-auto">
      <HistoryContainer e_id={2} role={UserRole.CHILD} time="20:49" />
      <HistoryContainer e_id={1} role={UserRole.PARENT} time="20:49" />
      <HistoryContainer e_id={2} role={UserRole.CHILD} time="20:49" />
      <HistoryContainer e_id={1} role={UserRole.PARENT} time="20:49" />
      <HistoryContainer e_id={1} role={UserRole.PARENT} time="20:49" />
    </div>
  );
};

export default HistoryStream;
