import { styled, css } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Avatar, Cardinal, Icon, animation } from '@storybook/design-system';
import { SHORT_TIME, SHORT_TIMEZONE, SHORT_DATE } from '@lib/constants';

const { typography, color, spacing } = styles;

const loadingStyles = css`
  position: relative;
  color: transparent;

  &::before {
    ${animation.inlineGlow};
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${spacing.borderRadius.small}px;
    z-index: 100;
    filter: contrast(0.9);
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 40px;
`;
const Info = styled(Cardinal)`
  padding: 0;
  flex: none;
`;

const Version = styled.img`
  display: block;
  max-height: 100px;
  margin-right: 20px;
  margin-left: -10px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div<{ loading?: boolean }>`
  font-size: ${typography.size.m3}px;
  font-weight: ${typography.weight.bold};
  line-height: 20px;
  color: ${color.darkest};
  margin-bottom: 10px;

  ${props => props.loading && loadingStyles}
`;
const Username = styled.div<{ loading?: boolean }>`
  font-size: ${typography.size.s3}px;
  line-height: 18px;
  color: ${color.dark};
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    ${props => props.loading && loadingStyles}
  }

  svg {
    display: block;
    width: 16px;
    height: 16px;
  }
`;
const UserImage = styled(Avatar)`
  width: 64px;
  height: 64px;
  border: 3px solid ${color.secondary};
  margin-right: 20px;
`;

type TicketProfileProps = {
  name?: string;
  username?: string;
  loading?: boolean;
};

export const TicketProfile = ({ name, username, loading }: TicketProfileProps) => (
  <>
    <UserInfo>
      {username ? (
        <UserImage
          src={`https://github.com/${username}.png`}
          username={name || username}
          isLoading={loading}
        />
      ) : (
        <Version src="7-0.svg" alt={'7.0'} />
      )}
      <div>
        <Name loading={loading}>{name || username || 'Launch event'}</Name>
        <Username loading={loading}>
          <Icon icon="github" /> <span>{username || 'Your username'}</span>
        </Username>
      </div>
    </UserInfo>
    <InfoWrapper>
      <Info size="small" text={SHORT_TIMEZONE} count={SHORT_TIME} />
      <Info size="small" text="Online event" count={SHORT_DATE} />
    </InfoWrapper>
  </>
);
