import { Button, Link, Text, VFlow } from "bold-ui";
import { css } from "@emotion/core";

function ErrorPage() {
  return (
    <VFlow>
      <Text
        fontSize={10}
        style={css`
          color: red;
          text-shadow: 5px 5px 5px #000000;
        `}
      >
        ERRO!! PAGINA NÃO EXISTE
      </Text>
      <Link
        href="/"
        style={css`
          text-decoration: none;
          color: white;
        `}
      >
        <Button
          size="large"
          skin="outline"
          style={css`
            color: white;
            width: 50rem;
          `}
        >
          <Text
            fontSize={1.2}
            style={css`
              color: white;
            `}
          >
            RETURN TO HOME
          </Text>
        </Button>
      </Link>
    </VFlow>
  );
}

export default ErrorPage;
