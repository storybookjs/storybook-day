import Image from 'next/image';
import { Speaker } from '@lib/types';
import { LinkWrapper } from '@components/LinkWrapper';
import { Button, Icon, Link } from '@storybook/design-system';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';

const { pageMargins, color, marketing, spacing, breakpoints, text, subheading } = styles;

const SpeakerWrapper = styled.div`
  ${pageMargins};
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Breadcrumb = styled(Link)`
  margin-bottom: 1rem;

  span {
    display: flex;
    align-items: center;
  }
`;

const SpeakerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: row;
  }
`;
const SpeakerImage = styled.div`
  border-radius: ${spacing.borderRadius.default}px;
  border: 1px solid ${color.border};
  overflow: hidden;

  @media (min-width: ${breakpoints[2]}px) {
    min-width: 300px;
  }

  span {
    display: block !important;
  }
`;

const Name = styled.h1`
  ${marketing.textLargeBold};
  color: ${color.darkest};
  margin-bottom: 0.25rem;

  @media (min-width: ${breakpoints[1]}px) {
    ${marketing.subheading};
  }
`;
const JobTitle = styled.div`
  ${text.large};
  color: ${color.dark};
  margin-bottom: 2rem;
`;
const Company = styled.span`
  color: ${color.dark};
`;

const SubHeading = styled.h2`
  ${subheading.regular};
  color: ${color.dark};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;
const Bio = styled.p`
  ${text.large};
  color: ${color.darkest};
  margin-top: 0;
  margin-bottom: 2rem;
`;

export const IconLink = styled(Button)`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
IconLink.defaultProps = {
  isLink: true,
  containsIcon: true
};

type Props = {
  speaker: Speaker;
};

export function SpeakerSection({ speaker }: Props) {
  return (
    <SpeakerWrapper>
      <Breadcrumb href="/schedule" LinkWrapper={LinkWrapper} tertiary containsIcon>
        <Icon icon="arrowleft" /> Back to schedule
      </Breadcrumb>
      <SpeakerInner key={speaker.name}>
        <SpeakerImage>
          <Image
            alt={speaker.name}
            title={speaker.name}
            src={speaker.image.url}
            loading="lazy"
            height={300}
            width={300}
          />
        </SpeakerImage>
        <div>
          <div>
            <Name>{speaker.name}</Name>
            <JobTitle>
              {speaker.title} at <Company>{speaker.company}</Company>
            </JobTitle>
            <SubHeading>Bio</SubHeading>
            <Bio>{speaker.bio}</Bio>
            {(speaker.twitter || speaker.github) && <SubHeading>Social Media</SubHeading>}
            {speaker.twitter && (
              <IconLink
                appearance="outline"
                href={speaker.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-label="Twitter" icon="twitter" />
              </IconLink>
            )}
            {speaker.github && (
              <IconLink
                appearance="outline"
                href={speaker.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-label="Github" icon="github" />
              </IconLink>
            )}
          </div>
        </div>
      </SpeakerInner>
    </SpeakerWrapper>
  );
}
