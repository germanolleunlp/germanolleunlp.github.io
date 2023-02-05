import React from 'react';
import styled from 'styled-components';
import Summary from "./Summary";

function App() {
  return (
    <Center>
      <Summary />
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
