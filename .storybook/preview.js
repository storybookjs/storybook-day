import { global as designSystemGlobal, loadFontsForStorybook } from '@storybook/design-system';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { ConfDataContext } from '../lib/hooks/use-conf-data';
import '@styles/global.css';
import '@styles/nprogress.css';
import '@styles/chrome-bug.css';
import '@reach/skip-nav/styles.css';

// Initialize MSW
initialize();

const { GlobalStyle: StorybookDSGlobalStyle } = designSystemGlobal;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#fff' },
      { name: 'dark', value: '#171C23' },
      {
        name: 'gradient',
        value: "center / cover no-repeat url('gradient-backdrop.svg')"
      },
      {
        name: 'blueGradient',
        value: 'linear-gradient(180deg, white 0%, var(--bg-blue) 100%);'
      },
      {
        name: 'blue',
        value: 'var(--bg-blue)'
      }
    ]
  },
  viewport: {
    viewports: {
      smallMobile: {
        name: 'Mobile (Small)',
        styles: {
          width: '375px',
          height: '100%'
        }
      },
      mobile: {
        name: 'Mobile',
        styles: {
          width: '440px',
          height: '100%'
        }
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '600px',
          height: '100%'
        }
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '900px',
          height: '100%'
        }
      },
      desktopXL: {
        name: 'DesktopXL',
        styles: {
          width: '1200px',
          height: '100%'
        }
      }
    }
  }
};

const withGlobalStyle = storyFn => (
  <>
    <StorybookDSGlobalStyle />
    {storyFn()}
  </>
);

const MockConfData = storyFn => (
  <ConfDataContext.Provider
    value={{
      userData: {
        id: undefined,
        ticketNumber: undefined,
        name: undefined,
        username: undefined
      },
      setUserData: () => {},
      setPageState: () => {}
    }}
  >
    {storyFn()}
  </ConfDataContext.Provider>
);

export const decorators = [withGlobalStyle, mswDecorator, MockConfData];

loadFontsForStorybook();
