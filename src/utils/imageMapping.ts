export interface CardImage {
  id: number;
  inactiveSrc: string;
  activeSrc: string;
  largeSrc: string;
}

export const cardImages: CardImage[] = [
  {
    id: 1,
    inactiveSrc: "/static/images/card_01_sm_inactive.svg",
    activeSrc: "/static/images/card_01_sm_active.svg",
    largeSrc: "/static/images/card_01_md.svg",
  },
  {
    id: 2,
    inactiveSrc: "/static/images/card_02_sm_inactive.svg",
    activeSrc: "/static/images/card_02_sm_active.svg",
    largeSrc: "/static/images/card_02_md.svg",
  },
  {
    id: 3,
    inactiveSrc: "/static/images/card_03_sm_inactive.svg",
    activeSrc: "/static/images/card_03_sm_active.svg",
    largeSrc: "/static/images/card_03_md.svg",
  },
];
