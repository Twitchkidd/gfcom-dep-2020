import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import { Tabs, usePanelState } from "@bumaga/tabs";
import {
  BlogList,
  Coffee,
  Layout,
  MoreLessButton,
  MoreLessButtonShadowElement,
  Running,
  SEO,
} from "../components";
import Hamburger from "hamburger-react";
import { rhythm, scale, white } from "../utils";

const MobileHeader1 = styled.header`
  background: green;
`;

const Sidebar = styled.nav`
  position: absolute;
`;

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? children : null;
};

const Index = ({ data, location }) => {
  const { author, title, social } = data.site.siteMetadata;
  const [index, setIndex] = useState(1);
  const determineMe = 40;
  const howDoWeDetermineThis = "more";
  const handleMoreLess = () => {
    console.log("More less shruggie");
  };
  // Media query!
  // May have to render a fragment if window is undefined, give it a shot.
  const width = window.innerWidth;
  const mobile = width <= 640;
  return (
    <Layout location={location} title={title}>
      <SEO title="Home page" />
      <MoreLessButton
        top={determineMe}
        type={howDoWeDetermineThis}
        onMoreLess={handleMoreLess}
      />
      {mobile ? (
        <>
          <SocialsModal hidden={!socialsModalOpen} socials={[social.twitter]} />
          <MobileHeader1>
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
              Gareth is {author.summary}
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                Follow him on Twitter!
              </a>
            </p>
            <MoreLessButtonShadowElement header={headerState} />
          </MobileHeader1>
          <Sidebar>
              <TabsWrap>
                {tabs.map((tab, i) => (
                  // <Tabs state={[index, setIndex]}>
                  //      <Nav />
                  //      <MainWrapper>
                  //        <Panel>
                  //          <Running />
                  //        </Panel>
                  //        <Panel>
                  //          <BlogList data={data} />
                  //        </Panel>
                  //        <Panel>
                  //          <Coffee />
                  //        </Panel>
                  //        <Panel>
                  //          <p>Dog!</p>
                  //        </Panel>
                  //      </MainWrapper>
                  //    </Tabs>
                )}
              </TabsWrap>
          </Sidebar>
      ) : (
        <div>Ho</div>
      )}
    </Layout>
  );
};

// const NavMainWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   height: calc(100vh - 96px - 17.125rem);
// `;

// const MainWrapper = styled.div`
//   height: 100%;
//   flex: 1;
//   overflow: scroll;
//   padding: 1rem 1rem 1rem 2.5rem;
// `;

// <NavMainWrapper>
//   <Tabs state={[index, setIndex]}>
//     <Nav />
//     <MainWrapper>
//       <Panel>
//         <Running />
//       </Panel>
//       <Panel>
//         <BlogList data={data} />
//       </Panel>
//       <Panel>
//         <Coffee />
//       </Panel>
//       <Panel>
//         <p>Dog!</p>
//       </Panel>
//     </MainWrapper>
//   </Tabs>
// </NavMainWrapper>

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          twitter
        }
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
  }
`;

// let header;
// if (location.pathname === rootPath) {
//   header = (
//     <LandingHeaderWrapper>
//       <h1
//         style={{
//           ...scale(1.5),
//           marginBottom: rhythm(1.5),
//           marginTop: 0,
//         }}
//       >
//         {title}
//       </h1>
//       <Hamburger
//         size={25}
//         duration={0.25}
//         onToggle={(toggled) =>
//           toggled ? setMenuOpen(true) : setMenuOpen(false)
//         }
//       />
//       {menuOpen ? (
//         <Menu>
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/polar-pairs`}
//           >
//             Polar Pairs!
//           </Link>
//         </Menu>
//       ) : null}
//     </LandingHeaderWrapper>
//   );
// } else {
//   header = (
//     <h3
//       style={{
//         marginTop: 0,
//       }}
//     >
//       <Link
//         style={{
//           boxShadow: `none`,
//           textDecoration: `none`,
//           color: `inherit`,
//         }}
//         to={`/`}
//       >
//         {title}
//       </Link>
//     </h3>
//   );
// }

{
  /* <LandingMainDiv>
  <header>{header}</header>
  <main>{children}</main>
  <Footer>
    <span>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
  </Footer>
</LandingMainDiv>;

<OtherMainDiv>
  <header>{header}</header>
  <main>{children}</main>
  <Footer>
    <span>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
  </Footer>
</OtherMainDiv> */
}

// const LandingMainDiv = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   max-width: ${rhythm(32)};
//   padding: ${rhythm(2.5)} ${rhythm(0.75)} ${rhythm(0.825)};
//   background: ${white};
//   position: relative;
//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -112px;
//     height: 110vh;
//     width: 112px;
//     background: linear-gradient(
//       to left,
//       ${white},
//       ${white},
//       ${white},
//       ${white},
//       transparent
//     );
//   }
//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 100%;
//     height: 110vh;
//     width: 112px;
//     background: linear-gradient(
//       to right,
//       ${white},
//       ${white},
//       ${white},
//       ${white},
//       transparent
//     );
//   }
// `;

// const LandingHeaderWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: flex-start;
// `;

// const Menu = styled.div`
//   position: static;
//   height: 100px;
//   width: 200px;
// `;

// const OtherMainDiv = styled.div`
//   margin-left: auto;
//   margin-right: auto;
//   max-width: ${rhythm(32)};
//   padding: ${rhythm(2.5)} ${rhythm(3 / 4)};
//   background: ${white};
//   position: relative;
//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: -112px;
//     height: 100%;
//     width: 112px;
//     background: linear-gradient(
//       to left,
//       ${white},
//       ${white},
//       ${white},
//       ${white},
//       transparent
//     );
//   }
//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 100%;
//     height: 100%;
//     width: 112px;
//     background: linear-gradient(
//       to right,
//       ${white},
//       ${white},
//       ${white},
//       ${white},
//       transparent
//     );
//   }
// `;

// const Footer = styled.footer`
//   width: 100%;
//   height: 1.85rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const [menuOpen, setMenuOpen] = useState(false);
