import { HFlow, VFlow, Text, Grid, Cell, Link } from "bold-ui";
import { css } from "@emotion/core";
import Eu from "../assets/eu.png";
import { DiGit, DiGithubBadge, DiJsBadge, DiLinux } from "react-icons/di";
import { DiPython } from "react-icons/di";
import {
  SiCypress,
  SiGraphql,
  SiJunit5,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { SiKotlin } from "react-icons/si";

function Sobre() {
  return (
    <Grid>
      <img src={Eu} className="eu" />
      <VFlow
        style={css`
          align-items: flex-start;
          margin-bottom: 5rem;
          margin-left: 1.8rem;
          margin-right: 1rem;
          background-color: #111111;
          border: 0.2px solid;
          border-radius: 1rem;
          box-shadow: 5px 5px 5px #000000;
          max-width: 900px;
          padding: 2rem;
          color: white;
        `}
      >
        <Grid>
          <Cell size={12}>
            <Text
              style={css`
                color: #61ffca;
                text-shadow: 5px 5px 5px #000000;
              `}
              fontWeight="bold"
              fontSize={2.2}
            >
              SOBRE:
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={1.3}
              style={css`
                color: white;
              `}
            >
              Oi! Meu nome é Nicolas Elias atualmente sou Bolsista de
              Desenvolvimento Full Stack no{" "}
              <Link
                href="https://portal.bridge.ufsc.br/portfolio-esus-aps/"
                style={css`
                  text-decoration: none;
                  color: #61ffca;
                `}
                fontSize={1.3}
                fontWeight="bold"
                target="_blank"
              >
                Laboratorio Bridge_
              </Link>
              , e estudante de Ciências da Computação na{" "}
              <Link
                href="https://cco.ufsc.br/"
                style={css`
                  text-decoration: none;
                  color: #c377cd;
                `}
                fontSize={1.3}
                fontWeight="bold"
                target="_blank"
              >
                Universidade Federal de Santa Catarina
              </Link>{" "}
              em Florianópolis - SC. Sou novo na área de desenvolvimento web
              (pouco mais de um ano atuando na área), mas estou buscando me
              especializar na parte de desenvolvimento full stack.
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={1.3}
              style={css`
                color: white;
              `}
            >
              Sempre fui fissurado em Tecnologia, praticamente tudo relacionado
              a isso me desperta curiosidade e interesse, foi isso que me fez
              querer para minha vida. Tive meu primeiro contato com programacão
              quando iniciei a faculdade e desde então, adoro criar experiencias
              unicas por meio de tecnologia e com todo coração.
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={1.3}
              style={css`
                color: white;
              `}
            >
              Gosto de criar coisas legais que causam impacto na vida das
              pessoas e me sinto privilegiado por ter a chance de aprender algo
              novo todos os dias!
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={2.2}
              fontWeight="bold"
              style={css`
                color: white;
                text-shadow: 5px 5px 5px #000000;
              `}
            >
              SKILLS & PROFICIENCY
            </Text>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
                text-shadow: 5px 5px 5px #000000;
              `}
            >
              (Em desenvolvimento)
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={1.3}
              fontWeight="bold"
              style={css`
                color: #c377cd;
              `}
            >
              Languages:
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <DiJsBadge /> <SiTypescript />{" "}
              <Text
                fontSize={0.8}
                style={css`
                  color: white;
                `}
              >
                JavaScript (+TypeScript)
              </Text>
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <DiPython /> Python
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <SiKotlin /> Kotlin
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <SiGraphql /> GraphQL
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={1.2}
              fontWeight="bold"
              style={css`
                color: #c377cd;
              `}
            >
              Frameworks & Runtimes:
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <SiReact /> React
            </Text>
          </Cell>
          <Cell size={7} />
          <Cell size={12}>
            <Text
              fontSize={1.3}
              fontWeight="bold"
              style={css`
                color: #c377cd;
              `}
            >
              DevOps, CI/CD, and Testing:
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <DiGit /> <DiGithubBadge /> Git & Github
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <SiJunit5 /> JUnit 5Test
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <SiCypress /> Cypress
            </Text>
          </Cell>
          <Cell size={3}>
            <Text
              fontSize={1.3}
              style={css`
                color: white;
              `}
            >
              <DiLinux /> Linux
            </Text>
          </Cell>
          <Cell size={12}>
            <Text
              fontSize={1}
              style={css`
                color: white;
              `}
            >
              Estas são as tecnologias que tenho contato no meu cotidiano e
              muita familiaridade, estou as desenvolvendo mais a cada dia.
            </Text>
          </Cell>
        </Grid>
      </VFlow>
    </Grid>
  );
}

export default Sobre;
