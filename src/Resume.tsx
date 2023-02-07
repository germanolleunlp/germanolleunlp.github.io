import React from 'react'
import { MdWeb } from 'react-icons/md'
import Dot from './Dot'
import { Title, InlineContent } from './Base'
import Timeline from './Timeline'
import type { ItemProps } from './Timeline'

const EXPERIENCE: ItemProps[] = [
  {
    key: 'freelance',
    title: 'Freelance FullStack Developer',
    company: 'Google INC | New York (2016-2018)',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    icon: MdWeb,
  },
  {
    key: 'frontend',
    title: 'Front-End Developer',
    company: 'Amazon INC | New York (2016-2018)',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    icon: MdWeb,
  },
  {
    key: 'backend',
    title: 'Back-End Developer',
    company: 'Facebook INC | New York (2016-2018)',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    icon: MdWeb,
  },
]

function Resume() {
  return (
    <>
      <Dot text='Resume' />
      <Title>Education & Experience</Title>
      <InlineContent>
        <Timeline title='Education' items={EXPERIENCE} />
        <Timeline title='Experience' items={EXPERIENCE} />
      </InlineContent>
    </>
  )
}

export default Resume
