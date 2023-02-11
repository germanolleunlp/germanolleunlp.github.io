import React from 'react'
import { FixedCentered } from './Base'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

function FollowMe() {
  return (
    <FixedCentered style={{ top: '1rem' }}>
      <Content>
        <a href='https://github.com/germanolleunlp' rel='noreferrer' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://linkedin.com/in/germanolle' rel='noreferrer' target='_blank'>
          <FaLinkedin />
        </a>
        <p>Follow Me</p>
      </Content>
    </FixedCentered>
  )
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 1rem;
  height: 50px;

  a {
    display: contents;
    transition: all 0.4s ease-in-out 0s;
    &:hover,
    &:focus {
      font-size: 2rem;
    }
  }

  p {
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    margin: 0;
  }
`

export default FollowMe
