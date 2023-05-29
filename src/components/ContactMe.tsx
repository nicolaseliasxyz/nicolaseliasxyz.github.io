import { Button, HFlow, Link, VFlow, Text } from "bold-ui";
import { css } from "@emotion/core";
import { BsTelegram } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function ContactMe() {
  return (
    <VFlow
      style={css`
        align-items: center;
        margin-bottom: 5rem;
        background-color: #111111;
        border: 0.2px solid;
        border-radius: 1rem;
        box-shadow: 5px 5px 5px #000000;
        max-width: 900px;
        padding: 2rem;
        color: white;
      `}
    >
      <Text
        fontSize={1.4}
        fontWeight="bold"
        style={css`
          color: white;
        `}
      >
        ENTRE EM CONTATO:
      </Text>
      <HFlow
        style={css`
          width: 100%;
          height: 4rem;
          align-items: center;
        `}
      >
        <Link
          href="https://tttttt.me/nicol4ss"
          style={css`
            text-decoration: none;
            color: white;
          `}
          target="_blank"
        >
          <Button
            size="medium"
            skin="outline"
            style={css`
              color: white;
            `}
          >
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <BsTelegram /> Telegram
            </Text>
          </Button>
        </Link>
        <Link
          href="mailto:nicolaselias@pm.me?subject=Contato Nicolas"
          style={css`
            text-decoration: none;
            color: white;
          `}
          target="_blank"
        >
          <Button
            size="medium"
            skin="outline"
            style={css`
              color: white;
            `}
          >
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <AiOutlineMail /> E-MAIL
            </Text>
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicolas-elias-7357b6218/"
          style={css`
            text-decoration: none;
            color: white;
          `}
          target="_blank"
        >
          <Button
            size="medium"
            skin="outline"
            style={css`
              color: white;
            `}
          >
            <Text
              fontSize={1.2}
              style={css`
                color: white;
              `}
            >
              <AiFillLinkedin /> Linkedin
            </Text>
          </Button>
        </Link>
      </HFlow>
    </VFlow>
  );
}

export default ContactMe;
