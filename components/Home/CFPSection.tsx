import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Button } from '@storybook/design-system';

const { marketing, breakpoints, pageMargins } = styles;

const Section = styled.section`
  ${pageMargins};
  padding-bottom: 4rem;
`;

const Title = styled.h2`
  ${marketing.subheading};
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.hero2};
  }
`;

const SubTitle = styled.h3`
  ${marketing.textLargeBold};
  margin-top: 2rem;
  margin-bottom: 0;
`;

const Copy = styled.p`
  ${marketing.textLarge};
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

export const CFPSection = () => (
  <Section>
    <Title id="cfp">Call for proposals (closed)</Title>
    <Copy>
      Share your experience with thousands of passionate UI developers and open source contributors.
    </Copy>
    <Copy>
      We're seeking talks that highlight how you use Storybook. These could range from high-level
      case studies or deep dive into specific workflows. For example:
    </Copy>
    <Copy as="ul">
      <li>How you've customized Storybook by theming it or building addons</li>
      <li>Testing components with Storybook (visual, interaction, accessibility, etc.)</li>
      <li>Combining Storybook and Figma to enable better collaboration between devs & designers</li>
      <li>Using Storybook for game development or WebGL components</li>
      <li>Using Storybook to maintain OSS libraries</li>
    </Copy>
    <SubTitle>Format</SubTitle>
    <Copy>Lightning talk (5-10 minutes). Talks will be recorded ahead of time.</Copy>
    <SubTitle>Deadline</SubTitle>
    <Copy>Feb 7, 2023</Copy>
    <Copy>
      <Button
        isLink
        disabled
        appearance="secondary"
        href="https://forms.gle/m5aUhQ5rWSFtjGoe6"
        target="_blank"
        rel="noopener noreferrer"
      >
        Submit
      </Button>
    </Copy>
  </Section>
);
