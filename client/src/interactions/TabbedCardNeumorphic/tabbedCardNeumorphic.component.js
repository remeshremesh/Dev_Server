//Basics
import React, { useState } from "react";

//Styles
import { Row, Underline, Button, Content, Card, Tab } from "./tabbedCardNeumorphic.styles";
import reactLogo from '../../assets/img/reactLogo.png'
import mongoLogo from '../../assets/img/mongoLogo.png'
import nodeLogo from '../../assets/img/nodeLogo.png'
// import {Row, Avatar, Name, Card, List} from './tabbedCard.styles';


export const tabs = ["Goal", "Challenge", "Stack"];
export const tabHeaders = ["Vibrant", "Pretty", "Awesome"];

//Code
export const Tabs = ({active, setActive}) => (
  <Row>
    <Underline active={active} />
    {tabs.map((tab, index) => (
      <Button active={active === index} onClick={() => setActive(index)}>
        {tab}
      </Button>
    ))}
  </Row>
);


export const TabbedCard = () => {
  const [active, setActive] = useState(0);

  return (
    <Card>
      <Content active={active}>
        <Tab>
          This project was an effort to better understand human behaviour.
        </Tab>
        <Tab>
          The most challenging part is mapping the real complex cognitive
          problem into a functional code.
        </Tab>
        <Tab>
          Server-Side:
          <div style={{ display: "flex", marginButtom: "1rem" }}>
            <img
              src={reactLogo}
              style={{ marginRight: "1rem" }}
              height="30px"
            />
            <img src={nodeLogo} style={{ marginRight: "1rem" }} height="30px" />
            <img
              src={mongoLogo}
              style={{ marginRight: "1rem" }}
              height="30px"
            />
          </div>
          Logic:
          <div style={{ display: "flex" }}>
            <img
              src={reactLogo}
              style={{ marginRight: "1rem" }}
              height="30px"
            />
            <img src={nodeLogo} style={{ marginRight: "1rem" }} height="30px" />
            <img
              src={mongoLogo}
              style={{ marginRight: "1rem" }}
              height="30px"
            />
          </div>
        </Tab>
        {/* {tabs.map((tab) => (
          <Tab>
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                height: "50px",
                width: "50px",
              }}
            >
              <img
                src="https://www.gannett-cdn.com/presto/2020/03/13/USAT/1c2efdbb-5801-4f59-860b-ff0874040fb6-VPC_CORONAVIRUS_CLOSES_DISNEY_PARKS_DESK_THUMB.jpg?crop=1911,1075,x2,y2&width=1911&height=1075&format=pjpg&auto=webp"
                width="50px"
                height="50px"
              />
            </div>
          </Tab>
        ))} */}
      </Content>
      <Tabs active={active} setActive={setActive} />
    </Card>
  );
};

export default TabbedCard;
// //Code
// const LazyLoadRow = ({ name, likes, background }) => (
//   <>
//     <Row isLoading>
//       <Avatar />
//       <Name />
//     </Row>
//     <LazyLoad height={56}>
//       <Row>
//         <Avatar style={{ background }}>
//           {name.split(" ", 2)[0].substring(0, 1)}
//           {name.split(" ", 2)[1].substring(0, 1)}
//         </Avatar>
//         <Name>{name}</Name>
//       </Row>
//     </LazyLoad>
//   </>
// );

// const LazyLoadCard = () => (
//   <Card>
//     <List>
//       <Row>
//         <Avatar style={{ background: "lightyellow", color: "black" }}>
//           AK
//           {/* {name} */}
//         </Avatar>
//         <Name>Aftofl Big5</Name>
//       </Row>
//       <Row>
//         <Avatar style={{ background: "pink", color: "black" }}>
//           JAMA
//           {/* {name} */}
//         </Avatar>
//         <Name>DR JAMA FelFel</Name>
//       </Row>
//       <Row>
//         <Avatar style={{ background: "lightblue", color: "black" }}>
//           PLPO
//           {/* {name} */}
//         </Avatar>
//         <Name>POLPO Nanaj</Name>
//       </Row>
//       {json.map((obj) => (
//         <LazyLoadRow key={obj.id} name={obj.name} background={obj.background} />
//       ))}
//     </List>
//   </Card>
// );



//Export
// export default LazyLoadCard;
