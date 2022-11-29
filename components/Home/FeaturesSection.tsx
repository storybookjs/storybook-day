import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { HighlightedFeature } from './HighlightedFeature';
import { Feature } from './Feature';

const { marketing, breakpoints, pageMargins } = styles;

const Section = styled.section`
  ${pageMargins}
`;

const Title = styled.h2`
  ${marketing.hero1};
  margin-bottom: 2.5rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px 40px;
  margin-bottom: 7rem;

  @media (min-width: ${breakpoints[2]}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StorybookUiImage = styled.img`
  @media (min-width: ${breakpoints[2]}px) {
    margin-bottom: -8%;
  }
`;
StorybookUiImage.defaultProps = {
  src: '/media/sb-ui.png'
};

const CSF3Image = styled.img`
  @media (min-width: ${breakpoints[2]}px) {
    margin-bottom: -8%;
  }
`;
CSF3Image.defaultProps = {
  src: '/media/csf-example.png'
};

export const FeaturesSection = () => (
  <Section>
    <Title>Insiders launch event</Title>
    <FeaturesGrid>
      <HighlightedFeature
        background="url('/media/gradient-backdrop.svg')"
        title="Design refresh"
        description="Storybook is now used for UI development along with testing and documentation. We've refined the core UI to better support all those workflows and give you a productivity boost."
        image={<StorybookUiImage />}
      />
      <Feature
        title="Stability for the long run"
        description="Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing."
        image="/media/stability.png"
        background="#FEDED2"
      />
      <Feature
        title="Performance overhaul"
        description="Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing."
        image="/media/perf.png"
        background="#E3F3FF"
      />
      <Feature
        title="Docs 2.0"
        description="Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing."
        image="/media/docs-2.png"
        background="#C3EDAF"
      />
      <Feature
        title="Interaction testing & Test runner"
        description="Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing."
        image="/media/interaction-testing.png"
        background="#FDDE9C"
      />
      <HighlightedFeature
        background="#E3F3FF"
        title="Component Story Format 3.0"
        description="CSF 3 drastically cuts-down boilerplate and brings several new features: spreadable story objects, automatic titles, and default render function."
        image={<CSF3Image />}
      />
      <Feature
        title="First-class Vite support"
        description="Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing."
        image="/media/vite.png"
        background="#FEDED2"
        icon="/media/vite-icon.png"
      />
      <Feature
        title="Official Figma integration"
        description="Lorem ipsum dolor sit amet consectatur vestibulum aret sit click, hover, and type inside your story file. Powered by Jest and Testing."
        image="/media/figma.png"
        background="#EEEEEE"
        icon="/media/figma-icon.png"
      />
    </FeaturesGrid>
  </Section>
);