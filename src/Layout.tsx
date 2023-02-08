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
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 3rem;
  width: 1140px;
  background-color: var(--main-bg);
`

export default Layout
