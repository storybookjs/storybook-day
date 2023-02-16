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
const Name = styled.div`
  font-size: ${typography.size.s3}px;
  font-weight: ${typography.weight.bold};
  color: ${color.darkest};
`;
const Title = styled.div`
  color: ${color.dark};
`;
const Company = styled.span`
  color: ${color.dark};
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
}

export const Speaker = ({ name, title, company, avatarUrl, slug }: SpeakerProps) => (
  <Link href={`/speakers/${slug}`} LinkWrapper={LinkWrapper}>
    <SpeakerWrapper>
      {avatarUrl && <SpeakerImage size="large" username={name} src={avatarUrl} />}
      <div>
        <Name>{name}</Name>
        <Title>
          {title}
          {company && (
            <>
              {' at '}
              <Company>{company}</Company>
            </>
          )}
        </Title>
      </div>
    </SpeakerWrapper>
  </Link>
);
