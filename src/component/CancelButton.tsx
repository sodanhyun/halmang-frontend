import React from "react";

interface CancelButtonProps {
    onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full h-[62px] bg-gray-200 hover:bg-blue-950 active:bg-blue-950 rounded-[20px] flex justify-center items-center gap-2.5 transition-colors duration-200"
        >
            <div className="text-center text-blue-50 text-body3Bold font-['Pretendard']">
                다시 고르기
            </div>

        </button>
    );
};

export default CancelButton;