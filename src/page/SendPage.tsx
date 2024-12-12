import React, { useState } from "react";
import ImageSelector from "../component/ImageSelector";
import GreetingSendButton from "../component/GreetingSendButton";
import MessageIcon from "../../static/images/Message.svg";
import SendModal from "../component/SendModal";

const SendPage = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleSendClick = () => {
    if (selectedCardId !== null) {
      setIsModalVisible(true);
    } else {
      alert("카드를 선택해주세요!");
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <div className="flex items-center justify-center mt-6 mb-6 text-body1SemiBold text-primary-brown-950">
        <span className="mr-[8px]">어떤 안부를 전할까요?</span>
        <img src={MessageIcon} alt="Message Icon" className="w-5 h-5" />
      </div>
      <ImageSelector onSelect={setSelectedCardId} />
      <div className="mt-auto w-full">
        <GreetingSendButton
          onClick={handleSendClick}
          isDisabled={selectedCardId === null}
        />
      </div>
      {isModalVisible && (
        <SendModal
          visible={isModalVisible}
          onClose={handleCloseModal}
          selectedImage={
            selectedCardId !== null
              ? `/static/images/card_0${selectedCardId}_md.svg`
              : "/static/images/choose-default.svg"
          }
        />
      )}
    </div>
  );
};

export default SendPage;