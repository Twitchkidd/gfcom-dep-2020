import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Global from "./Global";
import { rhythm, white } from "../utils";

const AppWrap = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: ${props =>
    props.mobile ? `CSS ME CAP'N!` : `CSS ME CAP'N!`};
  grid-template-rows: ${props =>
    props.mobile ? `CSS ME CAP'N!` : `CSS ME CAP'N!`};
`;

const postHeader = title => (
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

const OtherWrap = styled.div`
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

const Footer = styled.footer`
  width: 100%;
  height: 1.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const Layout = ({ location, children, mobile, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <>
      <Global />
      {location.pathname === rootPath ? (
        <AppWrap mobile={mobile}>{children}</AppWrap>
      ) : (
        <OtherWrap>
          <header>{postHeader(title)}</header>
          <main>{children}</main>
          <Footer>
            <span>
              © {new Date().getFullYear()}, Gareth Field, built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
          </Footer>
        </OtherWrap>
      )}
    </>
  );
};

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
