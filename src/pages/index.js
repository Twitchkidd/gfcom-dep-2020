import React, { useState } from "react";
import { graphql, Image } from "gatsby";
import styled from "styled-components";
import { Tabs, usePanelState } from "@bumaga/tabs";
import {
  BlogList,
  Coffee,
  Dog,
  Layout,
  MoreLessButton,
  MoreLessButtonShadowElement,
  Pages,
  Running,
  SEO,
  SidebarTabs,
  SocialsModal,
} from "../components";
import { rhythm } from "../utils";

const MobileHeader1 = styled.header`
  width: 100vw;
  height: 15vh;
  background: green;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Sidebar = styled.nav`
  position: ${(props) => (props.mobile ? "absolute" : "static")};
  height: ${(props) => (props.mobile ? "85vh" : "100vh")};
`;

const StyledSocialsButton = styled.button`
  background: url("plzWork.jpg");
`;

const SocialsButton = ({ onClick }) => (
  <StyledSocialsButton onClick={onClick} />
);

const StyledSidebarToggle = styled.button`
  background: red;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const SidebarToggle = ({ onClick }) => (
  <StyledSidebarToggle onClick={onClick} />
);

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? children : null;
};

const ContentWrap = styled.main`
  display: flex;
`;

const MobileHeader2 = styled.div`
  display: flex;
`;

const Blurb = styled.p`
  margin-bottom: 0;
`;

const MobileHeader3 = styled.div`
  display: flex;
`;

const QotD = styled.q`
  font-size: 50px;
`;

const StyledDelightButton = styled.button`
  width: 50px;
`;

const DelightButton = ({ onClick }) => (
  <StyledDelightButton onClick={onClick} />
);

const ImageTitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SocialButtonsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SocialLinkButton = styled.a`
  /* You can use before for tooltips, right? Then I just need an accessibility thing too. Kevin Powell's vid? */
  background: url(./plzwork.gif);
`;

const EverythingElseWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DesktopHeader1 = styled.header`
  display: flex;
`;

const DesktopHeader2 = styled.header`
  display: flex;
`;

const Index = ({ data, location }) => {
  const { author, title, socials, pages } = data.site.siteMetadata;
  const [index, setIndex] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const openSocials = () => {
    setSocialsOpen(true);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const delight = () => {
    console.log("Hooray!");
  };
  const determineMe = 40;
  const howDoWeDetermineThis = "more";
  const handleMoreLess = () => {
    console.log("More less shruggie");
  };
  // Media query!
  // May have to render a fragment if window is undefined, give it a shot.
  // https://www.gatsbyjs.org/docs/debugging-html-builds/ Oh, this.
  const width = window.innerWidth;
  const mobile = width <= 640;
  return (
    <Layout location={location} title={title} mobile={mobile}>
      <SEO title="Home page" />
      {mobile ? (
        <Tabs state={[index, setIndex]}>
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
            <Title>{data.pageTitle}</Title>
            <MoreLessButtonShadowElement header={headerState} />
          </MobileHeader1>
          <ContentWrap>
            <MobileHeader2>
              <Blurb>
                Gareth is {author.summary}
                {` `}
                <a href={`https://twitter.com/${social.twitter}`}>
                  Follow him on Twitter!
                </a>
              </Blurb>
              <MoreLessButtonShadowElement header={headerState} />
            </MobileHeader2>
            <MobileHeader3>
              <QotD>{data.quote}</QotD>
              <DelightButton onClick={delight} />
              <MoreLessButtonShadowElement header={headerState} />
            </MobileHeader3>
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
              <Dog />
            </Panel>
          </ContentWrap>
          <Sidebar>
            <SidebarTabs mobile={mobile} />
            <Pages pages={pages} />
            <SocialsButton onClick={openSocials} />
            <SidebarToggle onClick={toggleSidebar} />
          </Sidebar>
          <SocialsModal hidden={!socialsOpen} socials={socials} />
        </Tabs>
      ) : (
        <Tabs state={[index, setIndex]}>
          <Sidebar mobile={mobile}>
            <ImageTitleWrap>
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
              <Title>{data.pageTitle}</Title>
            </ImageTitleWrap>
            <SidebarTabs mobile={mobile} />
            <Pages pages={pages} />
            <SocialButtonsWrap>
              {socials.map((social) => (
                <SocialLinkButton
                  key={social.name}
                  href={social.url}
                  icon={data.twitterIcon}
                ></SocialLinkButton>
              ))}
            </SocialButtonsWrap>
          </Sidebar>
          <EverythingElseWrap>
            <DesktopHeader1>
              <Blurb>
                Gareth is {author.summary}
                {` `}
                <a href={`${socials.twitter.url}`}>Follow him on Twitter!</a>
              </Blurb>
              <QotD>{data.quote}</QotD>
              <DelightButton onClick={delight} />
              <MoreLessButtonShadowElement header={headerState} />
            </DesktopHeader1>
            <ContentWrap>
              <DesktopHeader2>
                <p>Flash text.</p>
                <MoreLessButtonShadowElement header={headerState} />
              </DesktopHeader2>
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
                <Dog />
              </Panel>
            </ContentWrap>
          </EverythingElseWrap>
        </Tabs>
      )}
      <MoreLessButton
        top={determineMe}
        type={howDoWeDetermineThis}
        onMoreLess={handleMoreLess}
      />
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
        socials {
          twitter {
            handle
            name
            url
          }
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
    twitterIcon: file(absolutePath: { regex: "/twitter.svg/" }) {
      publicURL
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

// {
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
// }

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
