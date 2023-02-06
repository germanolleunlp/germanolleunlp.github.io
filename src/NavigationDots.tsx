import React from 'react';
import styled from 'styled-components';
import { Vertical } from './Base';
import URLS from './Urls'


function NavigationDots() {
  return (
    <StyledVertical>
      <ul>
        {URLS.map(({ key, url }) => (
          <li key={key}>
            <a href={url}>
              <span className="circle"></span>
            </a>
          </li>
          ))}
      </ul>
    </StyledVertical>
    );
}

const StyledVertical = styled(Vertical)`
  color: white;
  right: 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    outline: inherit;
    margin-bottom: 14px;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    outline: none;

    .circle {
      width: 10px;
      height: 10px;
      display: block;
      border-radius: 50%;
      border: 1px solid white;
      transition: background-color .3s ease-in-out 0s;
    }

    &:hover,
    &:focus,
    &:active {
      .circle {
        background-color: white;
      }
    }
  }
`

export default NavigationDots;
