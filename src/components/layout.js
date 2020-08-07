import React from "react";
import styled from "styled-components";
import Global from "./Global";

const AppWrap = styled.div`
  display: flex;
  ${(props) => (props.mobile ? "flex-direction: column;" : null)}
`;

const OtherWrap = styled.div`
  display: ${(props) => (props.mobile ? "flex" : "grid")};
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
