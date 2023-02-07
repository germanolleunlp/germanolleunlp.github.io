import React from 'react'
import Dot from './Dot'
import { Title, InlineContent } from './Base'

function About() {
  return (
    <InlineContent>
      <img src='http://miro.afracode.com/assets/images/about/5-1.jpg' />
      <div>
        <Dot text='About Me' />
        <Title>Hello, I am German Olle</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Ut enim ad minim enim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </InlineContent>
  )
}

export default About
