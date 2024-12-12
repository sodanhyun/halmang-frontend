import React from "react";
import SendButtonContainer from "./SendButtonContainer";

interface SendModalProps {
    visible: boolean;
    onClose: () => void;
    selectedImage: string;
}

const SendModal: React.FC<SendModalProps> = ({ visible, onClose, selectedImage }) => {
    if (!visible) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-[390px] rounded-t-[20px] px-4 py-6 relative animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col items-center mb-4">
                    <img src="/static/images/orange.svg" alt="Orange Icon" className="w-8 h-8 mb-2" />
                    <div className="text-primary-brown-950 text-heading2SemiBold">
                        이 안부를 전할게요
                    </div>
                </div>
                <div className="flex justify-center mb-6">
                    <img src={selectedImage} alt="Selected Card" className="w-[358px] h-[334px]" />
                </div>

                <SendButtonContainer
                    onCancelClick={onClose}
                    onSendClick={() => alert("안부를 전송했습니다!")}
                />
            </div>
        </div>
    );
};

export default SendModal;