import { VFlow, Link, Button, Text } from "bold-ui";
import { css } from "@emotion/core";

interface CardProps {
  link: string;
  title: string;
  info: string;
}

function Card(props: CardProps) {
  return (
    <VFlow
      style={css`
        align-items: center;
        background-color: #110f18;
        border: 1px solid;
        border-radius: 1rem;
        color: white;
        padding: 1rem;
        margin: 1rem auto;
        align-items: center;
        max-width: 300px;
        box-shadow: 7px 7px 7px #000000;
      `}
    >
      <Text
        fontSize={1.4}
        fontWeight="bold"
        style={css`
          color: #61ffca;
          margin-bottom: 0.2rem;
        `}
      >
        {props.title}
      </Text>
      <Text
        fontSize={1}
        style={css`
          color: white;
        `}
      >
        {props.info}
      </Text>
      <Link
        href={props.link}
        style={css`
          text-decoration: none;
          color: white;
        `}
        target="_blank"
      >
        <Button
          size="large"
          skin="outline"
          style={css`
            color: #e472f3;
          `}
        >
          Acessar Repositorio
        </Button>
      </Link>
    </VFlow>
  );
}

export default Card;
