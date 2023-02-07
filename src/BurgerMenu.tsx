import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { Vertical } from './Base';
import Circle from './Circle';
import URLS from './Urls';

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
        <Menu isOpen={isOpen}>
          <CloseButton onClick={close}>
            <AiOutlineClose />
          </CloseButton>
          <Vertical>
            <ul>
              {URLS.map(({ key, name, url }) => (
                <li key={key}>
                  <NavLink to={url}>
                    {({ isActive }) => (
                      <Item isActive={isActive}>
                        <Circle isActive={isActive} />
                        <span>{name}</span>
                      </Item>
                    )}
                  </NavLink>
                </li>
                ))}
            </ul>
          </Vertical>
        </Menu>
        <Close isOpen={isOpen} onClick={close} />
      </Overlay>
    </>
  );
}

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;
  position: fixed;
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
  padding: 1rem;
  width: 345px;
  height: 100%;
  min-height: 100%;
  max-width: 75%;
  overflow: hidden;
  background: #0e1111;
  transition: all .6s;
  z-index: 10001;
  left: ${({isOpen}) => isOpen ? '0' : '-100%'};
  visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    outline: inherit;
    margin-bottom: 14px;
  }
`

const Item = styled.span<{isActive: boolean}>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  opacity: ${({isActive}) => isActive ? '1' : '0.75'};
  &:hover {
    opacity: 1
  }

  span {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    @media screen and (max-width: 800px) {
      font-size: 1.5rem;
    }
    @media screen and (max-width: 460px) {
      font-size: 1rem;
    }
  }
`

const CloseButton = styled.button`
  display: flex;
  margin-left: auto;
  padding: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
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
