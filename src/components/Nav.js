import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { useTabState } from "@bumaga/tabs";
import {
  white,
  almostWhite,
  eigengrau,
  lighterPink,
  lightPink,
  pink,
  pinkFilter,
  darkPink,
  lighterPurple,
  lightPurple,
  purpleFilter,
  lighterBlue,
  lightBlue,
  blueFilter,
  scale,
} from "../utils";

const NavWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 10rem;
`;

const Tab = ({ children, type }) => {
  const { onClick } = useTabState();
  return (
    <Button onClick={onClick} type={type}>
      <ButtonContentsWrapper type={type}>{children}</ButtonContentsWrapper>
    </Button>
  );
};

const Button = styled.button`
  display: block;
  position: relative;
  flex: 1;
  text-decoration: none;
  border: none;
  outline: none;
  padding: 0;
  background: ${white};
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover {
    ${({ type }) =>
      type === "running"
        ? `background: ${lighterPurple};`
        : type === "coding"
        ? `background: ${lighterBlue};`
        : type === "coffee"
        ? `background: ${lighterPink};`
        : type === "dog"
        ? `background: ${lighterPurple};`
        : null}
    & span {
      color: ${white} !important;
    }
  }
  &:focus {
    ${({ type }) =>
      type === "running"
        ? `background: ${lightPurple};`
        : type === "coding"
        ? `background: ${lightBlue};`
        : type === "coffee"
        ? `background: ${lightPink};`
        : type === "dog"
        ? `background: ${lightPurple};`
        : null}
    & span {
      color: ${white} !important;
    }
    & img {
      filter: invert(100%) sepia(51%) saturate(5%) hue-rotate(270deg)
        brightness(112%) contrast(87%) !important;
    }
  }
  &:active {
    transform: scale(0.9);
  }
  &:nth-child(4) {
    ${ButtonContentsWrapper}::after {
      display: hidden;
    }
  }
`;

const IconSVG = styled.img`
  height: 2rem;
  width: 2rem;
  display: inline;
  margin-bottom: 0;
  &#running {
    ${pinkFilter}
  }
  &#coding {
    ${purpleFilter}
  }
  &#coffee {
    ${blueFilter}
  }
  &#dog {
    ${pinkFilter}
  }
`;

const ButtonText = styled.span`
  display: inline-block;
`;

const ButtonContentsWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ type }) =>
    type === "running"
      ? `&::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    height: 1px;
    z-index: 99;
    background: ${lightPink};
  }`
      : type === "coding"
      ? `&::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    height: 1px;
    z-index: 99;
    background: ${lightPurple};
  }`
      : type === "coffee"
      ? `&::after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    height: 1px;
    z-index: 99;
    background: ${lightBlue};
  }`
      : null}
`;

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      runningIcon: file(absolutePath: { regex: "/running.svg/" }) {
        publicURL
      }
      codingIcon: file(absolutePath: { regex: "/coding.svg/" }) {
        publicURL
      }
      coffeeIcon: file(absolutePath: { regex: "/coffee.svg/" }) {
        publicURL
      }
      dogIcon: file(absolutePath: { regex: "/dog.svg/" }) {
        publicURL
      }
    }
  `);
  return (
    <NavWrapper>
      <Tab type="running">
        <IconSVG src={data.runningIcon.publicURL} alt="" id="running" />
        <ButtonText style={{ ...scale(3 / 4) }}>Running</ButtonText>
      </Tab>
      <Tab type="coding">
        <IconSVG src={data.codingIcon.publicURL} alt="" id="coding" />
        <ButtonText style={{ ...scale(3 / 4) }}>Coding</ButtonText>
      </Tab>
      <Tab type="coffee">
        <IconSVG src={data.coffeeIcon.publicURL} alt="" id="coffee" />
        <ButtonText style={{ ...scale(3 / 4) }}>Coffee</ButtonText>
      </Tab>
      <Tab type="dog">
        <IconSVG src={data.dogIcon.publicURL} alt="" id="dog" />
        <ButtonText style={{ ...scale(3 / 4) }}>Dog</ButtonText>
      </Tab>
    </NavWrapper>
  );
};
