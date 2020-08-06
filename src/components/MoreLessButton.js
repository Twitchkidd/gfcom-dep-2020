import React from "react";
import styled from "styled-components";

// Needs to make a media query

const StyledMoreLessButton = styled.button`
  width: 50px;
  position: absolute;
  top: ${props => props.top};
`;

const StyledMoreLessButtonShadowElement = styled.div`
  width: 50px;
`;

const StyledMoreLessButtonSvg = styled.svg`
  width: 40px;
`;

const StyledMoreLessButtonText = styled.span`
  font-size: 30px;
`;

export const MoreLessButton = ({ top, type, onMoreLess }) => (
  <StyledMoreLessButton top={top} onClick={onMoreLess}>
    <StyledMoreLessButtonSvg src={type === "more" ? "more.png" : "less.png"} />
    <StyledMoreLessButtonText>
      {type === "more" ? "More" : "Less"}
    </StyledMoreLessButtonText>
  </StyledMoreLessButton>
);

export const MoreLessButtonShadowElement = StyledMoreLessButtonShadowElement;
