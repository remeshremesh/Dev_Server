//Libraries
import styled, {createGlobalStyle, css, keyframes} from "styled-components";
import { rgba } from "polished";
import colors from '../../design/colors';
import shadows from '../../design/shadows.styles';

const duration ={
  transtion:'0.45s',
 };

const backgroundColor= 'transparent';

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  width: 180px;
  height: 64px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  background: ${(p) => (p.isComplete ? `#16bd92` : `white`)};
  background: ${(p) => p.isComplete && p.isError && `#fb6767`};

  color: ${(p) => (p.isComplete ? "white" : "#EB5E28")};
  box-shadow: ${shadows.neumorphic.extra};
  transition: backgorund 0.5s;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;

const loadKeyFrames = keyframes`
0% { transform: translateX(-110%);}
100% { transform: translateX(110%)};
`;

export const Loader = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;

  background: linear-gradient(to right, #fc00ff, #00dbde);
  background: linear-gradient(to right, #102539, #fd6a0f);

  animation: ${loadKeyFrames} 1s 5;
`;