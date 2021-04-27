import React from 'react';
import { ICountriesProps } from '../../views/home/types';
import { ICardCountries } from './types';

import { Container } from './styles';
import { useHistory } from 'react-router';

const CardCountries: React.FC<ICardCountries> = ({data}) => {
  const history = useHistory();

  const handleGoToDetailsPage = (country : ICountriesProps) => {
      history.push(`/details/${country.alpha3Code}`)
  }
  return (
    <>
    {data && data.length > 0 && data.map((country: ICountriesProps) => (
        <Container key={country.numericCode} onClick={() => handleGoToDetailsPage(country)}>
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