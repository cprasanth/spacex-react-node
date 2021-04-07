import * as React from "react";
import styled from "styled-components";
import { device } from "../helpers";

export const GridFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  && > * {
    margin-bottom: 30px;
    @media ${device.mobileL} {
      flex: 0 100%;
    }
    @media ${device.laptop} {
      flex: 0 32%;
    }
    @media ${device.desktop} {
      flex: 0 24%;
    }
  }
`;

const grid = (props) => <GridFrame>{props.children}</GridFrame>;

export default grid;
