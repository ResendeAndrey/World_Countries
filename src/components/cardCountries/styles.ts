import styled from 'styled-components';

export const Container = styled.div`
  
    background-color: ${props => props.theme.theme.colors.background_card};
    width: 23%;
    padding: 0 1.5rem 1rem  1.5rem;
    border-radius: 1rem;
    margin-top: 1rem; 
    cursor: pointer;
    :hover {
      filter: brightness(0.85)
    }
    @media only screen and (max-width: 800px) {
      width: 90%;
      margin: 0 auto;
      height: 27rem;     
    }
    & div:first-child {
      display: flex;
      justify-content: center;
    }
    & div:last-child {
      display: flex;
      flex-direction: column;
    }
    & p {
      color: ${props => props.theme.theme.colors.color};
      font-weight: 400;
    }
    & img {   
      width: 100%;
      height: 8rem;
      object-fit: cover;
        @media only screen and (max-width: 800px) {  
           height: 15rem;  
           width: 100%;   
        }
    
`;
