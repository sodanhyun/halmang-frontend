import card01SmInactive from "../../static/images/card_01_sm_inactive.svg";
import card01SmActive from "../../static/images/card_01_sm_active.svg";
import card01Md from "../../static/images/card_01_md.svg";

import card02SmInactive from "../../static/images/card_02_sm_inactive.svg";
import card02SmActive from "../../static/images/card_02_sm_active.svg";
import card02Md from "../../static/images/card_02_md.svg";

import card03SmInactive from "../../static/images/card_03_sm_inactive.svg";
import card03SmActive from "../../static/images/card_03_sm_active.svg";
import card03Md from "../../static/images/card_03_md.svg";

export interface CardImage {
  id: number;
  inactiveSrc: string;
  activeSrc: string;
  largeSrc: string;
}

export const cardImages: CardImage[] = [
  {
    id: 1,
    inactiveSrc: card01SmInactive,
    activeSrc: card01SmActive,
    largeSrc: card01Md,
  },
  {
    id: 2,
    inactiveSrc: card02SmInactive,
    activeSrc: card02SmActive,
    largeSrc: card02Md,
  },
  {
    id: 3,
    inactiveSrc: card03SmInactive,
    activeSrc: card03SmActive,
    largeSrc: card03Md,
  },
];
