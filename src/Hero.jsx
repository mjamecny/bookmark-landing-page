import styled, { css } from "styled-components"

const StyledHero = styled.section`
  padding-block: 4.8rem;
`

const HeroContainer = styled.div`
  max-width: 120rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  margin-block: 0;
  margin: 0 auto;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
`

const ImageContainer = styled.div`
  position: relative;

  @media (min-width: 64em) {
    grid-column: 2/-1;
  }
`

const Image = styled.img`
  width: 100%;
  z-index: 20;
  position: relative;
`

const ImageDecoration = styled.div`
  position: absolute;
  top: 20%;
  right: 0;
  background-color: var(--color-soft-blue);
  width: 80%;
  height: 75%;
  z-index: 10;
  border-top-left-radius: 150px;
  border-bottom-left-radius: 150px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-inline: 2.4rem;

  @media (min-width: 64em) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: center;
  }
`

const Heading = styled.h1`
  text-align: center;
  color: var(--color-dark-blue);
  font-weight: 500;

  @media (min-width: 64em) {
    text-align: left;
    font-size: 4.4rem;
    line-height: 1.2;
  }
`

const Text = styled.p`
  text-align: center;

  @media (min-width: 64em) {
    text-align: left;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;

  @media (min-width: 64em) {
    justify-content: flex-start;
  }
`

const Button = styled.button`
  font-size: 1.4rem;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 1.2rem 1.6rem;
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  ${(props) =>
    props.type === "light" &&
    css`
      color: var(--color-grayish-blue);

      &:hover {
        color: var(--color-dark-blue);
        background-color: #fff;
        border: 2px solid var(--color-dark-blue);
      }
    `}

  ${(props) =>
    props.type === "dark" &&
    css`
      background-color: var(--color-soft-blue);
      color: #fff;

      &:hover {
        background-color: #fff;
        color: var(--color-soft-blue);
        border: 2px solid var(--color-soft-blue);
      }
    `}
`

export default function Hero() {
  return (
    <StyledHero>
      <HeroContainer>
        <ImageContainer>
          <Image src="illustration-hero.svg" alt="hero illustration" />
          <ImageDecoration></ImageDecoration>
        </ImageContainer>
        <Content>
          <Heading>A Simple Bookmark Manager</Heading>
          <Text>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Text>
          <ButtonContainer>
            <Button type="dark">Get it on Chrome</Button>
            <Button type="light">Get it on Firefox</Button>
          </ButtonContainer>
        </Content>
      </HeroContainer>
    </StyledHero>
  )
}
