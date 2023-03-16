export interface CoinStructure {
  country: string;
  year: number;
  issuingVolume: number;
  feature: string;
  description: string;
  image: string;
  id: string;
  owner: string;
}

export type CoinsStructure = CoinStructure[];

export interface CoinsState {
  coins: CoinsStructure;
}
