import { styled } from '@storybook/theming';
import { styles, NavItem } from '@storybook/components-marketing';
import { LinkWrapper } from './LinkWrapper';
import { Button } from '@storybook/design-system';
import { STAGE_URL } from '@lib/constants';
import { Mode } from '@lib/types';

const { breakpoints } = styles;

const MobileCTA = styled(NavItem)`
  && {
    margin-right: 0px;
    @media (min-width: ${breakpoints[1] * 1.25}px) {
      display: none;
    }
  }
`;

const DesktopCTA = styled(Button)`
  && {
    display: none;
    @media (min-width: ${breakpoints[1] * 1.25}px) {
      display: inline-block;
    }
  }
`;

export const NavCTA = ({ mode = 'registration' }: { mode: Mode }) =>
  mode === 'registration' ? (
    <>
      <MobileCTA variant="default" href="/schedule" LinkWrapper={LinkWrapper}>
        Schedule
      </MobileCTA>
      <DesktopCTA
        size="small"
        appearance="secondary"
        isLink
        ButtonWrapper={LinkWrapper}
        href="/#register"
      >
        Get your free ticket
      </DesktopCTA>
    </>
  ) : (
    // For event day
    <NavItem variant="primary" LinkWrapper={LinkWrapper} href={STAGE_URL}>
      Watch now
    </NavItem>
  );
