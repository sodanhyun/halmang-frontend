import { streamEmojiMap } from "../constants/emoji";
import useAuthStore from "../store/useAuthStore";

const getStreamEmoji = (e_id: number, sender_id: string): string => {
  const { userType } = useAuthStore.getState();
  if (!userType) return "";

  const userRole = userType.name;
  const emojiSet = streamEmojiMap[e_id - 1];

  return sender_id === userRole ? emojiSet[1] : emojiSet[0];
};

export { getStreamEmoji };
