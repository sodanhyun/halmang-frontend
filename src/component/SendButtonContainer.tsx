import React from "react";
import CancelButton from "./CancelButton";
import SendButton from "./SendButton";

interface SendButtonContainerProps {
    onCancelClick: () => void;
    onSendClick: () => void;
}

const SendButtonContainer: React.FC<SendButtonContainerProps> = ({
    onCancelClick,
    onSendClick,
}) => {
    return (
        <div className="flex gap-4 w-full">
            <div className="flex-1">
                <CancelButton onClick={onCancelClick} />
            </div>
            <div className="flex-1">
                <SendButton onClick={onSendClick} />
            </div>
        </div>
    );
};

export default SendButtonContainer;