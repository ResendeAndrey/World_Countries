import React from 'react';
import { ICountriesProps } from '../../views/home/types';
import { ICardCountries } from './types';

import { Container } from './styles';

const CardCountries: React.FC<ICardCountries> = ({data}) => {
  return (
    <>
    {data && data.length > 0 && data.map((country: ICountriesProps) => (
        <Container key={country.numericCode}>
          <div><img src={country.flag} alt={country.name}/></div>
          <div>
            <h2>{country.name}</h2>
            <p>{`Population: ${country.population}`}</p>
            <p>{`Region: ${country.region}`}</p>
            <p>{`Capital: ${country.capital}`}</p>
          </div>
         
        </Container>
         
        ))}
    </>
  );
}

export default CardCountries;