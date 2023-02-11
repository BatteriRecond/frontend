import { css } from "@emotion/react";
import styled from "@emotion/styled";

const dynamicHeight = ({ isCollapsed }) =>
  css`
    height: ${isCollapsed ? "80px" : "auto"};
  `;

export const Expandable = styled.div`
  ${dynamicHeight}
  overflow: hidden
`;
