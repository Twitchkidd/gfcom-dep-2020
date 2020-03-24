import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import {
  Bio,
  BlogList,
  Coffee,
  Layout,
  Nav,
  Running,
  SEO,
} from "../components";

const NavBarMainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 96px - 17.125rem);
`;

const MainContent = styled.div`
  height: 100%;
  flex: 1;
  overflow: scroll;
`;

const SiteIndex = ({ data, location }) => {
  const [tab, setTab] = useState("coding");
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio location={location} />
      <NavBarMainContentWrapper>
        <Nav tab={tab} setTab={setTab} />
        <MainContent>
          {(() => {
            switch (tab) {
              case "running":
                return <Running />;
              case "coding":
                return <BlogList data={data} />;
              case "coffee":
                return <Coffee />;
              case "dog":
                return <p>Dog!</p>;
              default:
                return <p>Error?</p>;
            }
          })()}
        </MainContent>
      </NavBarMainContentWrapper>
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
