import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Global from "./Global";
import Hamburger from "hamburger-react";
import { Link } from "gatsby";
import { rhythm, scale, white } from "../utils";

const LandingMainDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(32)};
  padding: ${rhythm(2.5)} ${rhythm(0.75)} ${rhythm(0.825)};
  background: ${white};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -112px;
    height: 110vh;
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
    height: 110vh;
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

const LandingHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Menu = styled.div`
  position: static;
  height: 100px;
  width: 200px;
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
  margin-top: 1rem;
`;

export const Layout = ({ location, title, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  if (location.pathname === rootPath) {
    header = (
      <LandingHeaderWrapper>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          {title}
        </h1>
        <Hamburger
          size={25}
          duration={0.25}
          onToggle={toggled =>
            toggled ? setMenuOpen(true) : setMenuOpen(false)
          }
        />
        {menuOpen ? (
          <Menu>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/polar-pairs`}
            >
              Polar Pairs!
            </Link>
          </Menu>
        ) : null}
      </LandingHeaderWrapper>
    );
  } else {
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
