import React from 'react';
import styled from 'styled-components';
import Summary from "./Summary";
import FollowMe from "./FollowMe";
import NavigationDots from "./NavigationDots";

function App() {
  return (
    <Center>
      <FollowMe />
      <Summary />
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

export default App;
