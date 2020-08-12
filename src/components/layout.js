import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Global from "./Global";
import { almostWhite, eigengrau } from "../utils";

const AppWrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  color: ${eigengrau};
  background: ${almostWhite};
  overflow: hidden;
  display: grid;
  grid-template-columns: ${props =>
    props.mobile ? `CSS ME CAP'N!` : `CSS ME CAP'N!`};
  grid-template-rows: ${props =>
    props.mobile ? `CSS ME CAP'N!` : `CSS ME CAP'N!`};
`;

const OtherWrap = styled.div`
  display: ${props => (props.mobile ? "flex" : "grid")};
`;

export const Layout = ({ location, children, mobile }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <>
      <Global />
      {location.pathname === rootPath ? (
        <AppWrap mobile={mobile}>{children}</AppWrap>
      ) : (
        <OtherWrap mobile={mobile}>{children}</OtherWrap>
      )}
    </>
  );
};

/*
header = (
  <h3
    style={{
      marginTop: 0,
    }}
  >
    <Link
      style={{
        boxShadow: `none`,
        textDecoration: `none`,
        color: `inherit`,
      }}
      to={`/`}
    >
      {title}
    </Link>
  </h3>
);
*/
/*
const OtherMainDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(32)};
  padding: ${rhythm(2.5)} ${rhythm(3 / 4)};
  background: ${white};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -112px;
    height: 100%;
    width: 112px;
    background: linear-gradient(
      to left,
      ${white},
      ${white},
      ${white},
      ${white},
      transparent
    );
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 100%;
    height: 100%;
    width: 112px;
    background: linear-gradient(
      to right,
      ${white},
      ${white},
      ${white},
      ${white},
      transparent
    );
  }
`;
*/

/*
const Footer = styled.footer`
  width: 100%;
  height: 1.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  `;
*/

/*
<OtherMainDiv>
  <header>{header}</header>
  <main>{children}</main>
  <Footer>
    <span>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
  </Footer>
</OtherMainDiv>
*/
