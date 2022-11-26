import styled from "styled-components";
import { displayColumn } from "../../../styles/cssStyle";

export const FooterWritterWrapper = styled.div`
  font-size: 1.4rem;
`;

export const FooterListWrapper = styled.ul`
  a:first-child {
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
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

export const FooterContainer = styled.footer`
  ${displayColumn}
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  p {
    margin-bottom: 1.5rem;
  }
  ${FooterListWrapper} {
    display: flex;
    a {
      margin: 0 0.8rem;
    }
    a:first-child {
      padding-bottom: 0.15rem;
      margin: 0 0.6rem;
    }
    a:last-child {
      padding-top: 0.2rem;
    }
  }
`;
