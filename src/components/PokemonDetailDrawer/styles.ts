import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background: #000;
  height: 97%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 0px 0px 40px 2px #000;

  overflow-y: auto;
`;

export const PokemonName = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-top: .5rem;
  margin-bottom: 1rem;
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-top: 1rem;

  color: #ddd;

  p {
    font-weight: bold;
    color: #fff;
    margin-bottom: .5rem;
  }
`;

export const Informations = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 1rem;
  padding-right: 4rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .3rem;

    span {
      display: flex;
      align-items: center;
    }
  }
`;

export const Status = styled.div` 
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-weight: bold;
  }

  div {
    display: flex;
    gap: 3.5rem;
    flex-wrap: wrap;
  }
`;