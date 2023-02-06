import React, { useState } from 'react';
import styled from 'styled-components';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <>
      <Button onClick={open}>
        <span />
        <span />
        <span />
      </Button>
      <Overlay isOpen={isOpen}>
        <Menu isOpen={isOpen} />
        <Close isOpen={isOpen} onClick={close}/>
      </Overlay>
    </>
  );
}

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  z-index: 99;
  background: transparent;
  border: none;

  span {
    height: 3px;
    display: block;
    background-color: white;
    width: 36px;
  }

  span:nth-child(even) {
    width: 30px;
  }
`

const Overlay = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .6s;
  z-index: 10000;
  left: ${({isOpen}) => isOpen ? '0' : '-100%'};
  opacity: ${({isOpen}) => isOpen ? '1' : '0'};
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
`

const Menu = styled.div<{isOpen: boolean}>`
  position: fixed;
  width: 345px;
  height: 100%;
  min-height: 100%;
  max-width: 75%;
  overflow: hidden;
  background: #0e1111;
  left: ${({isOpen}) => isOpen ? '0' : '-100%'};
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
  transition: all .6s;
  z-index: 10001;
`

const Close = styled.div<{isOpen: boolean}>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .75;
  position: fixed;
  background: #3b444b;
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
`

export default BurgerMenu;
