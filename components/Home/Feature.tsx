import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';

const { marketing, color, breakpoints } = styles;

const TextWrapper = styled.div`
  margin: 0 auto;
  max-width: 92.30769231%;
  color: ${color.darkest};
`;
const Title = styled.div`
  ${marketing.textLargeBold};
  margin-bottom: 4px;

  @media (min-width: ${breakpoints[0]}px) {
    ${marketing.subheading};
  }
`;

const Description = styled.div`
  ${marketing.textSmall};

  @media (min-width: ${breakpoints[0]}px) {
    ${marketing.textLarge};
  }
`;

const Figure = styled.div<{ bgColor: string }>`
  border-radius: 20px;
  background: ${({ bgColor }) => bgColor};
  margin-bottom: 1rem;
  max-height: 520px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (min-width: ${breakpoints[0]}px) {
    margin-bottom: 2rem;
  }

  & > div,
  img {
    max-height: 520px;
    max-width: 520px;
    margin: 0 auto;
  }

  img,
  video {
    display: block;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
`;

const Icon = styled.img`
  flex: none;
  display: none;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 30px;

  @media (min-width: ${breakpoints[0]}px) {
    display: block;
  }
`;

const Lower = styled.div`
  display: flex;
`;

interface FeatureProps {
  title: string;
  description: string;
  media: React.ReactNode;
  bgColor: string;
  icon?: string;
}

export const Feature = ({ title, description, media, bgColor, icon }: FeatureProps) => (
  <div>
    <Figure bgColor={bgColor}>{media}</Figure>
    <Lower>
      {icon && <Icon src={icon} alt="" />}
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Lower>
  </div>
);
