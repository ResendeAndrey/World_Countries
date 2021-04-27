import { Button } from '@material-ui/core';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router';
import Loading from '../../components/Loading';
import { countryAPI } from '../../models/api';
import { ContainerDetails } from './style';
import { ICountriesProps, ICurrency, ILanguage, IParams } from './types';



const Details: React.FC = () => {
  const {countryId} = useParams() as IParams
  const [country, setCountry] = useState<ICountriesProps>()
  const [moreCountries, setMoreCountries] = useState<ICountriesProps[]>([] as ICountriesProps[])
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      await countryAPI.get(`/alpha/${countryId}`, {
        onDownloadProgress: (progressEvent) => {
          let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.timeStamp);
          console.log(progressEvent)
        }
      }).then(async (response: AxiosResponse) => {
        if(response) {
          setCountry(response.data)
          await countryAPI.get(`/region/${response.data.region}`).then((responseMoreCountries: AxiosResponse) => {
            const newData = responseMoreCountries.data.filter((moreCountries:ICountriesProps) => {
              return moreCountries.name !== response.data.name
            })
            
            setMoreCountries(newData.slice(0, 10))
          })
          setIsLoading(false)
        }
      })
    }
    getData()
  },[countryId])
  
  const handleSendToPageDetails = (country: ICountriesProps) => {
    history.push(`/details/${country.alpha3Code}`)
  }
  const handleSendToHomePage = () => {
    history.push('/')
  }
  
  return (
    
    <ContainerDetails>
       <Helmet title={`Detalhes ${country?.name} | World Countries`}/>
      {country && !isLoading ? (
        <>
        <div>
          <Button className="buttonGoBack" onClick={handleSendToHomePage}>Back</Button>
        </div>
          <div className="countryContainer">
          <div className="countryImage">
            <img src={country.flag} alt={country.name}/>
          </div>
          <div className="countryContainerDetails">
            <h1>{country.name}</h1>
            <div className="countryInfo">
              <div >
                <h3>Capital: <span>{country.capital}</span> </h3>
                <h3>Region: <span>{country.region}</span></h3>
                <h3>Sub Region: <span>{country.subregion}</span> </h3>
                <h3>Population: <span>{country.population}</span> </h3>
              </div>
              <div>
                <h3>Top Level Domain: <span>{country.topLevelDomain.map((level : string) => level)}</span></h3>            
                <h3>Currency: <span>{country.currencies?.map((currency: ICurrency) => currency.code)}</span></h3>            
                <h3>Language: <span>{country.languages?.map((language: ILanguage) => language.name)}</span></h3>            
              </div> 
            </div>
          </div>        
        </div>
        <div className="moreRegion">
            <span> More countries from {country.name} region</span>
            <div className="moreCountries">
              {moreCountries && moreCountries.length > 0 && moreCountries.map((country: ICountriesProps) => (
                <Button className="buttonMoreCountries" onClick={() => handleSendToPageDetails(country)}>{country.name}</Button>
              ))}
            </div>
        </div> 
        
     </>
      ): (        
        <Loading />
      )}
    </ContainerDetails>   
    
  );
}

export default Details;