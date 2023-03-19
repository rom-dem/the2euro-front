import {
  CoinsState,
  CoinsStructure,
  CoinStructure,
} from "../store/features/coins/types";

export const coinAndorra2018: CoinStructure = {
  country: "Andorra",
  year: 2018,
  issuingVolume: 75000,
  feature: "70 years of the Universal Declaration of Human Rights",
  description:
    "The design of the coin depicts seven staircases (representing the seven parishes or administrative divisions of Andorra) in the shape of mountains that lead to the valley, where there is the name of the issuing country ‘ANDORRA’ and the year of issue ‘2018’. These staircases are, at the same time, the branches of a tree symbolizing humankind, of which Andorra is an integral part. 30 leaves come out",
  image:
    "https://res.cloudinary.com/ducqy82uw/image/upload/v1678818080/comm_2018_andorra_70yrs_declhumrights_we9ryh.webp",
  id: "andorra2018",
  owner: "didi",
};

export const coinMalta2020: CoinStructure = {
  country: "Malta",
  year: 2020,
  issuingVolume: 75000,
  feature: "70 years of the Universal Declaration of Human Rights",
  description:
    "The design of the coin depicts seven staircases (representing the seven parishes or administrative divisions of Andorra) in the shape of mountains that lead to the valley, where there is the name of the issuing country ‘ANDORRA’ and the year of issue ‘2018’. These staircases are, at the same time, the branches of a tree symbolizing humankind, of which Andorra is an integral part. 30 leaves come out",
  image:
    "https://res.cloudinary.com/ducqy82uw/image/upload/v1678818080/comm_2018_andorra_70yrs_declhumrights_we9ryh.webp",
  id: "malta2020",
  owner: "anna",
};

export const coinAndorra2018CreateForm = {
  country: "Andorra",
  year: "2018",
  issuingVolume: "75000",
  feature: "70 years of the Universal Declaration of Human Rights",
  description:
    "The design of the coin depicts seven staircases (representing the seven parishes or administrative divisions of Andorra) in the shape of mountains that lead to the valley, where there is the name of the issuing country ‘ANDORRA’ and the year of issue ‘2018’. These staircases are, at the same time, the branches of a tree symbolizing humankind, of which Andorra is an integral part. 30 leaves come out",
  image:
    "https://res.cloudinary.com/ducqy82uw/image/upload/v1678818080/comm_2018_andorra_70yrs_declhumrights_we9ryh.webp",
  owner: "",
};

export const mockCoins: CoinsStructure = [coinAndorra2018, coinMalta2020];

export const mockCoinsFromApi: CoinsState = {
  coins: mockCoins,
  coinDetail: coinAndorra2018,
};
