import React, { useEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
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

// * localstorage feature detection https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API * //
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

const MobileHeader1 = styled.header`
  width: 100vw;
  height: 15vh;
  background: green;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Sidebar = styled.nav`
  position: ${props => (props.mobile ? "absolute" : "static")};
  height: ${props => (props.mobile ? "85vh" : "100vh")};
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
  const twitterHandle = socials.filter(social => social.name === "Twitter")[0]
    .handle;
  const twitterUrl = socials.filter(social => social.name === "Twitter")[0].url;
  const [headerState, setHeaderState] = useState({});
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
  const isMobileRef = useRef();
  useEffect(() => {
    if (typeof window !== `undefined`) {
      isMobileRef.current = window.innerWidth <= 640;
      if (storageAvailable("localStorage")) {
        // If we have localStorage:
        const storedHeaderState = JSON.parse(
          localStorage.getItem("headerState")
        );
        // capture storedHeaderState if it's there
        if (
          storedHeaderState &&
          typeof storedHeaderState.mobile === `boolean` &&
          typeof storedHeaderState.headerCount === `number` &&
          storedHeaderState.headerCount >= 0 &&
          storedHeaderState.headerCount <= 3
        ) {
          // if there's storedHeaderState and the general shape is valid
          if (!storedHeaderState.mobile) {
            // and it was on desktop
            if (isMobileRef) {
              // but if we're actually on mobile
              localStorage.setItem(
                "headerState",
                JSON.stringify({
                  mobile: true,
                  headerCount: 3,
                })
              );
              // set the default for mobile in localStorage
              setHeaderState({
                mobile: true,
                headerCount: 3,
              });
              // and in state
            } else {
              // but if *are* on desktop
              if (storedHeaderState.headerCount <= 2) {
                // and the count is still valid
                setHeaderState({
                  mobile: false,
                  headerCount: storedHeaderState.headerCount,
                });
                // set state to prior state
              } else {
                // but if the stored count is not valid
                localStorage.setItem(
                  "headerState",
                  JSON.stringify({
                    mobile: false,
                    headerCount: 2,
                  })
                );
                // set the default for desktop in localStorage
                setHeaderState({
                  mobile: false,
                  headerCount: 2,
                });
                // and in state
              }
            }
          } else {
            // it was on mobile, so
            if (isMobileRef.current) {
              // if we're on mobile
              setHeaderState({
                mobile: true,
                headerCount: storedHeaderState.headerCount,
              });
              // set prior state
            } else {
              // but if we're actually on desktop
              localStorage.setItem(
                "headerState",
                JSON.stringify({
                  mobile: false,
                  headerCount: 2,
                })
              );
              // set the default for desktop in localStorage
              setHeaderState({
                mobile: false,
                headerCount: 2,
              });
              // and in state
            }
          }
        } else {
          // but if the stored state wasn't generally valid
          if (isMobileRef.current) {
            // and we're on moblie
            localStorage.setItem(
              "headerState",
              JSON.stringify({
                mobile: true,
                headerCount: 3,
              })
            );
            // set the default for mobile in localStorage
            setHeaderState({
              mobile: true,
              headerCount: 3,
            });
            // and in state
          } else {
            // or if we're on desktop
            localStorage.setItem(
              "headerState",
              JSON.stringify({
                mobile: false,
                headerCount: 2,
              })
            );
            // set the default for desktop in localStorage
            setHeaderState({
              mobile: false,
              headerCount: 2,
            });
            // and in state
          }
        }
      } else {
        // but if there's no localStorage
        if (isMobileRef.current) {
          setHeaderState({
            mobile: true,
            headerCount: 3,
          });
        } else {
          setHeaderState({
            mobile: false,
            headerCount: 2,
          });
        }
        // set state based on mobile or not
      }
    } // otherwise we're in Node
  }, []);
  return (
    <Layout location={location} title={title} mobile={isMobileRef.current}>
      <SEO title="Home page" />
      {isMobileRef.current ? (
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
            <MoreLessButtonShadowElement headerState={headerState} />
          </MobileHeader1>
          <ContentWrap>
            <MobileHeader2>
              <Blurb>
                Gareth is {author.summary}
                {` `}
                <a href={`https://twitter.com/${twitterHandle}`}>
                  Follow him on Twitter!
                </a>
              </Blurb>
              <MoreLessButtonShadowElement headerState={headerState} />
            </MobileHeader2>
            <MobileHeader3>
              <QotD>{data.quote}</QotD>
              <DelightButton onClick={delight} />
              <MoreLessButtonShadowElement headerState={headerState} />
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
            <SidebarTabs mobile={isMobileRef.current} />
            <Pages pages={pages} />
            <SocialsButton onClick={openSocials} />
            <SidebarToggle onClick={toggleSidebar} />
          </Sidebar>
          <SocialsModal hidden={!socialsOpen} socials={socials} />
        </Tabs>
      ) : (
        <Tabs state={[index, setIndex]}>
          <Sidebar mobile={isMobileRef.current}>
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
            <SidebarTabs mobile={isMobileRef.current} />
            <Pages pages={pages} />
            <SocialButtonsWrap>
              {socials.map(social => (
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
                <a href={`${twitterUrl}`}>Follow him on Twitter!</a>
              </Blurb>
              <QotD>{data.quote}</QotD>
              <DelightButton onClick={delight} />
              <MoreLessButtonShadowElement headerState={headerState} />
            </DesktopHeader1>
            <ContentWrap>
              <DesktopHeader2>
                <p>Flash text.</p>
                <MoreLessButtonShadowElement headerState={headerState} />
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
          handle
          name
          url
        }
        pages {
          name
          url
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
