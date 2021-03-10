import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";
import useDimensions from "react-use-dimensions";
import useWindowSize from "@rehooks/window-size";
import MotionSlider from "./Motion3DSlider";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  body { overflow-x: hidden; }
`;

const Space = styled.div`
  height: ${({ height }) => height}px;
`;

const Wrapper = styled.div`
  margin: auto;
  height: 100vh;
`;

const Element = styled.div`
  width: calc(60vw - 40px);
  height: 400px;
  background: blueviolet;
`;

const Text = styled.div`
  font-family: "Montserrat", "sans-serif";
  font-weight: 900;
  font-size: 48px;
`;

function App() {
  const windowDimensions = useWindowSize();

  const infoList = [...Array(10)];
  const arryNum = infoList.length;
  const middleArg = -Math.abs(
    (arryNum / 2) * -1 + windowDimensions.innerWidth - 60
  );

  return (
    <Wrapper>
      <GlobalStyle />
      <Space height={60} />
      <MotionSlider
        padding={50}
        gap={20}
        middle={middleArg}
        middleNum={arryNum}
      >
        {infoList.map((item, i) => (
          <Element />
        ))}
      </MotionSlider>
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
