import React, { useState } from "react";
import { graphql } from "gatsby";
import { Bio, BlogList, Layout, Nav, SEO } from "../components";

const SiteIndex = ({ data, location }) => {
  const [tab, setTab] = useState("running");
  const siteTitle = data.site.siteMetadata.title;
  console.log(tab);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio location={location} />
      <Nav setTab={setTab} />
      <div id="main-content">
        {(() => {
          switch (tab) {
            case "running":
              return <p>Running!</p>;
            case "coding":
              return <BlogList data={data} />;
            case "coffee":
              return <p>Coffee!</p>;
            case "dog":
              return <p>Dog!</p>;
            default:
              return <p>Error?</p>;
          }
        })()}
      </div>
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
