import { Button, HFlow, Icon, VFlow } from "bold-ui";
import { css } from "@emotion/core";
import Logo from "../assets/crosshair.svg";

function Navbar() {
  return (
    <VFlow
    // style={css`
    //   align-items: center;
    // `}
    >
      <HFlow
        style={css`
          width: 100%;
          height: 4rem;
        `}
      >
        <Icon icon="rocket" size={2} style={{ marginRight: "22rem" }} />
        <Button
          size="medium"
          skin="ghost"
          style={css`
            color: white;
          `}
        >
          SOBRE MIM
        </Button>
        <Button
          size="medium"
          skin="ghost"
          style={css`
            color: white;
          `}
        >
          GITHUB
        </Button>
        <Button
          size="medium"
          skin="ghost"
          style={css`
            color: white;
          `}
        >
          CONTATO
        </Button>
      </HFlow>
    </VFlow>
  );
}

export default Navbar;
