import React from "react";

interface GreetingSendButtonProps {
    onClick: () => void;
    isDisabled: boolean;
}

const GreetingSendButton: React.FC<GreetingSendButtonProps> = ({ onClick, isDisabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={`w-full h-[62px] rounded-[20px] flex justify-center items-center gap-2.5 transition-colors duration-200 ${isDisabled
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-illustration-yellow hover:bg-blue-950 active:bg-blue-950"
                }`}
        >
            <div className="text-center text-blue-50 text-body3Bold font-['Pretendard']">
                안부 보내기
            </div>
        </button>
    );
};

export default GreetingSendButton;