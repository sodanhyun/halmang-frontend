// 받은(안읽은) emoji 조회
export interface EmojiReadResponse {
  e_id: string;
  sender_id: string;
  receiver_id: string;
  reg_time: string;
}

// emoji 보내기
export interface EmojiSendRequest {
  e_id: string;
  receiver_id: string;
}

// 일별 히스토리 emoji 조회
export interface EmojiHistoryResponse {
  send_seq: string;
  e_id: string;
  sender_id: string;
  receiver_id: string;
  reg_time: string;
}
