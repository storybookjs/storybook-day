import { styled } from '@storybook/theming';
import { Icon, Logos, Clipboard, Button } from '@storybook/design-system';
import { styles, NavItem } from '@storybook/components-marketing';
import { SkipNavLink as RSkipNavLink } from '@reach/skip-nav';
import { DISCORD_URL, SITE_URL, STAGE_URL } from '@lib/constants';
import { LinkWrapper } from '@components/LinkWrapper';
import { Eyebrow } from '@components/Eyebrow';

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

const Wrapper = styled.div`
  box-shadow: rgba(255, 255, 255, 0.1) 0 -1px 0px 0px inset;
  padding-top: ${spacing.padding.medium}px;
  padding-bottom: ${spacing.padding.medium}px;
  background-color: transparent;
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.padding.medium}px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > a:not(:first-of-type) {
    display: none;
  }

  > button {
    display: none;
  }

  @media (min-width: ${breakpoints[1] * 1.1}px) {
    > a:not(:first-of-type) {
      display: inline-flex;
    }

    > button {
      display: inline-flex;
    }
  }
`;

// Workaround for TS 2590 error
const SkipNavLink: any = RSkipNavLink;

const copyUrl = `${SITE_URL}${STAGE_URL}/`;

interface StageNavProps {
  CTA?: React.ReactNode;
  activeRoute: string;
}

const text = encodeURIComponent(`Join me at #StorybookDay 👉`);
const permalink = encodeURIComponent(`${SITE_URL}/stage/main`);
const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&text=${text}`;

export const StageNav = ({ activeRoute }: StageNavProps) => {
  return (
    <>
      <SkipNavLink />
      <Eyebrow inverse />
      <Wrapper>
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
            <Button isLink href={tweetUrl} appearance="inverseOutline" size="small">
              Tweet #StorybookDay
            </Button>
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
