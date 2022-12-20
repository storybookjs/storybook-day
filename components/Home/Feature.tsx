import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';

const { marketing, color, breakpoints } = styles;

const TextWrapper = styled.div`
  color: ${color.darkest};

  @media (min-width: ${breakpoints[3]}px) {
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
  }
`;
const Title = styled.div`
  ${marketing.textLargeBold};
  margin-bottom: 4px;

  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.subheading};
  }
`;

const Description = styled.div`
  ${marketing.textLarge};
`;

const Figure = styled.div<{ bgColor: string }>`
  border-radius: 20px;
  background: ${({ bgColor }) => bgColor};
  margin-bottom: 1.25rem;
  max-height: 520px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (min-width: ${breakpoints[1]}px) {
    margin-bottom: 2rem;
  }

  & > div,
  img {
    height: 320px;
    max-width: 320px;
    @media (min-width: ${breakpoints[1]}px) {
      height: auto;
      max-height: 520px;
      max-width: 520px;
    }

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
  margin-right: 20px;

  @media (min-width: ${breakpoints[1]}px) {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 10px;
  }

  @media (min-width: ${breakpoints[3]}px) {
    width: 80px;
    height: 80px;
    margin-right: 0;
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
