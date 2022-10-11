import React from "react";
import { usePokemons } from "../../hooks/usePokemons";
import { Container } from "./styles";

interface PokemonCardProps {
  name: string;
  onClick: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, onClick }) => {
  return (
    <Container onClick={onClick}>
      <span>{name}</span>
    </Container>
  );
};

export default PokemonCard;
