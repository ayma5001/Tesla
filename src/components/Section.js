import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  return (
    <Wrap bgImg={props.backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton title={props.leftBtnText}>
              {props.leftBtnText}
            </LeftButton>

            {props.rightBtnText && (
              <RightButton title={props.rightBtnText}>
                {props.rightBtnText}
              </RightButton>
            )}
          </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`;

const LeftButton = styled(Button)`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
`;

const RightButton = styled(Button)`
  background-color: #fff;
  color: #393c41;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  cursor: pointer;
  animation: animationDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
