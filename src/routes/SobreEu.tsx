import { VFlow } from "bold-ui";
import Sobre from "../components/Sobre";
import { css } from "@emotion/core";

function SobreEu() {
  return (
    <VFlow
      style={css`
        align-items: center;
      `}
    >
      <Sobre />
    </VFlow>
  );
}

export default SobreEu;
