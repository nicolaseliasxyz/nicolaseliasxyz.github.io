import { Button, HFlow, Link, VFlow } from "bold-ui";
import { css } from "@emotion/core";
import "../index.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <VFlow
      style={css`
        align-items: center;
        margin-bottom: 5rem;
        box-shadow: 10px 10px 10px #000000;
        padding: 1rem;
        background-color: #111111;
        position: fixed;
        width: 100%;
        z-index: 15;
      `}
    >
      <HFlow
        style={css`
          align-items: flex-start;
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
              <img
                src={logo}
                alt="Rocket"
                className="logo"
                style={{ marginRight: "1rem" }}
              />
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
      </HFlow>
    </VFlow>
  );
}

export default Navbar;
