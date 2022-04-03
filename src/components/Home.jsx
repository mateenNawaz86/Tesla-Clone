import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  const pagesData = [
    {
      modelName: "Model 3",
      description: "Order Online for",
      spanText: "Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImg: "model-3.jpg",
    },
    {
      modelName: "Model Y",
      description: "Order Online for",
      spanText: "Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImg: "model-y.jpg",
    },
    {
      modelName: "Model S",
      description: "Order Online for",
      spanText: "Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImg: "model-s.jpg",
    },
    {
      modelName: "Model X",
      description: "Order Online for",
      spanText: "Touchless Delivery",
      leftBtnText: "Custom Order",
      rightBtnText: "Existing Inventory",
      backgroundImg: "model-x.jpg",
    },
    {
      modelName: "Solar Panels",
      description: "Lowest Cost Solar Panels in America",
      leftBtnText: "Order Now",
      rightBtnText: "Learn More",
      backgroundImg: "solar-panel.jpg",
    },
    {
      modelName: "Solar Roof",
      description: "Produce Clean Energy From Your Roof",
      leftBtnText: "Order Now",
      rightBtnText: "Learn More",
      backgroundImg: "solar-roof.jpg",
    },
    {
      modelName: "Accessories",
      leftBtnText: "shop Now",
      backgroundImg: "accessories.jpg",
    },
  ];
  return (
    <>
      <Container>
        {pagesData.map((item, index) => {
          return (
            <Section
              title={item.modelName}
              description={item.description}
              spanText={item.spanText}
              leftBtn={item.leftBtnText}
              rightBtn={item.rightBtnText}
              backgroundImg={item.backgroundImg}
              key={index}
            />
          );
        })}
      </Container>
    </>
  );
};

export default Home;

// Container styled-component
const Container = styled.div``;
