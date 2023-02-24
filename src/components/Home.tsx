import { HFlow, VFlow, Text } from "bold-ui";
import { ReactTypical } from "@deadcoder0904/react-typical";
import { css } from "@emotion/core";
import Eu from "../assets/eu.jpeg";
import "../index.css";

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
        fontSize={1.5}
        style={css`
          color: white;
        `}
      >
        Olá, Me chamo Nicolas
      </Text>
      <ReactTypical
        steps={[
          "Desenvolvedor Web",
          2500,
          "Estudante de Computação",
          2500,
          "Aprendendo mais a cada dia!",
          3000,
        ]}
        wrapper="h2"
        loop={Infinity}
        className="sayMyName"
      />
    </VFlow>
  );
}

export default Home;
