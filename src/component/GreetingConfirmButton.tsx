import React from "react";
import { useNavigate } from "react-router-dom";

interface GreetingConfirmButtonProps {
  onClick?: () => void;
  buttonText: string;
  onNavigate?: () => void;
}

const GreetingConfirmButton: React.FC<GreetingConfirmButtonProps> = ({ onClick, buttonText, onNavigate }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
      navigate("/send");
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-[57px] bg-illustration-yellow hover:bg-blue-950 active:bg-blue-950 rounded-[20px] flex justify-center items-center gap-2.5 transition-colors duration-200">
      <div className="text-center text-blue-50 text-body3Bold font-['Pretendard']">{buttonText}</div>
    </button>
  );
};

export default GreetingConfirmButton;
