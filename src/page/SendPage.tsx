import React from "react";
import SendButtonContainer from "../component/SendButtonContainer";

const SendPage = () => {
  const handleCancelClick = () => {
    console.log("다시 고르기 버튼 클릭");
  };

  const handleSendClick = () => {
    console.log("보내기 버튼 클릭");
  };

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">안부 보내기</h1>
      <SendButtonContainer onCancelClick={handleCancelClick} onSendClick={handleSendClick} />
    </div>
  );
};

export default SendPage;