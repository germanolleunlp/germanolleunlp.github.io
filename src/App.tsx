import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import Layout from './Layout'
import NoMatch from './NoMatch'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Summary from './Summary'
import Testimonial from './Testimonial'

import { ABOUT, CONTACT, HOME, PORTFOLIO, RESUME, TESTIMONIAL } from './Urls'

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Summary />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={RESUME} element={<Resume />} />
        <Route path={PORTFOLIO} element={<Portfolio />} />
        <Route path={TESTIMONIAL} element={<Testimonial />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
