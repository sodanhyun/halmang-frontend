import React, { useState } from "react";
import { cardImages } from "../utils/imageMapping";
import chooseDefault from "../../static/images/choose-default.svg";

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
      <div>
        {selectedCard !== null ? (
          <img
            src={cardImages.find((card) => card.id === selectedCard)?.largeSrc}
            alt={`Selected Card ${selectedCard}`}
            className="w-[358px] h-[334px]"
          />
        ) : (
          <img src={chooseDefault} alt="Default Image" className="w-[358px] h-[334px]" />
        )}
      </div>
    </div>
  );
};

export default ImageSelector;
