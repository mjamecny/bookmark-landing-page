import styled, { css } from "styled-components"

const StyledFeatureItem = styled.li`
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grayish-blue);

    @media (min-width: 64em) {
      border-bottom: none;
    }
  }
`

const FeatureLink = styled.a`
  display: flex;
  justify-content: center;
  padding-block: 2.4rem;
  text-align: center;

  ${(props) =>
    props.active &&
    css`
      color: var(--color-dark-blue);
      border-bottom: 4px solid var(--color-soft-red);
    `}
`

export default function FeatureItem({ feature, activeTab, setActiveTab }) {
  return (
    <StyledFeatureItem>
      <FeatureLink
        active={feature.id === activeTab}
        onClick={() => setActiveTab(feature.id)}
      >
        {feature.menuTitle}
      </FeatureLink>
    </StyledFeatureItem>
  )
}
