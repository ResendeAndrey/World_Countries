
import styled from 'styled-components'

export const HomPage = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    margin-top: 1.5rem;
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
