export interface ICountriesProps {
  name: string;
  capital: string; 
  region: string;
  population: number; 
  flag: string; 
  numericCode: string; 
  altSpellings: string[];
  alpha3Code: string;
}

export interface FilterValuesProps {
  field: string; 
}