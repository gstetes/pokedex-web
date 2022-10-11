import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 3rem;

  background: #EF5350;

  display: flex;
  align-items: center;
  justify-content: space-between;  

  div {
    display: flex;
    align-items: center;
    gap: .5rem;
    
    span {
    font-size: 20px;
    color: #FFF;
  }
    a {
      transition: .2s;
      cursor: pointer;

      &:hover {
        color: #feca1b;
      }
    }
  }
`;