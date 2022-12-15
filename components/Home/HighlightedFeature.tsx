import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';

const { marketing, color, breakpoints } = styles;

const Container = styled.div<{ background: string }>`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: ${({ background }) => background};
  overflow: hidden;

  @media (min-width: ${breakpoints[2]}px) {
    min-height: 520px;
    padding-top: 0;
    flex-direction: row;
    padding-left: 60px;
  }
`;

const Title = styled.h2`
  ${marketing.textLargeBold};
  margin-bottom: 4px;

  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.subheading};
  }
`;

const Description = styled.div`
  ${marketing.textLarge};
`;

const TextWrapper = styled.div`
  color: ${color.darkest};
  margin-top: 3rem;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints[2]}px) {
    flex: 1 1 40%;
    padding-right: 30px;
    margin: 0;
  }
`;

const Figure = styled.div`
  align-self: stretch;
  min-width: 0;
  display: flex;
  align-items: flex-end;
  flex: 1 1 auto;

  @media (min-width: ${breakpoints[2]}px) {
    flex: 1 1 60%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints[2]}px) {
      margin-left: 0;
      margin-right: 0;
      object-fit: cover;
      object-position: left top;
    }
  }
`;

interface HighlightedFeatureProps {
  title: string;
  description: string;
  image: React.ReactNode;
  background: string;
}

export const HighlightedFeature = ({
  title,
  description,
  image,
  background
}: HighlightedFeatureProps) => (
  <Container background={background}>
    <TextWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TextWrapper>

    <Figure>{image}</Figure>
  </Container>
);
