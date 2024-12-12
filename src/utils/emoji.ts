import { emojiMap } from "../constants";
import { streamEmojiMap } from "../constants/emoji";
import { UserRole } from "../type/user";

const getEmoji = (e_id: number) => {
  const emoji = emojiMap[e_id];

  if (!emoji) {
    return undefined;
  }

  return emoji;
};

const getStreamEmoji = (e_id: number, role: UserRole) => {
  const emoji = streamEmojiMap[e_id][role];

  if (!emoji) {
    return undefined;
  }

  return emoji;
};

export { getEmoji, getStreamEmoji };
