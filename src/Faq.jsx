import styled from "styled-components"

import Question from "./ui/Question"

const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
]

const StyledFaq = styled.section`
  padding-block: 4.8rem;
`

const Container = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  display: flex;
  flex-direction: column;
`

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--color-dark-blue);
  text-align: center;
`

const Text = styled.p`
  text-align: center;
  margin-top: 1.2rem;
`

const FaqContainer = styled.ul`
  margin-top: 3.2rem;
  /* padding-top: 2.4rem; */
  display: flex;
  flex-direction: column;
  /* border-block: 1px solid var(--color-grayish-blue); */
`

const Button = styled.button`
  font-size: 1.4rem;
  background-color: var(--color-soft-blue);
  border-radius: 4px;
  border: none;
  color: #fff;
  margin-top: 2.4rem;
  align-self: center;
  padding: 1.2rem 1.6rem;
`

export default function Faq() {
  return (
    <StyledFaq>
      <Container>
        <Heading>Frequently Asked Questions</Heading>
        <Text>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Text>
        <FaqContainer>
          {faqs.map((faq, i) => (
            <Question key={i} faq={faq} />
          ))}
        </FaqContainer>
        <Button>More Info</Button>
      </Container>
    </StyledFaq>
  )
}
