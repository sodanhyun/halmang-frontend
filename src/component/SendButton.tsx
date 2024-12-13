import React from "react";

interface SendButtonProps {
  onClick: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-[62px] bg-illustration-yellow hover:bg-blue-950 active:bg-blue-950 rounded-[20px] flex justify-center items-center gap-2.5 transition-colors duration-200">
      <div className="text-center text-blue-50 text-body3Bold font-['Pretendard']">보내기</div>
    </button>
  );
};

export default SendButton;
