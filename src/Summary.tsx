import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Summary() {
  return (
    <h1>
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
    </h1>
  );
}

export default Summary;
