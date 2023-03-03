import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { withPrefix } from '@lib/with-prefix';
import { HighlightedFeature } from './HighlightedFeature';
import { Feature } from './Feature';
import { VideoCard } from './VideoCard';
import { useLazyLoadVideo } from './useLazyLoadVideo';
import { Button } from '@storybook/design-system';
import { LinkWrapper } from '@components/LinkWrapper';

const { marketing, breakpoints, pageMargins } = styles;

const Section = styled.section`
  ${pageMargins};
`;

const Title = styled.h2`
  ${marketing.subheading};
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.hero2};
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${breakpoints[2]}px) {
    ${marketing.hero1};
    margin-bottom: 2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 7rem;

  @media (min-width: ${breakpoints[0]}px) {
  }

  @media (min-width: ${breakpoints[2]}px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem 2.5rem;
  }
`;

const StorybookUiImage = styled.img`
  @media (min-width: ${breakpoints[2]}px) {
    margin-bottom: -11%;
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

const ScaledVideoCard = styled(VideoCard)`
  transform: scale(1.75);
  @media (min-width: ${breakpoints[2]}px) {
    transform: scale(1.25);
  }
`;
CSF3Image.defaultProps = {
  src: withPrefix('/features/csf-example.svg')
};

const Copy = styled.div`
  ${marketing.textLarge};
`;
const TalksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${breakpoints[2]}px) {
    display: grid;
    grid-template-columns: minmax(auto, 640px) 1fr;
    align-items: center;
    justify-items: center;
  }
`;

export const FeaturesSection = () => {
  useLazyLoadVideo();

  return (
    <Section>
      <Title id="sneak-peek">See what’s new</Title>
      <FeaturesGrid>
        <HighlightedFeature
          background={`center / cover no-repeat url(${withPrefix('/gradient-backdrop.svg')})`}
          title="Design refresh"
          description="7.0 streamlines Storybook’s developer experience to speed you up: edge-to-edge layout, redrawn icons, refined forms, faster start & build performance."
          image={<StorybookUiImage />}
        />
        <Feature
          title="Stability for the long run"
          description="Say hello to Ecosystem CI, a comprehensive test suite that regularly checks compatibility with popular tools in the JavaScript ecosystem."
          media={<img src={withPrefix('/features/stability.svg')} />}
          bgColor="#FEDED2"
        />
        <Feature
          title="Performance overhaul"
          description="7.0 optimizes and pre-bundles Storybook to reduce install weight. That speeds up build times and eliminates dependency conflicts."
          media={
            <VideoCard
              src={withPrefix('/features/videos/perf-sm.mp4')}
              poster={withPrefix('/features/videos/perf.png')}
              bgColor="#E3F1FE"
            />
          }
          bgColor="#E3F1FE"
        />
        <Feature
          title="Docs revamp"
          description="Kickstart your project’s UI documentation with MDX 2 support, new architecture, streamlined UX, and a readymade doc blocks."
          media={
            <VideoCard
              src={withPrefix('/features/videos/docs-sm.mp4')}
              poster={withPrefix('/features/videos/docs.png')}
              bgColor="#b7efa9"
            />
          }
          bgColor="#b7efa9"
        />
        <Feature
          title="Interaction testing"
          description="Simulate user behavior like click, hover, and type inside your story file. Powered by Jest and Testing Library"
          media={
            <VideoCard
              src={withPrefix('/features/videos/interaction-testing-sm.mp4')}
              poster={withPrefix('/features/videos/interaction-testing.png')}
              bgColor="#fedd9b"
            />
          }
          bgColor="#fedd9b"
        />
        <Feature
          title="Test runner"
          description="Keeps your stories up to date automatically with test runner, a Jest powered CLI tool that runs testing and reports coverage."
          media={
            <VideoCard
              src={withPrefix('/features/videos/test-coverage-sm.mp4')}
              poster={withPrefix('/features/videos/test-coverage.png')}
              bgColor="#E7D5FC"
            />
          }
          bgColor="#EDD9FF"
        />
        <Feature
          title="Framework API for integrations"
          description="Frameworks are packages that automatically configure Storybook to work with popular application setups like NextJS and Sveltekit."
          media={
            <VideoCard
              src={withPrefix('/features/videos/framework-api-sm.mp4')}
              poster={withPrefix('/features/videos/framework-api.png')}
              bgColor="#FEDED2"
            />
          }
          bgColor="#FEDED2"
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
          media={
            <VideoCard
              src={withPrefix('/features/videos/vite-sm.mp4')}
              poster={withPrefix('/features/videos/vite.png')}
              bgColor="#FFDDD2"
            />
          }
          bgColor="#FFDDD2"
          icon={withPrefix('/features/vite-icon.svg')}
        />
        <Feature
          title="TypeScript just works"
          description="TypeScript works with Storybook. 7.0 expands type safety with new types and features powered by Typescript 4.9."
          media={<img src={withPrefix('/features/typescript.svg')} />}
          bgColor="#E3F3FF"
          icon={withPrefix('/features/typescript-icon.svg')}
        />
        <Feature
          title="Auto-config for Next.js"
          description="Zero-config integration for Next 12 & 13 helps you develop, test, and document UI components in isolation."
          media={
            <ScaledVideoCard
              src={withPrefix('/features/videos/nextjs-framework-sm.mp4')}
              poster={withPrefix('/features/videos/nextjs-framework.png')}
              bgColor="#232A35"
            />
          }
          bgColor="#232A35"
          icon={withPrefix('/features/nextjs-icon.svg')}
        />
        <Feature
          title="Storybook for SvelteKit"
          description="Zero-config integration for SvelteKit. It enables you to reuse your Vite config and use lib alias for imports and asset paths, and access the app environment."
          media={
            <VideoCard
              src={withPrefix('/features/videos/sveltekit-sm.mp4')}
              poster={withPrefix('/features/videos/sveltekit.png')}
              bgColor="#F3EAFF"
            />
          }
          bgColor="#F3EAFF"
          icon={withPrefix('/features/svelte-icon.svg')}
        />
      </FeaturesGrid>
      <div>
        <Title>Talks</Title>
        <TalksWrapper>
          <Copy>
            You'll get a tour of Storybook 7.0's features and see what's new in the ecosystem,
            including frameworks, addons, and recipes. We're also thrilled to welcome community
            members on stage to share first-hand accounts of how Storybook helps them craft design
            systems, ship micro-frontends, and even engage in creative coding.
          </Copy>
          <Button
            size="medium"
            appearance="secondary"
            isLink
            ButtonWrapper={LinkWrapper}
            href="/schedule"
          >
            View Schedule
          </Button>
        </TalksWrapper>
      </div>
    </Section>
  );
};
