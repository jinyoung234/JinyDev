import styled from "styled-components";
import { displayColumn } from "../../styles/cssStyle";

export const FooterComponent = styled.footer`
  ${displayColumn}
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  p {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
  }
  ul {
    display: flex;
    a {
      margin: 0 0.8rem;
    }
    a:first-child {
      padding-bottom: 0.15rem;
      margin: 0 0.6rem;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
    a:nth-child(2) {
      svg {
        width: 2.8rem;
        height: 2.8rem;
      }
    }
    a:last-child {
      padding-top: 0.2rem;
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
`;
