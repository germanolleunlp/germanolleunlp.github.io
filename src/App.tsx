import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import NoMatch from './NoMatch'

import URLS, { HOME } from './Urls'

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        {URLS.map(({ key, url, component: Component }) => (
          <Route key={key} path={url} element={<Component />} />
        ))}
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
