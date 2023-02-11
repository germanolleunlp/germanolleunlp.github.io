import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import styled from 'styled-components'

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
          1500,
        ]}
        wrapper='span'
        cursor={true}
        repeat={Infinity}
        style={{ color: 'var(--main-secondary)' }}
      />
      <br />
      I create Websites and Applications.
      <br />
      Based in Santa Fe, Argentina.
    </Code>
  )
}

const Code = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.4;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

export default Summary
