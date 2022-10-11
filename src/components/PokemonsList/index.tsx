import React, { useEffect, useState } from "react";
import { usePokemons } from "../../hooks/usePokemons";
import PokemonCard from "../PokemonCard";
import { Container } from "./styles";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PokemonDetailDrawer from "../PokemonDetailDrawer";

const PokemonsList: React.FC = () => {
  const {
    pokemons,
    fetchNextPage,
    fetchPreviousPage,
    selectedPokemon,
    setSelectedPokemon,
    getPokemonDetails,
    limit,
    setLimit,
  } = usePokemons();
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    if (selectedPokemon) setDrawerVisible(true);
  }, [selectedPokemon]);

  return (
    <Container>
      <PokemonDetailDrawer
        visible={drawerVisible}
        pokemon={selectedPokemon}
        onClose={() => {
          setSelectedPokemon(null);
          setDrawerVisible(false);
        }}
      />

      <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
        {pokemons?.map((pokemon, i) => (
          <PokemonCard
            key={i}
            name={pokemon?.name}
            onClick={() => getPokemonDetails(pokemon?.url)}
          />
        ))}
      </div>
      <div
        style={{
          marginTop: "1rem",
          gap: "1rem",
          display: "flex",
          cursor: "pointer",
        }}
      >
        <BsChevronLeft onClick={fetchPreviousPage} />
        <BsChevronRight onClick={fetchNextPage} />
      </div>
      <div style={{ display: "flex", alignSelf: "start" }}>
        <label htmlFor="limit">Limit per page</label>
        <select
          id="limit"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          style={{ marginLeft: ".5rem" }}
        >
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={150}>150</option>
        </select>
      </div>
    </Container>
  );
};

export default PokemonsList;
