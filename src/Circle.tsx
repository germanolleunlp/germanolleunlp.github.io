import React from 'react'
import styled from 'styled-components'

interface CircleProps {
  isActive: boolean
}

function Circle({ isActive = false }: CircleProps) {
  return <Dot isActive={isActive} />
}

const Dot = styled.span<CircleProps>`
  width: 10px;
  height: 10px;
  display: block;
  border-radius: 50%;
  border: 1px solid var(--main-primary);
  background-color: ${({ isActive }) => (isActive ? 'var(--main-primary)' : 'transparent')};
`

export default Circle
