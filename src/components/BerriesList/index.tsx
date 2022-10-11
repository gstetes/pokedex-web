import React, { useEffect, useState } from "react";
import { useBerries } from "../../hooks/useBerries";
import PokemonCard from "../PokemonCard";
import { Container } from "./styles";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BerryDetailDrawer from "../BerryDetailDrawer";

const BerriesList: React.FC = () => {
  const {
    berries,
    getBerryDetails,
    setSelectedBerry,
    selectedBerry,
    fetchNextPage,
    fetchPreviousPage,
  } = useBerries();

  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    if (selectedBerry) setDrawerVisible(true);
  }, [selectedBerry]);

  return (
    <Container>
      <BerryDetailDrawer
        visible={drawerVisible}
        berry={selectedBerry}
        onClose={() => {
          setSelectedBerry(null);
          setDrawerVisible(false);
        }}
      />

      <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
        {berries?.map((berry, i) => (
          <PokemonCard
            key={i}
            name={berry?.name}
            onClick={() => getBerryDetails(berry?.url)}
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
    </Container>
  );
};

export default BerriesList;
