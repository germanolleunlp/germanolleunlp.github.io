import React from 'react'
import styled from 'styled-components'
import Dot from './Dot'
import { Title, InlineContent } from './Base'

function Contact() {
  return (
    <InlineContent>
      <img src='/contact.jpg' />
      <div>
        <Dot text='Conact Me' />
        <Title>Get in touch with me today.</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link href='mailto:germanolle@gmail.com' target='_blank'>
          Send me an email
        </Link>
      </div>
    </InlineContent>
  )
}

const Link = styled.a`
  display: inline-block;
  background: var(--main-secondary);
  cursor: pointer;
  color: var(--main-bg-primary);
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 30px;
`

export default Contact
