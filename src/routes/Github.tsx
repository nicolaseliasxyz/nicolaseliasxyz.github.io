import { VFlow } from "bold-ui";
import Repositories from "../components/Repositories";
import { Text } from "bold-ui";
import { css } from "@emotion/core";

function Github() {
  return (
    <VFlow>
      <Text
        fontSize={2}
        fontWeight="bold"
        style={css`
          color: white;
        `}
      >
        ALGUNS DOS MEUS REPOSITORIOS DO GITHUB:
      </Text>
      <Repositories />
    </VFlow>
  );
}

export default Github;
