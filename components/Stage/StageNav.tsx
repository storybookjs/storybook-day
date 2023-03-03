import { styled } from '@storybook/theming';
import { Icon, Logos, Clipboard, Button } from '@storybook/design-system';
import { styles, NavItem } from '@storybook/components-marketing';
import { SkipNavLink as RSkipNavLink } from '@reach/skip-nav';
import { DISCORD_URL, SITE_URL, TWITTER_URL } from '@lib/constants';
import { LinkWrapper } from '@components/LinkWrapper';

const { spacing, color, breakpoints, typography } = styles;

const LogoNavItem = styled(NavItem)`
  background-color: transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    outline: 2px solid ${color.secondary};
  }

  @media (min-width: ${breakpoints[2]}px) {
    margin-right: 24px;
  }
`;

const StorybookLogo = styled(Logos.StorybookInverted)`
  height: 20px;
  display: block;
`;
const YearTag = styled.div`
  color: #e69d00;
  border-radius: ${spacing.borderRadius.small}px;
  font-size: ${typography.size.s1}px;
  font-weight: ${typography.weight.bold};
  line-height: 14px;
  margin-left: 6px;
  border: 1px solid #e69d00;
  padding: 2px 6px;
`;

const Wrapper = styled.div<{ inverse?: boolean; transparent?: boolean }>`
  box-shadow: ${props => (props.inverse ? 'rgba(255, 255, 255, 0.1)' : color.tr10)} 0 -1px 0px 0px inset;
  padding-top: ${spacing.padding.medium}px;
  padding-bottom: ${spacing.padding.medium}px;
  background-color: ${props => (props.transparent ? 'transparent' : 'var(--bg-blue)')};
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.padding.medium}px;
`;

const NavLinks = styled.div`
  align-items: center;

  > * {
    margin-right: 9px;
  }

  > a:not(:first-of-type) {
    display: none;
  }

  > button {
    display: none;
  }

  @media (min-width: ${breakpoints[1]}px) {
    > a:not(:first-of-type) {
      display: inline-flex;
    }

    > button {
      display: inline-block;
    }
  }
`;

// Workaround for TS 2590 error
const SkipNavLink: any = RSkipNavLink;

const copyUrl = `${SITE_URL}/stage/main/`;

interface StageNavProps {
  transparent?: boolean;
  CTA?: React.ReactNode;
  activeRoute: string;
}

export const StageNav = ({ transparent, activeRoute }: StageNavProps) => {
  return (
    <>
      <SkipNavLink />
      <Wrapper transparent={transparent}>
        <NavContainer>
          <LogoNavItem aria-label="home" href="/" LinkWrapper={LinkWrapper}>
            <StorybookLogo role="presentation" />
            <YearTag>2023</YearTag>
          </LogoNavItem>
          <NavLinks>
            <NavItem
              variant="inverse"
              href="#schedule"
              LinkWrapper={LinkWrapper}
              active={activeRoute === '/schedule'}
            >
              Schedule
            </NavItem>
            <NavItem variant="inverse" href={DISCORD_URL}>
              Discord
            </NavItem>
            <NavItem variant="inverse" href={TWITTER_URL}>
              Twitter
            </NavItem>
            <Clipboard toCopy={copyUrl}>
              <Button appearance="inverseOutline" size="small" ButtonWrapper="div">
                <Icon icon="link" /> Copy link
              </Button>
            </Clipboard>
          </NavLinks>
        </NavContainer>
      </Wrapper>
    </>
  );
};