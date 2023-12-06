import { useState } from "react"
import styled, { css } from "styled-components"

const StyledCta = styled.section`
  background-color: var(--color-soft-blue);
  padding-block: 4.8rem;
`

const CtaContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  display: flex;
  flex-direction: column;
`

const Subheading = styled.p`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 5px;
  font-size: 1.2rem;
  text-align: center;
`

const Heading = styled.h2`
  color: #fff;
  font-weight: 500;
  text-align: center;
  font-size: 2.4rem;
  margin-top: 1.2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 3.2rem;

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: center;
  }
`

const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  outline: none;

  ${(props) =>
    props.error &&
    css`
      border: 2px solid var(--color-soft-red);
    `}

  &::placeholder {
    color: var(--color-grayish-blue);
  }

  @media (min-width: 48em) {
    border: 2px solid transparent;
  }
`

const Button = styled.button`
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: var(--color-soft-red);
  color: #fff;
  border: none;
  padding: 1.2rem 1.6rem;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: #fff;
    border: 2px solid var(--color-soft-red);
    color: var(--color-soft-red);
  }

  @media (min-width: 48em) {
    flex-direction: row;
    justify-content: center;
  }
`

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const IconError = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-90%);
  right: 12px;
`

const ErrorText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  padding: 0.2rem 1.6rem;
  color: #fff;
  background-color: var(--color-soft-red);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`

export default function Cta() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const regex = new RegExp(/\S+@\S+\.\S+/)
  const isValid = regex.test(email)

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    if (!isValid || email === "") {
      setError(true)
    } else {
      setError(false)
      console.log(email)
    }
  }

  return (
    <StyledCta>
      <CtaContainer>
        <Subheading>35, 000+ already joined</Subheading>
        <Heading>Stay up-to-date with what we're doing</Heading>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error}
            />
            {error && <IconError src="icon-error.svg" alt="error icon" />}
            {error && <ErrorText>Whoops, make sure it's an email</ErrorText>}
          </FormRow>

          <Button type="submit">Contact Us</Button>
        </Form>
      </CtaContainer>
    </StyledCta>
  )
}
