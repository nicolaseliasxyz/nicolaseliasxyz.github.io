import { VFlow } from "bold-ui";
import ContactMe from "../components/ContactMe";
import { css } from "@emotion/core";

function Contact() {
  return (
    <VFlow
      style={css`
        align-items: center;
      `}
    >
      <ContactMe />
    </VFlow>
  );
}

export default Contact;
