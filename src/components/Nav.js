import React from "react";
import styled from "styled-components";
import { white, lightPink, pink, darkPink } from "../utils";

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 16px;
  width: 10rem;
`;

const Button = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: ${lightPink};
  color: ${white};
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover,
  &:focus {
    background: ${pink};
  }
  &:focus {
    outline: 1px solid ${white};
    outline-offset: -4px;
  }
  &:active {
    transform: scale(0.99);
  }
`;

export const Nav = ({ setTab }) => (
  <StyledNav>
    <Button
      onClick={() => {
        setTab("running");
      }}
    >
      Running
    </Button>
    <Button
      onClick={() => {
        setTab("coding");
      }}
    >
      Coding
    </Button>
    <Button
      onClick={() => {
        setTab("coffee");
      }}
    >
      Coffee
    </Button>
    <Button
      onClick={() => {
        setTab("dog");
      }}
    >
      Dog
    </Button>
  </StyledNav>
);
