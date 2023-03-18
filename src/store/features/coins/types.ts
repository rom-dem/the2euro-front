export interface CoinStructureData {
  country: string;
  year: number;
  issuingVolume: number;
  feature: string;
  description: string;
  image: string;
  owner: string;
}

export interface CoinStructure extends CoinStructureData {
  id: string;
}

export type CoinsStructure = CoinStructure[];

export interface CoinsState {
  coins: CoinsStructure;
}
