import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { InlineContent } from './Base'

interface BackLinkProps {
  url: string
  text: string
}

function BackLink({ url, text }: BackLinkProps) {
  return (
    <Back>
      <InlineContent style={{ gap: 12 }} aligned>
        <RiArrowGoBackFill />
        <Link to={url}>{text}</Link>
      </InlineContent>
    </Back>
  )
}

const Back = styled.div`
  display: inline-block;
  margin: 0.5rem 0;
  color: var(--main-secondary);
  opacity: 0.75;
  transition: opacity 0.4s ease-in-out 0s;
  text-transform: uppercase;
  font-weight: 700;
  padding: 5px 15px;
  border: 1px solid;

  &:hover,
  &:focus {
    opacity: 1;
  }
`

export default BackLink
