import React, { forwardRef, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { useTabState } from "@bumaga/tabs";
import { scale } from "../utils";

const Tab = forwardRef((props, ref) => {
  const { onClick } = useTabState();
  // probably have a props.mobile here
  return (
    <Button ref={ref} onClick={onClick} type={props.type}>
      <ButtonContentsWrapper type={props.type}>
        {props.children}
      </ButtonContentsWrapper>
    </Button>
  );
});

const Button = styled.button`
  background: navajowhite;
`;

const ButtonContentsWrapper = styled.div`
  text-align: center;
`;

const TabsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconSVG = styled.img`
  height: 2rem;
  width: 2rem;
`;

const ButtonText = styled.span`
  display: inline-block;
`;

export const SidebarTabs = () => {
  const data = useStaticQuery(graphql`
    query SidebarTabsQuery {
      runningIcon: file(absolutePath: { regex: "/running.svg/" }) {
        publicURL
      }
      codingIcon: file(absolutePath: { regex: "/coding.svg/" }) {
        publicURL
      }
      coffeeIcon: file(absolutePath: { regex: "/coffee.svg/" }) {
        publicURL
      }
      dogIcon: file(absolutePath: { regex: "/dog.svg/" }) {
        publicURL
      }
    }
  `);
  // ... what does this do?
  const codingRef = useRef();
  useEffect(() => {
    codingRef.current.focus();
  }, []);
  return (
    <TabsWrap>
      <Tab type="running">
        <IconSVG src={data.runningIcon.publicURL} alt="" id="running" />
        <ButtonText style={{ ...scale(3 / 4) }}>Running</ButtonText>
      </Tab>
      <Tab type="coding" ref={codingRef}>
        <IconSVG src={data.codingIcon.publicURL} alt="" id="coding" />
        <ButtonText style={{ ...scale(3 / 4) }}>Coding</ButtonText>
      </Tab>
      <Tab type="coffee">
        <IconSVG src={data.coffeeIcon.publicURL} alt="" id="coffee" />
        <ButtonText style={{ ...scale(3 / 4) }}>Coffee</ButtonText>
      </Tab>
      <Tab type="dog">
        <IconSVG src={data.dogIcon.publicURL} alt="" id="dog" />
        <ButtonText style={{ ...scale(3 / 4) }}>Dog</ButtonText>
      </Tab>
    </TabsWrap>
  );
};
