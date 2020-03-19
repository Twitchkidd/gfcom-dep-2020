/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { rhythm } from "../utils";

export const Bio = ({ location }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bigAvatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 96, height: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);
  const { author, social } = data.site.siteMetadata;
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <Fragment>
      {location.pathname === rootPath ? (
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
            position: `relative`,
            left: `-96px`,
          }}
        >
          <Image
            fixed={data.bigAvatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 96,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <p>
            Gareth is {author.summary}
            {` `}
            <a href={`https://twitter.com/${social.twitter}`}>
              Follow him on Twitter!
            </a>
          </p>
        </div>
      ) : (
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <p>
            Written by <strong>{author.name}</strong>, {author.summary}
            {` `}
            <a href={`https://twitter.com/${social.twitter}`}>
              Follow him on Twitter!
            </a>
          </p>
        </div>
      )}
    </Fragment>
  );
};
