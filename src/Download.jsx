import styled from "styled-components"

const StyledDownload = styled.section`
  padding-block: 4.8rem;
`

const Container = styled.div`
  max-width: 96rem;
  padding-inline: 2.4rem;
  margin: 0 auto;
`

const Heading = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  font-weight: 500;
  color: var(--color-dark-blue);
`

const Text = styled.p`
  text-align: center;
  margin: 0 auto;
  margin-top: 1.2rem;
  max-width: 48rem;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 4.8rem;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  gap: 2.4rem;
`

const Card = styled.div`
  padding-top: 2.4rem;
  box-shadow: 0px 3px 15px rgba(83, 104, 223, 0.2);
  border-radius: 10px;

  @media (min-width: 64em) {
    height: 325px;

    &.firefox {
      margin-top: 2.4rem;
    }

    &.opera {
      margin-top: 4.8rem;
    }
  }
`

const CardImage = styled.img`
  display: block;
  text-align: center;
`

const CardImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

const CardTitle = styled.p`
  margin-top: 2.4rem;
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-dark-blue);
  text-align: center;
`

const CardText = styled.p`
  margin-top: 0.4rem;
  text-align: center;
`

const ButtonContainer = styled.div`
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
  border-top: 5px dotted rgba(145, 148, 161, 0.25);
  padding: 2.4rem;
`

const Button = styled.button`
  font-weight: 500;
  color: #fff;
  font-size: 1.4rem;
  background-color: var(--color-soft-blue);
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 0.8rem 2.4rem;
  transition: color 0.3s, background-color 0.3s, border 0.3s;

  &:hover {
    color: var(--color-soft-blue);
    border: 2px solid var(--color-soft-blue);
    background-color: #fff;
  }
`

export default function Download() {
  return (
    <StyledDownload>
      <Container>
        <Heading>Download the extension</Heading>
        <Text>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </Text>
        <CardsContainer>
          <Card>
            <CardImageContainer>
              <CardImage src="logo-chrome.svg" alt="chrome logo" />
            </CardImageContainer>
            <CardTitle>Add to Chrome</CardTitle>
            <CardText>Minimum version 62</CardText>
            <ButtonContainer>
              <Button>Add & Install Extension</Button>
            </ButtonContainer>
          </Card>
          <Card className="firefox">
            <CardImageContainer>
              <CardImage src="logo-firefox.svg" alt="firefox logo" />
            </CardImageContainer>
            <CardTitle>Add to Firefox</CardTitle>
            <CardText>Minimum version 55</CardText>
            <ButtonContainer>
              <Button>Add & Install Extension</Button>
            </ButtonContainer>
          </Card>
          <Card className="opera">
            <CardImageContainer>
              <CardImage src="logo-opera.svg" alt="opera logo" />
            </CardImageContainer>
            <CardTitle>Add to Opera</CardTitle>
            <CardText>Minimum version 46</CardText>
            <ButtonContainer>
              <Button>Add & Install Extension</Button>
            </ButtonContainer>
          </Card>
        </CardsContainer>
      </Container>
    </StyledDownload>
  )
}
