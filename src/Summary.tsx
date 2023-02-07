import React from 'react';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

function Summary() {
  return (
    <Code>
      <TypeAnimation
        sequence={[
        "I'm a senior web developer.",
        1500,
        "I'm full-stack software engineer.",
        2000,
        "I've strong UI/UX skiils.",
        1500
      ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
      <br />
      I create Websites and Applications.
      <br />
      Based in Santa Fe, Argentina.
    </Code>
  );
}

const Code = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.4;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  @media screen and (max-width: 1400px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 460px) {
    font-size: 1rem;
  }
`

export default Summary;
