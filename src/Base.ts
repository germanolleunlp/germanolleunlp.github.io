import styled from 'styled-components'

export const Vertical = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
`

export const Title = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: 2rem;
  &:after {
    content: '';
    display: block;
    margin-top: 1rem;
    width: 100px;
    height: 5px;
    border-radius: 4px;
    background: var(--main-secondary);
  }
`

export const Subtitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  &:after {
    content: '';
    display: block;
    margin: 0.5rem auto 0 auto;
    width: 100px;
    height: 3px;
    border-radius: 4px;
    background: var(--main-secondary);
  }
`

export const InlineContent = styled.div`
  display: inline-flex;
  gap: 50px;
`
