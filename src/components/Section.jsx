import React from "react";
import styled from "styled-components";

const Section = (props) => {
  const { title, description, spanText, leftBtn, rightBtn, backgroundImg } =
    props;
  return (
    <>
      <Wrap bgImg={backgroundImg}>
        <ItemText>
          <h1>{title}</h1>
          <p>
            {description} <span>{spanText}</span>
          </p>
        </ItemText>

        <Buttons>
          <BtnGroup>
            <LeftBtn>{leftBtn}</LeftBtn>
            <RightBtn>{rightBtn}</RightBtn>
          </BtnGroup>

          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Wrap>
    </>
  );
};

export default Section;

// Wrap styled-component
const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url('/images/${props.bgImg}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// ItemText styled-component
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

// Buttons styled-component
const Buttons = styled.div`
  text-align: center;
`;

// BtnGroup styled-component
const BtnGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// LeftBtn styled-component
const LeftBtn = styled.div`
  height: 40px;
  width: 256px;
  border-radius: 100px;
  color: #fff;
  background-color: #171a20cc;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  margin: 10px;
  cursor: pointer;
  letter-spacing: 0.5px;
`;

// LeftBtn styled-component
const RightBtn = styled(LeftBtn)`
  background-color: #f4f4f4a6;
  color: #393c41;
`;

// DownArrow styled-component
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
