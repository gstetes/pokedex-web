import styled from 'styled-components';

export const Container = styled.a`
  cursor: pointer;
  border: 1px solid #444;
  border-radius: 5px;
  padding: .5rem;

  transition: .3s;

  &:hover {
    opacity: 0.8;
  }
`;