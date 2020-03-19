import React from "react";

export const Nav = ({ setTab }) => (
  <ul>
    <li
      onClick={() => {
        setTab("running");
      }}
    >
      Running
    </li>
    <li
      onClick={() => {
        setTab("coding");
      }}
    >
      Coding
    </li>
    <li
      onClick={() => {
        setTab("coffee");
      }}
    >
      Coffee
    </li>
    <li
      onClick={() => {
        setTab("dog");
      }}
    >
      Dog
    </li>
  </ul>
);
