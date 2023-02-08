import React from 'react'
import { Title } from './Base'
import Dot from './Dot'
import BackLink from './BackLink'
import { HOME } from './Urls'

function NoMatch() {
  return (
    <div>
      <Dot text='404' />
      <Title>Nothing to see here!</Title>
      <img src='/this-is-fine.gif' />
      <br />
      <BackLink url={HOME} text='Go to home' />
    </div>
  )
}

export default NoMatch
