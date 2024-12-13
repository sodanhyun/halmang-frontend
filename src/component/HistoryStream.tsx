import noHistoryImage from "../../static/images/no_history.svg";
import noPastGreetingImage from "../../static/images/no_past_greeting.svg";
import HistoryContainer from "./HistoryContainer";
import { EmojiHistoryResponse } from "../type/emoji";

interface HistoryStreamProps {
  isToday: boolean;
  history: EmojiHistoryResponse[];
}

const HistoryStream: React.FC<HistoryStreamProps> = ({ isToday, history }) => {
  if (history.length === 0) {
    if (isToday) {
      return (
        <div className="flex items-center justify-center h-[503px]">
          <img src={noHistoryImage} alt="No History" className="w-[240px] h-[296px]" />
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center h-[503px]">
        <img src={noPastGreetingImage} alt="No History" className="w-[240px] h-[296px]" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center h-[483px] overflow-y-auto grow">
      {history.map((entry) => (
        <HistoryContainer
          key={entry.send_seq}
          e_id={entry.e_id}
          sender_id={entry.sender_id}
          reg_time={entry.reg_time}
        />
      ))}
    </div>
  );
};

export default HistoryStream;
