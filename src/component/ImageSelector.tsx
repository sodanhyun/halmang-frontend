import React, { useState } from "react";
import { cardImages } from "../utils/imageMapping";

interface ImageSelectorProps {
    onSelect: (selectedId: number | null) => void;
}

const ImageSelector: React.FC<ImageSelectorProps> = ({ onSelect }) => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleImageClick = (id: number) => {
        setSelectedCard(id);
        onSelect(id);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-3 mb-6">
                {cardImages.map((card) => (
                    <img
                        key={card.id}
                        src={selectedCard === card.id ? card.activeSrc : card.inactiveSrc}
                        alt={`Card ${card.id}`}
                        className="w-[106px] h-[106px] cursor-pointer"
                        onClick={() => handleImageClick(card.id)}
                    />
                ))}
            </div>
            {selectedCard !== null && (
                <div className="mt-4">
                    <img
                        src={cardImages.find((card) => card.id === selectedCard)?.largeSrc}
                        alt={`Selected Card ${selectedCard}`}
                        className="w-[358px] h-[334px]"
                    />
                </div>
            )}
        </div>
    );
};

export default ImageSelector;