import { emojiMap } from "../constants";

const getEmoji = (e_id: string) => {
  const emoji = emojiMap[e_id];

  if (!emoji) {
    return e_id;
  }

  return emoji;
};

export { getEmoji };
