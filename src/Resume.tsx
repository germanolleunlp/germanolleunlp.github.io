import React from 'react'
import { MdWeb } from 'react-icons/md'
import Dot from './Dot'
import { Heading, InlineContent } from './Base'
import Timeline from './Timeline'
import type { ItemProps } from './Timeline'

const EDUCATION: ItemProps[] = [
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

const EXPERIENCE: ItemProps[] = [
  {
    key: 'freelance',
    title: 'Freelance FullStack Developer',
    company: 'Google INC | New York (2016-2018)',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    skills: [
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'GraphQL',
      'Python',
      'Django',
      'AWS',
      'Docker',
      'Ruby',
      'Ruby On Rails',
    ],
    icon: MdWeb,
  },
  {
    key: 'frontend',
    title: 'Front-End Developer',
    company: 'Amazon INC | New York (2016-2018)',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    skills: [
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'GraphQL',
      'Python',
      'Django',
      'AWS',
      'Docker',
      'Ruby',
      'Ruby On Rails',
    ],
    icon: MdWeb,
  },
  {
    key: 'backend',
    title: 'Back-End Developer',
    company: 'Facebook INC | New York (2016-2018)',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    skills: [
      'JavaScript',
      'ReactJS',
      'NodeJS',
      'GraphQL',
      'Python',
      'Django',
      'AWS',
      'Docker',
      'Ruby',
      'Ruby On Rails',
    ],
    icon: MdWeb,
  },
]

function Resume() {
  return (
    <>
      <Dot text='Resume' bottom />
      <Heading>Education & Experience</Heading>
      <InlineContent>
        <Timeline width='40%' title='Education' items={EDUCATION} />
        <Timeline width='60%' title='Experience' items={EXPERIENCE} />
      </InlineContent>
    </>
  )
}

export default Resume
