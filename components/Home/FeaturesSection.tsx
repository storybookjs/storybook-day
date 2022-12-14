import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { withPrefix } from '@lib/with-prefix';
import { HighlightedFeature } from './HighlightedFeature';
import { Feature } from './Feature';

const { marketing, breakpoints, pageMargins } = styles;

const Section = styled.section`
  ${pageMargins};
`;

const Title = styled.h2`
  ${marketing.subheading};
  margin-bottom: 1.5rem;

  @media (min-width: ${breakpoints[0]}px) {
    margin-bottom: 2.5rem;
    ${marketing.hero2};
  }

  @media (min-width: ${breakpoints[2]}px) {
    ${marketing.hero1};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-bottom: 7rem;

  @media (min-width: ${breakpoints[0]}px) {
    gap: 4rem 2.5rem;
  }

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
  src: withPrefix('/features/7.0-design-mock.png')
};

const CSF3Image = styled.img`
  @media (min-width: ${breakpoints[2]}px) {
    margin-bottom: -8%;
  }
`;
CSF3Image.defaultProps = {
  src: withPrefix('/features/csf-example.png')
};

export const FeaturesSection = () => (
  <Section>
    <Title>Find out what’s new</Title>
    <FeaturesGrid>
      <HighlightedFeature
        background={`url(${withPrefix('/gradient-backdrop.svg')})`}
        title="Design refresh"
        description="7.0 streamlines Storybook’s developer experience to speed you up: edge-to-edge layout, redrawn icons, refined forms, faster start & build performance."
        image={<StorybookUiImage />}
      />
      <Feature
        title="Stability for the long run"
        description="Say hello to Ecosystem CI, a comprehensive test suite that regularly checks compatility with popular tools in the JavaScript ecosystem."
        image={withPrefix('/features/stability.svg')}
        background="#FEDED2"
      />
      <Feature
        title="Performance overhaul"
        description="7.0 optimizes and pre-bundles Storybook to reduce install weight. That speeds up build times and eliminates dependency conflicts."
        image={withPrefix('/perf.png')}
        background="#E3F3FF"
      />
      <Feature
        title="Docs revamp"
        description="Kickstart your project’s UI documentation with MDX 2 support, new architecture, streamlined UX, and a readymade doc blocks."
        image={withPrefix('/docs-2.png')}
        background="#C3EDAF"
      />
      <Feature
        title="Interaction testing"
        description="Simulate user behavior like click, hover, and type inside your story file. Powered by Jest and Testing Library"
        image={withPrefix('/interaction-testing.png')}
        background="#FDDE9C"
      />
      <Feature
        title="Test runner"
        description="Keeps your stories up to date automatically with test runner, a Jest powered CLI tool that runs testing and reports coverage."
        image={withPrefix('/docs-2.png')}
        background="#C3EDAF"
      />
      <Feature
        title="Framework API for integrations"
        description="Frameworks are packages that automatically configure Storybook to work with popular application setups like NextJS and Sveltekit."
        image={withPrefix('/interaction-testing.png')}
        background="#FDDE9C"
      />
      <HighlightedFeature
        background="#E3F3FF"
        title="Component Story Format 3.0"
        description="Introducing the next major version CSF that dramatically reduces boilerplate and helps you to focus on the essence of your stories."
        image={<CSF3Image />}
      />
      <Feature
        title="First-class Vite support"
        description="Vite is a next-gen build tool that gives Storybook 7.0 fast startup and instant reloads."
        image={withPrefix('/vite.png')}
        background="#FEDED2"
        icon={withPrefix('/features/vite-icon.svg')}
      />
      <Feature
        title="First-class Vite support"
        description="TypeScript works with Storybook. 7.0 expands type safety with new types and features powered by Typescript 4.9."
        image={withPrefix('/vite.png')}
        background="#FEDED2"
        icon={withPrefix('/features/typescript-icon.svg')}
      />
      <Feature
        title="Official Figma integration"
        description="Speed up UI implementation by connecting with design. Embed designs in Storybook and embed stories in Figma."
        image={withPrefix('/figma.png')}
        background="#EEEEEE"
        icon={withPrefix('/features/figma-icon.svg')}
      />
      <Feature
        title="Auto-config for Next.js"
        description="Zero-config integration for Next 12 & 13 helps you develop, test, and document UI components in isolation."
        image={withPrefix('/figma.png')}
        background="#EEEEEE"
        icon={withPrefix('/features/nextjs-icon.svg')}
      />
    </FeaturesGrid>
  </Section>
);
