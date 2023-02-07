import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

import { Vertical } from './Base'

function FollowMe() {
  return (
    <StyledVertical>
      <ul>
        <li>
          <a href='https://github.com/germanolleunlp' rel='noreferrer' target='_blank'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/in/germanolle' rel='noreferrer' target='_blank'>
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <span />
      <p>Follow Me</p>
    </StyledVertical>
  )
}

const StyledVertical = styled(Vertical)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  color: white;
  width: 3rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: block;
    text-align: center;
    transition: all 0.3s;
    outline: inherit;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  a {
    transition: all 0.4s ease-in-out 0s;
    &:hover,
    &:focus {
      font-size: 24px;
    }
  }

  span {
    display: block;
    width: 3px;
    height: 40px;
    background: white;
    margin-bottom: 25px;
  }

  p {
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    transform: rotate(-90deg);
    margin: 0;
  }
`

export default FollowMe
