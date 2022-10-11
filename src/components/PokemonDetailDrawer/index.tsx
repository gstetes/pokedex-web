import React, { useMemo } from "react";
import { IPokemonDetails } from "../../hooks/usePokemons/types";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import {
  AbilitiesContainer,
  Container,
  Informations,
  PokemonName,
  Status,
} from "./styles";

import SimpleImageSlider from "react-simple-image-slider";

import { FaWeightHanging } from "react-icons/fa";
import { MdHeight, MdOutlineBloodtype } from "react-icons/md";
import { BiDonateBlood, BiShield } from "react-icons/bi";
import { GiCrossedSwords, GiSpinningSword, GiBoltShield } from "react-icons/gi";
import { RiSpeedMiniLine } from "react-icons/ri";

interface PokemonDetailDrawerProps {
  visible: boolean;
  pokemon: IPokemonDetails | null;
  onClose: () => void;
}

const PokemonDetailDrawer: React.FC<PokemonDetailDrawerProps> = ({
  visible,
  onClose,
  pokemon,
}) => {
  const images = useMemo(() => {
    return [
      { url: pokemon?.sprites?.front_default ?? "" },
      { url: pokemon?.sprites?.back_default ?? "" },
      { url: pokemon?.sprites?.front_shiny ?? "" },
      { url: pokemon?.sprites?.back_shiny ?? "" },
    ];
  }, [pokemon]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "hp":
        return <BiDonateBlood size={30} color="#F00" />;
      case "attack":
        return <GiCrossedSwords size={30} color="#ff8800" />;
      case "defense":
        return <BiShield size={30} color="#008cff" />;
      case "special-attack":
        return <GiSpinningSword size={30} color="#ff7300" />;
      case "special-defense":
        return <GiBoltShield size={30} color="#1302a5" />;
      case "speed":
        return <RiSpeedMiniLine size={30} color="#0de90d" />;
      default:
        return null;
    }
  };

  return (
    <Drawer open={visible} onClose={onClose} size="500px" direction="right">
      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <span>ID: {pokemon?.id}</span>
          <PokemonName>{pokemon?.forms[0]?.name}</PokemonName>
        </div>

        {pokemon && (
          <SimpleImageSlider
            width="100%"
            height="500px"
            images={images}
            showBullets
            showNavs
            style={{ objectFit: "contain" }}
          />
        )}
        <Informations>
          <div>
            <span>
              <FaWeightHanging size={20} style={{ marginRight: ".5rem" }} />
              Weight
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {pokemon?.weight}
            </span>
          </div>
          <div>
            <span>
              <MdHeight size={20} style={{ marginRight: ".5rem" }} />
              Height
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {pokemon?.height}
            </span>
          </div>
          <div>
            <span>
              <MdOutlineBloodtype size={20} style={{ marginRight: ".5rem" }} />
              Type
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {pokemon?.types[0]?.type?.name}
            </span>
          </div>
        </Informations>

        <Status>
          <div>
            {pokemon?.stats?.map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: ".5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: ".2rem",
                    justifyContent: "space-between",
                  }}
                >
                  {getStatusIcon(stat?.stat?.name)}
                </div>
                <span style={{ fontSize: "20px" }}>{stat?.base_stat}</span>
              </div>
            ))}
          </div>
        </Status>
      </Container>
    </Drawer>
  );
};

export default PokemonDetailDrawer;
