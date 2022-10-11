import React, { useMemo } from "react";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { Container, Informations, PokemonName, Status } from "./styles";

import { FaWeightHanging } from "react-icons/fa";
import { IoMdResize } from "react-icons/io";
import { GiConfirmed, GiFarmTractor } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ImPower } from "react-icons/im";
import { MdMergeType } from "react-icons/md";

import { IBerryDetails } from "../../hooks/useBerries/types";

interface BerryDetailDrawerProps {
  visible: boolean;
  berry: IBerryDetails | null;
  onClose: () => void;
}

const BerryDetailDrawer: React.FC<BerryDetailDrawerProps> = ({
  visible,
  onClose,
  berry,
}) => {
  const getFirmnessStatus = (status: string) => {
    switch (status) {
      case "very-soft":
        return <span style={{ color: "#09eff7" }}>Soft</span>;
      case "soft":
        return <span style={{ color: "#0c95f0" }}>Soft</span>;
      case "medium":
        return <span style={{ color: "#ddb917" }}>Medium</span>;
      case "hard":
        return <span style={{ color: "#ff9a01" }}>Hard</span>;
      case "very-hard":
        return <span style={{ color: "#d12709" }}>Very hard</span>;
      default:
        return null;
    }
  };

  return (
    <Drawer open={visible} onClose={onClose} size="500px" direction="right">
      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
          <span>ID: {berry?.id}</span>
          <PokemonName>{berry?.name}</PokemonName>
        </div>
        <Informations>
          <div>
            <span>
              <FaWeightHanging size={20} style={{ marginRight: ".5rem" }} />
              Smoothness
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {berry?.smoothness}
            </span>
          </div>
          <div>
            <span>
              <IoMdResize size={20} style={{ marginRight: ".5rem" }} />
              Size
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {berry?.size}
            </span>
          </div>
          <div>
            <span>
              <GiConfirmed size={20} style={{ marginRight: ".5rem" }} />
              Firmness
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {getFirmnessStatus(berry?.firmness?.name ?? "")}
            </span>
          </div>
          <div>
            <span>
              <AiOutlineClockCircle
                size={20}
                style={{ marginRight: ".5rem" }}
              />
              Growth Time
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {berry?.growth_time}
            </span>
          </div>
          <div>
            <span>
              <ImPower size={20} style={{ marginRight: ".5rem" }} />
              Natural gift power
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {berry?.natural_gift_power}
            </span>
          </div>
          <div>
            <span>
              <MdMergeType size={20} style={{ marginRight: ".5rem" }} />
              Natural gift type
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {berry?.natural_gift_type?.name}
            </span>
          </div>
          <div>
            <span>
              <GiFarmTractor size={20} style={{ marginRight: ".5rem" }} />
              Max harvest
            </span>
            <span style={{ fontWeight: "bold", fontSize: "30px" }}>
              {berry?.max_harvest}
            </span>
          </div>
        </Informations>
      </Container>
    </Drawer>
  );
};

export default BerryDetailDrawer;
