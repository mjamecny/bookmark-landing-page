import { useState } from "react"
import styled, { css } from "styled-components"
import FeatureItem from "./ui/FeatureItem"

const StyledFeatures = styled.section`
  padding-block: 4.8rem;
`

const FeaturesContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding-inline: 2.4rem;

  @media (min-width: 64em) {
    align-self: center;
  }
`

const Heading = styled.h2`
  text-align: center;
  color: var(--color-dark-blue);
  font-weight: 500;

  @media (min-width: 64em) {
    text-align: left;
    line-height: 1.2;
  }
`

const HeadingMain = styled.h2`
  text-align: center;
  color: var(--color-dark-blue);
  font-weight: 500;
`

const Text = styled.p`
  text-align: center;

  @media (min-width: 64em) {
    text-align: left;
  }
`

const TextMain = styled.p`
  text-align: center;
`

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  border-block: 1px solid var(--color-grayish-blue);

  @media (min-width: 64em) {
    flex-direction: row;
    gap: 2.4rem;
    border-block: none;
    border-bottom: 1px solid var(--color-grayish-blue);
  }
`

const FeatureContent = styled.div`
  max-width: 120rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4.8rem;
  margin: 0 auto;
  margin-top: 4.8rem;

  @media (min-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
`

const ImageContainer = styled.div`
  padding-inline: 2.4rem;
  position: relative;
`

const Image = styled.img`
  width: 100%;
`

const ImageDecoration = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  background-color: var(--color-soft-blue);
  width: 85%;
  height: 90%;
  z-index: -10;
  border-top-right-radius: 150px;
  border-bottom-right-radius: 150px;
`

const Button = styled.button`
  display: none;
  background-color: var(--color-soft-blue);
  font-size: 1.4rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  align-self: flex-start;
  padding: 1.2rem 2.4rem;

  @media (min-width: 64em) {
    display: block;
  }
`

const features = [
  {
    id: 0,
    menuTitle: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 1,
    menuTitle: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 2,
    menuTitle: "Easy Sharing",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <StyledFeatures>
      <FeaturesContainer>
        <Content>
          <HeadingMain>Features</HeadingMain>
          <TextMain>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </TextMain>
          <FeaturesList>
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                feature={feature}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </FeaturesList>
        </Content>
      </FeaturesContainer>
      {activeTab === 0 && (
        <FeatureContent>
          <ImageContainer>
            <ImageDecoration></ImageDecoration>
            <Image
              src="illustration-features-tab-1.svg"
              alt="feature illustration 1"
            />
          </ImageContainer>
          <Content>
            <Heading>Bookmark in one click</Heading>
            <Text>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </Text>
            <Button>More Info</Button>
          </Content>
        </FeatureContent>
      )}
      {activeTab === 1 && (
        <FeatureContent>
          <ImageContainer>
            <ImageDecoration></ImageDecoration>
            <Image
              src="illustration-features-tab-2.svg"
              alt="feature illustration 2"
            />
          </ImageContainer>
          <Content>
            <Heading>Intelligent search</Heading>
            <Text>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </Text>
            <Button>More Info</Button>
          </Content>
        </FeatureContent>
      )}
      {activeTab === 2 && (
        <FeatureContent>
          <ImageContainer>
            <ImageDecoration></ImageDecoration>
            <Image
              src="illustration-features-tab-3.svg"
              alt="feature illustration 3"
            />
          </ImageContainer>
          <Content>
            <Heading>Share your bookmarks</Heading>
            <Text>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </Text>
            <Button>More Info</Button>
          </Content>
        </FeatureContent>
      )}
    </StyledFeatures>
  )
}
