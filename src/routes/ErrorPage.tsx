import { Text } from "bold-ui";
import { css } from "@emotion/core";

function ErrorPage() {
  return (
    <Text
      fontSize={10}
      style={css`
        color: red;
      `}
    >
      ERRO!! PAGINA NÃO EXISTE
    </Text>
  );
}

export default ErrorPage;
