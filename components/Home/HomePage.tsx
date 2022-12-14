import { styled } from '@storybook/theming';
import { BlocksScene } from '@components/BlocksScene';
import { Hero } from './Hero';
import { FeaturesSection } from './FeaturesSection';

const SolidBackdrop = styled.div`
  background: var(--bg-blue);
`;

const GradientBackdrop = styled.div`
  background: linear-gradient(180deg, var(--bg-blue) 0%, rgba(246, 249, 252, 0) 25%);
`;

export const HomePage = ({ disable3D = false }: { disable3D?: boolean }) => (
  <>
    <SolidBackdrop>
      <Hero />
      {!disable3D && <BlocksScene />}
    </SolidBackdrop>
    <GradientBackdrop>
      <FeaturesSection />
    </GradientBackdrop>
  </>
);
