import React from 'react'
import type { IconType } from 'react-icons'
import styled from 'styled-components'

export interface ButtonProps {
  type?: string
  value: string
  icon?: IconType
  onClick: () => void
  disabled?: boolean
}

function Button({ value, onClick, type = 'button', icon: Icon, disabled = false }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {Icon != null && <Icon />}
      {value}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: inline-block;
  background: var(--main-secondary);
  cursor: pointer;
  margin: 0.5rem 0;
  color: var(--main-bg-primary);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 30px;
  border: 0;
  opacity 0.75;
  min-width: 120px;

  &:hover:not(:disabled) {
    opacity 1;
  }

  &:disabled {
    opacity 0.25;
    cursor: not-allowed;
  }
`

export default Button
