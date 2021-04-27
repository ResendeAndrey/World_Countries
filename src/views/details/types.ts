export interface IParams {
  countryId: string; 
}

export interface ICountriesProps {
  name: string;
  capital: string; 
  region: string;
  population: number; 
  flag: string; 
  numericCode: string; 
  altSpellings: string[];
  alpha3Code: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: ICurrency[];
  languages: ILanguage[];
}
export interface ICurrency {
  code: string; 
}

export interface ILanguage {
  name: string;
}