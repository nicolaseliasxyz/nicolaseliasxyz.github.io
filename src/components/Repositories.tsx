import { Cell, Grid, HFlow, VFlow } from "bold-ui";
import { css } from "@emotion/core";
import Card from "./Card";

function Repositories() {
  return (
    <VFlow
      style={css`
        align-items: center;
      `}
    >
      <HFlow
        style={css`
          max-width: 980px;
        `}
      >
        <Grid>
          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5404"}
              title={
                "INE5404 - Programação orientada a objetos 2 - UFSC - 2021"
              }
              info={"Disciplina de Programação orientada a objetos 2"}
            />
          </Cell>
          <Cell>
            <Card
              link={"https://github.com/nicol4ss/EEL5105"}
              title={"EEL5105 - Circuitos e tecnicas digitais 2021 - Projeto"}
              info={"Jogo da Memória em VHDL."}
            />
          </Cell>

          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5413"}
              title={"INE5413 - Grafos - 2022"}
              info={
                "Disciplina Grafos realizada em 2022 INE5413 na Universidade Federal de Santa Catarina"
              }
            />
          </Cell>

          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5411"}
              title={
                "Labs e trabalhos da disciplina de ORGANIZAÇÃO DE COMPUTADORES - UFSC 2022"
              }
              info={""}
            />
          </Cell>
          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5416"}
              title={"INE5416 - Paradigmas de programação - 2022"}
              info={
                "Exercicios em haskell + Trabalho 4 - racha cuca solver em prolog Disciplina de Paradigmas - UFSC 2022"
              }
            />
          </Cell>
          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5202"}
              title={"Cálculo Numérico em Computadores - INE5202 - UFSC"}
              info={"Disciplina de Cálculo Numérico em Computadores - 2021"}
            />
          </Cell>
          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5417"}
              title={
                "Engenharia de Software - Game Lasca em Python + Planejamento de projeto"
              }
              info={
                "Desenvolvimento realizado em grupo do jogo Lasca da Disciplina de Engenharia de Software - UFSC"
              }
            />
          </Cell>
          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5410/tree/master"}
              title={"INE5410 - Programação Concorrente - UFSC"}
              info={"Disciplina de Programação Concorrente - UFSC - 2021"}
            />
          </Cell>
          <Cell>
            <Card
              link={"https://github.com/nicol4ss/INE5408/blob/main/README.md"}
              title={"INE5408 - Estrutura de Dados - UFSC"}
              info={"Disciplina de Estrutura de Dados"}
            />
          </Cell>
        </Grid>
      </HFlow>
    </VFlow>
  );
}

export default Repositories;
