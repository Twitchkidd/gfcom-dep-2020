import React from "react";
import styled from "styled-components";

const StyledSocialsModal = styled.div`
  display: ${props => (props.hidden ? "none" : "block")};
  width: 50px;
`;

const SocialModalLink = styled.a`
  display: flex;
`;

const SocialModalIcon = styled.svg`
  width: 40px;
`;

const SocialModalTitle = styled.span`
  color: blue;
`;

export const SocialsModal = ({ hidden, socials }) => (
  <StyledSocialsModal hidden={hidden}>
    {socials.map(social => (
      <SocialModalLink href={social.link} key={social.name}>
        <SocialModalIcon src={social.icon} />
        <SocialModalTitle>{social.name}</SocialModalTitle>
      </SocialModalLink>
    ))}
  </StyledSocialsModal>
);
