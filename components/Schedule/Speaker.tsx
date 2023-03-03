import React from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Avatar, Link } from '@storybook/design-system';
import { LinkWrapper } from '@components/LinkWrapper';

const { color, typography } = styles;

const SpeakerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Name = styled.div<{ inverse?: boolean }>`
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.bold};
  color: ${props => (props.inverse ? color.lightest : color.darkest)};
`;
const Title = styled.div<{ inverse?: boolean }>`
  color: ${props => (props.inverse ? color.mediumdark : color.dark)};
`;
const Company = styled.span<{ inverse?: boolean }>`
  color: ${props => (props.inverse ? color.mediumdark : color.dark)};
`;

const SpeakerImage = styled(Avatar)`
  flex: none;
`;

interface SpeakerProps {
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
  slug: string;
  inverse?: boolean;
}

export const Speaker = ({ name, title, company, avatarUrl, slug, inverse }: SpeakerProps) => (
  <Link href={`/speakers/${slug}`} LinkWrapper={LinkWrapper}>
    <SpeakerWrapper>
      {avatarUrl && <SpeakerImage size="large" username={name} src={avatarUrl} />}
      <div>
        <Name inverse={inverse}>{name}</Name>
        <Title inverse={inverse}>
          {title}
          {company && (
            <>
              {' at '}
              <Company inverse={inverse}>{company}</Company>
            </>
          )}
        </Title>
      </div>
    </SpeakerWrapper>
  </Link>
);
