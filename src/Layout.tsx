import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import BurgerMenu from './BurgerMenu'
import FollowMe from './FollowMe'
import NavigationDots from './NavigationDots'

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 1.5,
}

function Layout() {
  const { pathname } = useLocation()

  return (
    <Center>
      <BurgerMenu />
      <FollowMe />
      <Content>
        <motion.div
          key={pathname}
          initial='initial'
          animate='in'
          variants={pageVariants}
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
      </Content>
      <NavigationDots />
    </Center>
  )
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1400px;
  @media screen and (max-width: 1550px) {
    width: 1280px;
  }
  @media screen and (max-width: 1400px) {
    width: 900px;
  }
  @media screen and (max-width: 1040px) {
    width: 700px;
  }
  @media screen and (max-width: 840px) {
    width: 600px;
  }
  @media screen and (max-width: 720px) {
    width: 500px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3rem;
  background-color: var(--main-bg-primary);
  @media screen and (max-width: 620px) {
    background-color: var(--main-bg-primary-alpha);
  }
`

export default Layout
