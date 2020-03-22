import React, { Fragment } from "react";
import styled from "styled-components";
import Global from "./Global";
import { Link } from "gatsby";
import { rhythm, scale, white } from "../utils";

const LandingMainDiv = styled.div`
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
    height: 100vh;
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
    height: 100vh;
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

const Footer = styled.footer`
  width: 100%;
  height: 1.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        {title}
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
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
  }
  return (
    <Fragment>
      <Global />
      {location.pathname === rootPath ? (
        <LandingMainDiv>
          <header>{header}</header>
          <main>{children}</main>
          <Footer>
            <span>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
          </Footer>
        </LandingMainDiv>
      ) : (
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
      )}
    </Fragment>
  );
};
