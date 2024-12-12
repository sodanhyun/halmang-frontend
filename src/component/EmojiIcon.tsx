import { getEmoji } from "../utils";

const EmojiIcon = ({ e_id }: { e_id: string }) => {
  const emoji = getEmoji(e_id);

  return <div>{emoji}</div>;
};

export default EmojiIcon;
