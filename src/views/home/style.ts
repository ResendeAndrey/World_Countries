
import styled from 'styled-components'

export const HomPage = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    margin-top: 1.5rem;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
      
    }
    >div:last-child {
     > div:last-child {
        width: 10rem;
      }
    }
  }
  .inputSearch {
    background-color: ${props => props.theme.theme.colors.background_navbar};
     & ::placeholder {
      color: ${props => props.theme.theme.colors.color};
     }
  }

  .country_container {
    div {

    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    @media only screen and (max-width: 800px) {
      flex-direction: column
    }
    }  
  } 
    .inputDropDown {
      background-color: ${props => props.theme.theme.colors.background_navbar};
      label {
        color: ${props => props.theme.theme.colors.color}
      }
    }

  } 

  .paginationComponent {
    & button{
      color: ${props => props.theme.theme.colors.color}
    }
  }

  
  }
`
