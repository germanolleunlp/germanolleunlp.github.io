import React from 'react';
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import FollowMe from "./FollowMe";
import NavigationDots from "./NavigationDots";

function Layout() {
  return (
    <Center>
      <FollowMe />
      <Content>
        <Outlet />
      </Content>
      <NavigationDots />
    </Center>
    );
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 1rem;
`

const Content = styled.div`
  align-self: center;
  margin: auto 50px;
  padding: 1rem;
`

export default Layout;
