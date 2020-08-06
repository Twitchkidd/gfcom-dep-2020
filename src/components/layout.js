import React from "react";
import styled from "styled-components";
import Global from "./Global";

const AppWrap = styled.div`
  display: ${props => (props.mobile ? "flex" : "grid")};
`;

const OtherWrap = styled.div`
  display: ${props => (props.mobile ? "flex" : "grid")};
`;

export const Layout = ({ location, children }) => {
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
