import { HFlow, VFlow, Text } from "bold-ui";
import { css } from "@emotion/core";
import { AiFillCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <VFlow
      style={css`
        align-items: center;
        position: relative;
        z-index: 50;
        align-items: center;
        min-width: 100%;
        margin-bottom: 2rem;
      `}
    >
      <HFlow>
        <Text
          fontSize={1}
          fontWeight="bold"
          style={css`
            color: white;
            text-shadow: 8px 8px 8px #000000;
          `}
        >
          <AiFillCopyrightCircle /> Nicolas Elias
        </Text>
      </HFlow>
    </VFlow>
  );
}

export default Footer;
