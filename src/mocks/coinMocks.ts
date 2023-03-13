import {
  CoinsFromApi,
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
    "https://www.ecb.europa.eu/euro/coins/comm/shared/img/comm_2018_andorra_70yrs_declhumrights.jpg",
};

export const mockCoins: CoinsStructure = [coinAndorra2018];

export const mockCoinsFromApi: CoinsFromApi = { coins: mockCoins };
