import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Heading, InlineContent } from './Base'
import Dot from './Dot'
import Button from './Button'
import chunk from './chunk'
import TESTIMONIALS from './Testimonials'
import type { TestimonialProps } from './Testimonials'

function CustomerStories() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState<number>(0)
  const testimonials = chunk(TESTIMONIALS)
  const lastPage = testimonials.length - 1

  const next = () => {
    if (page < lastPage && pageRef?.current != null) {
      pageRef.current.style.animation = 'nextPage .5s forwards'
      setPage(page + 1)
    }
  }

  const back = () => {
    if (page > 0 && pageRef?.current != null) {
      pageRef.current.style.animation = 'prevPage .5s forwards'
      setPage(page - 1)
    }
  }

  const onAnimationEnd = () => {
    if (pageRef.current != null) {
      pageRef.current.style.animation = ''
    }
  }

  return (
    <div>
      <Dot text='Testimonial' bottom />
      <Heading>Customer&apos;s Stories</Heading>
      <div ref={pageRef} onAnimationEnd={onAnimationEnd}>
        <Testimonials>
          {testimonials[page].map(({ key, name, description, role, icon }: TestimonialProps) => (
            <Testimonial key={key}>
              <Dot text={`Partner #${key}`} />
              <p>{description}</p>
              <InlineContent style={{ gap: 20 }}>
                <img src={icon} />
                <div>
                  <h4>{name}</h4>
                  <h5>{role}</h5>
                </div>
              </InlineContent>
            </Testimonial>
          ))}
        </Testimonials>
      </div>
      <Pagination>
        <Button onClick={back} value='Back' disabled={page === 0} />
        <Button onClick={next} value='Next' disabled={page === lastPage} />
      </Pagination>
    </div>
  )
}

const Testimonial = styled.div`
  padding: 1.5rem;
  border: 1px solid var(--main-primary);
  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  h4,
  h5 {
    margin: 0;
    font-weight: 700;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    margin: 2rem 0;
  }
`

const Testimonials = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1em;
  @media screen and (max-width: 1040px) {
    grid-template-columns: auto;
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export default CustomerStories
