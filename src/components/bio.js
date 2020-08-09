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
          socials {
            handle
            name
          }
        }
      }
    }
  `);
  const { author, socials } = data.site.siteMetadata;
  const twitterHandle = socials.filter(social => social.name === "Twitter")
    .handle;
  const rootPath = `${__PATH_PREFIX__}/`;
  return (
    <Fragment>
      {location.pathname === rootPath ? (
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
            position: `relative`,
            left: `-36px`,
            alignItems: `center`,
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
          <p style={{ marginBottom: 0 }}>
            Gareth is {author.summary}
            {` `}
            <a href={`https://twitter.com/${twitterHandle}`}>
              Follow him on Twitter!
            </a>
            {` `}
            <strong>
              <a
                href={`mailto:field.gareth@gmail.com?Subject=Hiring%20For%20Web%20Development`}
                target={"_top"}
              >
                Hire him! 😁
              </a>
            </strong>
          </p>
        </div>
      ) : (
        <div
          style={{
            display: `flex`,
            marginBottom: rhythm(2.5),
            alignItems: "center",
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
          <p style={{ marginBottom: 0 }}>
            Written by <strong>{author.name}</strong>, {author.summary}
            {` `}
            <a href={`https://twitter.com/${twitterHandle}`}>
              Follow him on Twitter!
            </a>
          </p>
        </div>
      )}
    </Fragment>
  );
};
