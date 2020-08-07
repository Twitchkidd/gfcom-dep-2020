import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PagesWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Page = styled(Link)`
  font-size: 40px;
`;

export const Pages = () => (
  <PagesWrap>
    {pages.map((page) => (
      <Page to={page.url}>{page.name}</Page>
    ))}
  </PagesWrap>
);
