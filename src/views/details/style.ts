import styled from 'styled-components';

export const ContainerDetails = styled.div`
  background-color: ${props => props.theme.theme.colors.background};
  max-width: 1120px;
  margin: 2rem auto; 
  @media only screen and (max-width: 1000px) {
          width: 90%;        
      }
  }
  .countryImage{
    display: flex;
    align-items: center;
    justify-content: center;
      img {
        width: 32rem;
        height: 25rem;
        object-fit: cover;
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.59);
        
      }
      
      
  }
  .countryInfo {
    display: flex;
      div {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      & div:last-child   {
        margin: 0 rem;
        }
      

  }
  .countryContainer {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
    background-color: ${props => props.theme.theme.colors.background_navbar};
    padding: 2rem 1rem;
    border-radius: 1rem;
    @media only screen and (max-width: 1000px) {
      flex-direction: column;    
    }
    
  }
  .countryContainerDetails {
    flex: 1;
    margin-left: 4rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
        font-weight: 400
    }
    @media only screen and (max-width: 1000px) {
      margin: 2rem auto 0 auto;
      width: fit-content;
      justify-content: center;
      h1 {
        margin-bottom: 1rem;
      }
      
    }
  }
  .moreRegion {
    > span {
      margin-left: 0.5rem;
      display: flex;
      justify-content: flex-start;
      @media only screen and (max-width: 1000px) {
        justify-content: center;    
    }
    }
  }
  .moreCountries {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 1000px) {
      justify-content: center;
    }
  }
  .buttonMoreCountries {
    background-color: ${props => props.theme.theme.colors.background_navbar};
    margin: 0.5rem;
    border-radius: 8px;
    color: ${props => props.theme.theme.colors.color};
  }
  .buttonGoBack {
    background-color: ${props => props.theme.theme.colors.background_navbar};
    border-radius: 8px;
    color: ${props => props.theme.theme.colors.color};
  }
`;
