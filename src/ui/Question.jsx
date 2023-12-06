import { useState } from "react"
import styled from "styled-components"

const StyledQuestion = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-block: 2.4rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(145, 148, 161, 0.25);
`

const QuestionText = styled.p`
  font-size: 1.6rem;
  color: var(--color-dark-blue);
  transition: color 0.3s;

  &:hover {
    color: var(--color-soft-red);
  }
`

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ArrowUp = styled.svg`
  color: var(--color-soft-red);
  transform: rotate(180deg);
`
const ArrowDown = styled.svg`
  color: var(--color-soft-blue);
`

const Answer = styled.p`
  font-size: 1.6rem;
  display: block;
`

export default function Question({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenFaq() {
    setIsOpen(!isOpen)
  }

  return (
    <StyledQuestion onClick={handleOpenFaq}>
      <QuestionRow>
        <QuestionText>{faq.question}</QuestionText>
        {isOpen ? (
          <ArrowUp xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              d="M1 1l8 8 8-8"
            />
          </ArrowUp>
        ) : (
          <ArrowDown xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              d="M1 1l8 8 8-8"
            />
          </ArrowDown>
        )}
      </QuestionRow>
      {isOpen && <Answer>{faq.answer}</Answer>}
    </StyledQuestion>
  )
}
