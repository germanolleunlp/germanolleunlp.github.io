import React from 'react'
import styled from 'styled-components'

interface DotProps {
  text?: string
  icon?: JSX.Element | null
  bottom?: boolean
}

function Dot({ text = '', icon = null, bottom = false }: DotProps) {
  return (
    <StyledDot>
      <Content bottom={bottom}>
        {text?.length > 0 && <Text bottom={bottom}>{text}</Text>}
        {icon !== null && <Icon>{icon}</Icon>}
      </Content>
    </StyledDot>
  )
}

const StyledDot = styled.div`
  display: inline-block;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: var(--main-secondary);
    z-index: -1;
  }
`

const Content = styled.div<{ bottom: boolean }>`
  padding: 10px 0 0 15px;
`

const Text = styled.h3<{ bottom: boolean }>`
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
`

const Icon = styled.span`
  display: block;
  font-size: 38px;
`

export default Dot
