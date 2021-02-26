//Libraries
import styled from "styled-components";

export const FeatureContainer = styled.section`
  // defining the grid values and positioning in relation to container grid using column names
  grid-column: center-start / center-end;
  justify-self: center;

  margin: 0rem 0;
  height: min-content;
  border-bottom: 5px solid #eb5e28;

  display: flex; // flex lets it to have all items in a single row
  flex-direction: row;
  flex-wrap: wrap; // lets the flex to occupy new row when space is not enough
  justify-content: center; // Horizontally align items inside the flex container
  align-items: center; // Vertically align items inside the flex container
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column; // changing the direction to vertical
  align-items: center; // centering icons in horizontal
  justify-content: center; // centering icons in vertical
  color: #102539;

  // defining the size and property of each flex-cell
  width: 2.5rem;
  height: 2.5rem;

  width: min-content;
  height: min-content;

  
  ${'' /* padding-right: 2px;
  padding-left: 2px; */}
  background-color: rgba(182, 125, 144, 0.025);
  border-radius: 50%;
 
  margin-right: .15rem;
  margin-left: .15rem;

  &:hover {
    color: #003153;
  }
`;

export const Icon = styled.svg`
    display: grid;
    place-items: center;

  ${'' /* background: pink; */}
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  ${'' /* width: 100%;
  height: 100%; */}
  fill: currentColor;
`;