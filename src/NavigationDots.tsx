import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FixedCentered } from './Base'
import Circle from './Circle'
import URLS from './Urls'

function NavigationDots() {
  return (
    <FixedCentered style={{ bottom: '1rem' }}>
      <Content>
        {URLS.map(({ key, url }) => (
          <NavLink key={key} to={url}>
            {({ isActive }) => <Circle isActive={isActive} />}
          </NavLink>
        ))}
      </Content>
    </FixedCentered>
  )
}

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 25px;
`

export default NavigationDots
