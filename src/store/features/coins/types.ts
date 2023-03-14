export interface CoinStructure {
  country: string;
  year: number;
  issuingVolume: number;
  feature: string;
  description: string;
  image: string;
  id: string;
}

export type CoinsStructure = CoinStructure[];

export interface CoinsFromApi {
  coins: CoinsStructure;
}
