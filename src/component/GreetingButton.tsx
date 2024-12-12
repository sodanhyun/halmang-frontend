import React from "react";

interface GreetingButtonProps {
    onClick: () => void;
}

const GreetingButton: React.FC<GreetingButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-[342px] h-[62px] px-[84px] py-[23px] bg-[#2a2a35] hover:bg-[#f4b756] active:bg-[#f4b756] rounded-[20px] flex justify-center items-center gap-2.5 transition-colors duration-200"
        >
            <div className="text-center text-[#f6f6f9] text-base font-bold font-['Pretendard'] leading-normal">
                안부 확인하기
            </div>
        </button>
    );
};

export default GreetingButton;