import axios from "axios";
import { EmojiCount, EmojiHistoryResponse, EmojiReadResponse, EmojiSendRequest } from "../type/emoji";
import { VITE_REACT_APP_BASE_URL } from "../constants";

const BASE_URL = VITE_REACT_APP_BASE_URL;

// 안읽은 emoji 받아오기
export const getUnreadEmojis = async (): Promise<EmojiReadResponse[]> => {
  const response = await axios.get<EmojiReadResponse[]>(`${BASE_URL}/emoji/read`);
  return response.data;
};

// emoji 보내기
export const sendEmoji = async (data: EmojiSendRequest): Promise<void> => {
  await axios.post(`${BASE_URL}/emoji/send`, data);
};

// emoji 읽음 보내기
export const markEmojiAsRead = async (send_seq: number): Promise<void> => {
  await axios.post(`${BASE_URL}/emoji/read_detail/${send_seq}`);
};

// emoji 히스토리
export const getEmojiHistory = async (date: string): Promise<EmojiHistoryResponse[]> => {
  const response = await axios.get<EmojiHistoryResponse[]>(`${BASE_URL}/emoji/history`, {
    params: { date },
  });
  return response.data;
};

// emoji 카운트
export const getEmojiCount = async (): Promise<EmojiCount> => {
  const response = await axios.get<EmojiCount>(`${BASE_URL}/emoji/count`);
  return response.data;
};

// sse session
export const getSseSession = async (): Promise<String> => {
  const response = await axios.get<String>(`${BASE_URL}/sse`);
  return response.data;
};
