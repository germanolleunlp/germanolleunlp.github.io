import React from 'react'
import styled from 'styled-components'
import type { IconType } from 'react-icons'
import { MdWeb, MdDeveloperBoard } from 'react-icons/md'
import { TfiBrushAlt } from 'react-icons/tfi'
import { HiPhotograph } from 'react-icons/hi'
import Dot from './Dot'
import { Title, InlineContent } from './Base'

interface SkillProps {
  key: string
  title: string
  description: string
  icon: IconType
}

const SKILLS: SkillProps[] = [
  {
    key: 'web_design',
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    icon: MdWeb,
  },
  {
    key: 'development',
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    icon: MdDeveloperBoard,
  },
  {
    key: 'ui_ux',
    title: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    icon: TfiBrushAlt,
  },
  {
    key: 'graphic_design',
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    icon: HiPhotograph,
  },
]

function About() {
  return (
    <InlineContent>
      <img src='http://miro.afracode.com/assets/images/about/5-1.jpg' />
      <div>
        <Dot text='About Me' />
        <Title>Hello, I am German Olle</Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Ut enim ad minim enim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        {SKILLS.map(({ key, title, description, icon: Icon }: SkillProps) => (
          <InlineContent key={key} style={{ width: '50%', gap: 20 }}>
            <Dot icon={<Icon />} />
            <Skill>
              <h4>{title}</h4>
              <p>{description}</p>
            </Skill>
          </InlineContent>
        ))}
      </div>
    </InlineContent>
  )
}

const Skill = styled.div`
  margin: 0 0 1.5rem 0;

  h4 {
    margin: 0 0 1rem 0;
    font-weight: 700;
  }
  p {
    margin: 0;
  }
`

export default About
