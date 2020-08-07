import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Tabs, usePanelState } from "@bumaga/tabs";
import {
  Bio,
  BlogList,
  Coffee,
  Layout,
  Nav,
  Running,
  SEO,
} from "../components";

const NavMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 96px - 17.125rem);
`;

const MainWrapper = styled.div`
  height: 100%;
  flex: 1;
  overflow: scroll;
  padding: 1rem 1rem 1rem 2.5rem;
`;

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? children : null;
};

const SiteIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [index, setIndex] = useState(1);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio location={location} />
      <NavMainWrapper>
        <Tabs state={[index, setIndex]}>
          <Nav />
          <MainWrapper>
            <Panel>
              <Running />
            </Panel>
            <Panel>
              <BlogList data={data} />
            </Panel>
            <Panel>
              <Coffee />
            </Panel>
            <Panel>
              <p>Dog!</p>
            </Panel>
          </MainWrapper>
        </Tabs>
      </NavMainWrapper>
    </Layout>
  );
};

export default SiteIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
