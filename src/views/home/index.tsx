import React, { useCallback, useEffect, useState } from 'react';
import { HomPage } from './style';


import dropDownOptions from './utils';
import { Search, Clear } from '@material-ui/icons'
import { InputAdornment, MenuItem, TextField  } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { FilterValuesProps, ICountriesProps } from './types';
import { countryAPI } from '../../models/api';
import { AxiosResponse } from 'axios';
import CardCountries from '../../components/cardCountries';
import Loading from '../../components/Loading';

const Home: React.FC = () => {
  const [countries, setCountries] = useState<ICountriesProps[]>([] as ICountriesProps[])
  const [searchCountries, setSearchCountries] = useState<ICountriesProps[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const rowsPerPage = 12
  const [filterValues, setFilterValues] = useState({} as FilterValuesProps)

  const dataRender = !searchCountries ? countries : searchCountries

  console.log(searchCountries)
  const urlAPi = filterValues.field ? `/region/${filterValues.field}` : '/all'

  useEffect(() => {
    setIsLoading(true)
     countryAPI.get(urlAPi).then((response: AxiosResponse) => {
      if(response){
        
        setCountries(response.data)
      }
      setIsLoading(false)
    })
  },[urlAPi])

  const handleChangePage = useCallback((event:any, newPage:number) => {
    setPage(newPage)
  },[])

  const indexOfLastPost = page * rowsPerPage;
  const indexOfFirstPost = indexOfLastPost - rowsPerPage;
  const currentPosts = dataRender.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.floor((dataRender.length / 12) +1)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value) {
      const countriesFiltered = countries.filter((country : ICountriesProps) => {
        return country.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setSearchCountries(countriesFiltered)
    } 
  }
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value) {
      setFilterValues({
        field: event.target.value
      })
    }

  }
  console.log(filterValues)
  return (
    <HomPage>
      <nav>
      <div className="inputSearch">    
        <TextField 
          id="filled"
          type="string"      
          InputProps={{
            startAdornment:<InputAdornment position="start">
            <Search className="searchIcon"/>
          </InputAdornment>,
          }} 
          onChange={handleSearch}
          variant="filled"   
          placeholder="Search for a country..."
          hiddenLabel
        />
        </div> 
        <div className="dropDownClearIcon">
          <TextField 
            id="standard-select-currency"
            select
            onChange={handleFilter}
            value={!filterValues.field ? "" : filterValues.field}
            label="Filter by Region..."
            variant="filled"
            className="inputDropDown" 

          > 
          {dropDownOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          {filterValues.field && (
            <Clear onClick={() => setFilterValues({} as FilterValuesProps)}/>
          )}
          
        </div>
        
      </nav>
     
      <section className="country_container">
        <div>
        {isLoading ? (
          <Loading />
        ) : (
          <CardCountries data={currentPosts}/>
        )}
        </div>
        <Pagination 
          defaultPage={0}
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          className="paginationComponent"
        />
      </section>
    </HomPage>
  );
}

export default Home;