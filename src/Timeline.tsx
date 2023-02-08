import React from 'react'
import styled from 'styled-components'
import type { IconType } from 'react-icons'
import Dot from './Dot'
import { Subtitle, InlineContent } from './Base'

export interface ItemProps {
  key: string
  title: string
  company: string
  icon: IconType
  description: string
  skills?: string[]
}

interface TimelineProps {
  title: string
  items: ItemProps[]
  width?: string
}

function Timeline({ title, items, width = 'unset' }: TimelineProps) {
  return (
    <div style={{ width }}>
      <Subtitle>{title}</Subtitle>
      <Line>
        {items.map(({ key, title, company, description, icon: Icon, skills = [] }: ItemProps) => (
          <Item key={key}>
            <div className='content'>
              <InlineContent key={key} style={{ gap: 20 }}>
                <Dot icon={<Icon />} />
                <Header>
                  <h4>{title}</h4>
                  <h5>{company}</h5>
                </Header>
              </InlineContent>
              <p>{description}</p>
              <Skills>
                {skills?.map((skill: string) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </Skills>
            </div>
          </Item>
        ))}
      </Line>
    </div>
  )
}

const Line = styled.div`
  position: relative;
  border-left: 1px solid var(--main-primary);
  padding-left: 30px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--main-secondary);
  }
`

const Item = styled.div`
  padding-top: 3rem;

  .content {
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 25px;
      left: -30px;
      width: 30px;
      height: 1px;
      background-color: var(--main-primary);
    }
  }

  p {
    margin: 0;
    padding: 1.5rem 2rem;
  }
`

const Header = styled.div`
  h4 {
    margin: 0 0 1rem 0;
    font-weight: 700;
  }
  h5 {
    margin: 0;
  }
`

const Skills = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  color: var(--main-secondary);
`

const Skill = styled.label`
  padding: 5px 15px;
  border: 1px solid var(--main-secondary);
`

export default Timeline
