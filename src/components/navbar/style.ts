import styled from 'styled-components'
export const NavbarContainer = styled.div`

  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: ${props => props.theme.theme.colors.background};
  height: 4rem;
  
    div {
      display: flex;
      align-items: center;
    }

`