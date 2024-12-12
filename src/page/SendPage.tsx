import React, { useState } from "react";
import ImageSelector from "../component/ImageSelector";
import GreetingSendButton from "../component/GreetingSendButton";
import MessageIcon from "../../static/images/Message.svg";


const SendPage = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleSendClick = () => {
    if (selectedCardId !== null) {
      console.log(`카드 ${selectedCardId} 선택 후 전송!`);
      alert(`카드 ${selectedCardId} 선택 후 전송!`);
    } else {
      alert("카드를 선택해주세요!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <div className="flex items-center justify-center mt-6 mb-6 text-body1SemiBold text-primary-brown-950">
        <span className="mr-2">어떤 안부를 전할까요?</span>
        <img src={MessageIcon} alt="Message Icon" className="w-5 h-5" />
      </div>
      <ImageSelector onSelect={setSelectedCardId} />
      <div className="mt-auto w-full">
        <GreetingSendButton onClick={handleSendClick} />
      </div>
    </div>
  );
};

export default SendPage;