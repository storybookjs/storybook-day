import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { BlocksScene } from '@components/BlocksScene';
import { Hero } from './Hero';
import { FeaturesSection } from './FeaturesSection';
import { CFPSection } from './CFPSection';

const { pageMargins, color, breakpoints } = styles;

const SolidBackdrop = styled.div`
  background: var(--bg-blue);
`;

const GradientBackdrop = styled.div`
  background: linear-gradient(180deg, var(--bg-blue) 0%, rgba(246, 249, 252, 0) 25%);
`;

const Placeholder = styled.div`
  position: relative;
  background: #66bf3c;
  height: calc(40vh);
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakpoints[1]}px) {
    height: calc(60vh);
  }
`;

const Wrapper = styled.div`
  ${pageMargins}
`;
const Hr = styled.hr`
  margin-top: 4rem;
  margin-bottom: 4rem;
  border: 0;
  border-bottom: 1px solid ${color.border};
`;

const Divider = () => (
  <Wrapper>
    <Hr />
  </Wrapper>
);

export const HomePage = ({ disable3D = false }: { disable3D?: boolean }) => (
  <>
    <SolidBackdrop>
      <Hero />
      {!disable3D ? <BlocksScene /> : <Placeholder>3D placeholder</Placeholder>}
    </SolidBackdrop>
    <GradientBackdrop>
      <FeaturesSection />
      <Divider />
      <CFPSection />
    </GradientBackdrop>
  </>
);
