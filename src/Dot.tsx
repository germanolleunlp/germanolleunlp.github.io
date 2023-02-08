import React from 'react'
import styled from 'styled-components'

interface DotProps {
  text?: string
  icon?: JSX.Element | null
  bottom?: boolean
}

function Dot({ text = '', icon = null, bottom = false }: DotProps) {
  return (
    <StyledDot bottom={!!bottom}>
      <Content bottom={!!bottom}>
        {text?.length > 0 && <Text>{text}</Text>}
        {icon !== null && <Icon>{icon}</Icon>}
      </Content>
    </StyledDot>
  )
}

const StyledDot = styled.div<{ bottom: boolean }>`
  position: relative;
  display: ${({ bottom }) => (bottom ? 'block' : 'inline-block')};
  text-align: ${({ bottom }) => (bottom ? 'center' : 'left')};
  &::before {
    content: '';
    position: absolute;
    left: ${({ bottom }) => (bottom ? '0' : 'initial')};
    right: ${({ bottom }) => (bottom ? '0' : 'initial')};
    margin: ${({ bottom }) => (bottom ? 'auto' : '0')};
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: var(--main-secondary);
    z-index: 10;
  }
`

const Content = styled.div<{ bottom: boolean }>`
  position: relative;
  z-index: 20;
  padding: ${({ bottom }) => (bottom ? '15px 0 0' : '10px 0 0 15px')};
`

const Text = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
`

const Icon = styled.span`
  display: block;
  font-size: 38px;
`

export default Dot
