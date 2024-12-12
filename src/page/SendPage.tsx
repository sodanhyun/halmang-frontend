import { useState } from "react";
import ImageSelector from "../component/ImageSelector";
import GreetingSendButton from "../component/GreetingSendButton";
import MessageIcon from "../../static/images/Message.svg";
import SendModal from "../component/SendModal";
import { sendEmoji } from "../api/emoji";
import choseDefault from "../../static/images/choose-default.svg";
import { cardImages } from "../utils/imageMapping";

const SendPage = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { receiver_id } = useAuthStore();

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

  const handleConfirmSend = async () => {
    if (selectedCardId === null) {
      alert("카드를 선택해주세요!");
      return;
    }

    if (!receiver_id) {
      alert("수신자 정보가 없습니다. 다시 시도해주세요.");
      return;
    }

    try {
      const requestData = {
        e_id: selectedCardId - 1,
        receiver_id,
      };
      await sendEmoji(requestData);
      alert("안부를 전송했습니다!");
      setIsModalVisible(false);
    } catch (error) {
      console.error("전송 실패:", error);
      alert("안부 전송에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      <div className="flex items-center justify-center mt-6 mb-6 text-body1SemiBold text-primary-brown-950">
        <span className="mr-[8px]">어떤 안부를 전할까요?</span>
        <img src={MessageIcon} alt="Message Icon" className="w-5 h-5" />
      </div>
      <ImageSelector onSelect={setSelectedCardId} />
      <div className="mt-auto w-full">
        <GreetingSendButton onClick={handleSendClick} isDisabled={selectedCardId === null} />
      </div>
      {isModalVisible && (
        <SendModal
          visible={isModalVisible}
          onClose={handleCloseModal}
          onConfirm={handleConfirmSend}
          selectedImage={selectedCardId !== null ? cardImages[selectedCardId - 1].largeSrc : choseDefault}
        />
      )}
    </div>
  );
};

export default SendPage;
