import { Button, HFlow, Icon, Link, VFlow } from "bold-ui";
import { css } from "@emotion/core";
import "../index.css";

function Navbar() {
  return (
    <VFlow
      style={css`
        align-items: center;
        margin-bottom: 5rem;
        box-shadow: 10px 10px 10px #000000;
        padding: 1rem;
        background-color: #110f18;
        position: fixed;
        width: 100%;
        z-index: 15;
      `}
    >
      <HFlow
        style={css`
          width: 100%;
          height: 4rem;
          align-items: center;
        `}
      >
        <Link
          href="/"
          style={css`
            text-decoration: none;
            color: white;
          `}
        >
          <Button
            size="medium"
            skin="outline"
            style={css`
              color: white;
            `}
          >
            HOME
          </Button>
        </Link>
        <Link
          href="/#/sobre"
          style={css`
            text-decoration: none;
            color: white;
          `}
        >
          <Button
            size="medium"
            skin="outline"
            style={css`
              color: white;
            `}
          >
            SOBRE
          </Button>
        </Link>
        <Link
          href="/#/github"
          style={css`
            text-decoration: none;
            color: white;
          `}
        >
          <Button
            size="medium"
            skin="outline"
            style={css`
              color: white;
            `}
          >
            GITHUB
          </Button>
        </Link>
        <Link
          href="/#/contato"
          style={css`
            text-decoration: none;
            color: white;
          `}
        >
          <Button
            size="medium"
            skin="outline"
            style={css`
              color: white;
            `}
          >
            CONTATO
          </Button>
        </Link>
      </HFlow>
    </VFlow>
  );
}

export default Navbar;
