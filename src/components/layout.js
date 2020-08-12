import React from "react";
import styled from "styled-components";
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
