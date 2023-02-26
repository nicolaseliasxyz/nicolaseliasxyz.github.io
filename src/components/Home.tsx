import { HFlow, VFlow, Text } from "bold-ui";
import Typed from "react-typed";
import { css } from "@emotion/core";
import Eu from "../assets/eu.png";

function Home() {
  return (
    <VFlow
      style={css`
        color: white;
      `}
    >
      <img src={Eu} className="eu" />

      <Text
        fontWeight="bold"
        fontSize={2}
        style={css`
          color: white;
        `}
      >
        Olá, Me chamo Nicolas.
      </Text>
      <Text
        fontWeight="bold"
        fontSize={2.5}
        style={css`
          color: white;
        `}
      >
        <Typed
          strings={[
            "Desenvolvedor Full Stack.",
            "Amante de Computação.",
            "Estudante de Ciências da Computação.",
          ]}
          typeSpeed={50}
          backSpeed={80}
          loop
        />
      </Text>
    </VFlow>
  );
}

export default Home;
