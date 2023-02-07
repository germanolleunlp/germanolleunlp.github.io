import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Vertical } from './Base';
import Circle from './Circle';
import URLS from './Urls';

function NavigationDots() {
  return (
    <StyledVertical>
      <ul>
        {URLS.map(({ key, url }) => (
          <li key={key}>
            <NavLink to={url}>
              {({ isActive }) => (
                <Circle isActive={isActive} />
              )}
            </NavLink>
          </li>
          ))}
      </ul>
    </StyledVertical>
  );
}

const StyledVertical = styled(Vertical)`
  color: white;
  right: 0;
  width: 3rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    outline: inherit;
    margin-bottom: 14px;
    padding: 0;
  }
`

export default NavigationDots;
