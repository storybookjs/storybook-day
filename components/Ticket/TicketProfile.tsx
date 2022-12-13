import { styled, css } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Avatar, Cardinal, Icon, animation } from '@storybook/design-system';
import { SHORT_TIME, SHORT_TIMEZONE, SHORT_DATE } from '@lib/constants';
import { withPrefix } from '@lib/with-prefix';

const { typography, color, spacing, breakpoints } = styles;

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
  justify-content: center;

  @media (min-width: ${breakpoints[1]}px) {
    justify-content: flex-start;
  }
`;
const Info = styled(Cardinal)`
  padding: 0;
  flex: none;
`;

const Version = styled.img`
  display: block;
  width: 136px;

  @media (min-width: ${breakpoints[1]}px) {
    max-height: 100px;
    margin-right: 20px;
    margin-left: -10px;
  }
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints[1]}px) {
    flex-direction: row;
  }
`;

const Name = styled('div', {
  shouldForwardProp: prop => prop !== 'loading'
})<{ loading?: boolean }>`
  font-size: ${typography.size.m3}px;
  font-weight: ${typography.weight.bold};
  line-height: 1;
  color: ${color.darkest};
  margin-bottom: 10px;

  ${props => props.loading && loadingStyles}
`;
const Username = styled('div', {
  shouldForwardProp: prop => prop !== 'loading'
})<{ loading?: boolean }>`
  font-size: ${typography.size.s2}px;
  line-height: 18px;
  color: ${color.dark};
  display: flex;
  align-items: center;
  gap: 4px;

  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${typography.size.s3}px;

    svg {
      display: block;
      width: 16px;
      height: 16px;
    }
  }

  span {
    ${props => props.loading && loadingStyles}
  }
`;
const UserImage = styled(Avatar)`
  && {
    width: 64px;
    height: 64px;
    border: 3px solid ${color.secondary};
    margin-right: 20px;
  }
`;
const TicketNumber = styled.div<{ loading?: boolean }>`
  font-size: ${typography.size.s2}px;
  line-height: 18px;
  color: ${color.dark};
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    ${props => props.loading && loadingStyles}
  }
`;

const Lower = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

type TicketProfileProps = {
  name?: string;
  username?: string;
  loading?: boolean;
  ticketNumber?: string;
};

export const TicketProfile = ({ name, username, loading, ticketNumber }: TicketProfileProps) => (
  <>
    <UserInfo>
      {username ? (
        <UserImage
          src={`https://github.com/${username}.png`}
          username={name || username}
          isLoading={loading}
        />
      ) : (
        <Version src={withPrefix('7-0.svg')} alt={'7.0'} />
      )}
      <div>
        <Name loading={loading}>{name || username || 'Launch event'}</Name>
        <Lower>
          <Username loading={loading}>
            <Icon icon="github" />
            <span>{username || 'Your username'}</span>
          </Username>
          {ticketNumber && (
            <TicketNumber>
              <Icon icon="bookmark" />
              <span>{ticketNumber}</span>
            </TicketNumber>
          )}
        </Lower>
      </div>
    </UserInfo>
    <InfoWrapper>
      <Info size="small" text={SHORT_TIMEZONE} count={SHORT_TIME} />
      <Info size="small" text="Online event" count={SHORT_DATE} />
    </InfoWrapper>
  </>
);
