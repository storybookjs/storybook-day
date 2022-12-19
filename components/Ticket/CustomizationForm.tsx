import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Button, Icon, Link } from '@storybook/design-system';
import { useState, useRef, FormEvent } from 'react';
import { scrollTo } from '@lib/smooth-scroll';
import { SITE_ORIGIN, TicketGenerationState } from '@lib/constants';
import isMobileOrTablet from '@lib/is-mobile-or-tablet';
import useConfData from '@lib/hooks/use-conf-data';
import { saveGithubToken } from '@lib/user-api';
import { GitHubOAuthData } from '@lib/types';
import { LinkWrapper } from '@components/LinkWrapper';
import { Retry } from '@components/Retry';

const { color, text, marketing } = styles;

type FormState = 'default' | 'loading' | 'error';

const Info = styled.div`
  flex: none;
  ${text.regular};
  color: ${color.darkest};
  opacity: 0.5;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`;

const StyledLink = styled(Link)`
  ${marketing.textSmall};
`;

const AuthenticatedButton = styled(Button)`
  &&:disabled {
    opacity: 1;
    cursor: default !important;
  }
`;
const CustomizeButton = styled(Button)`
  flex: none;
`;

interface CustomizationFormProps {
  defaultUsername?: string;
  defaultFormState?: FormState;
  defaultErrorMsg?: string;
  setTicketGenerationState: React.Dispatch<React.SetStateAction<TicketGenerationState>>;
}

export const CustomizationForm = ({
  defaultUsername = '',
  defaultFormState = 'default',
  defaultErrorMsg = '',
  setTicketGenerationState
}: CustomizationFormProps) => {
  const [username, setUsername] = useState(defaultUsername);
  const [formState, setFormState] = useState<FormState>(defaultFormState);
  const [errorMsg, setErrorMsg] = useState(defaultErrorMsg);
  const { userData, setUserData } = useConfData();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formState !== 'default') {
      setTicketGenerationState('default');
      setFormState('default');
      return;
    }

    setFormState('loading');
    setTicketGenerationState('loading');

    if (!process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID) {
      setFormState('error');
      setErrorMsg('GitHub OAuth App must be set up.');
      return;
    }

    const windowWidth = 600;
    const windowHeight = 700;
    // https://stackoverflow.com/a/32261263/114157
    const windowTop = window.top.outerHeight / 2 + window.top.screenY - 700 / 2;
    const windowLeft = window.top.outerWidth / 2 + window.top.screenX - 600 / 2;

    const openedWindow = window.open(
      `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(
        process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID
      )}`,
      'githubOAuth',
      `resizable,scrollbars,status,width=${windowWidth},height=${windowHeight},top=${windowTop},left=${windowLeft}`
    );

    new Promise<GitHubOAuthData | undefined>(resolve => {
      const interval = setInterval(() => {
        if (!openedWindow || openedWindow.closed) {
          clearInterval(interval);
          resolve(undefined);
        }
      }, 250);

      window.addEventListener('message', function onMessage(msgEvent) {
        // When devtools is opened the message may be received multiple times
        if (SITE_ORIGIN !== msgEvent.origin || !msgEvent.data.type) {
          return;
        }
        clearInterval(interval);
        if (openedWindow) {
          openedWindow.close();
        }
        resolve(msgEvent.data);
      });
    })
      .then(async data => {
        if (!data) {
          setFormState('default');
          setTicketGenerationState('default');
          return;
        }

        let usernameFromResponse: string;
        let name: string;

        if (data.type === 'token') {
          const res = await saveGithubToken({ id: userData.id, token: data.token });

          if (!res.ok) {
            throw new Error('Failed to store oauth result');
          }

          const responseJson = await res.json();
          usernameFromResponse = responseJson.username;
          name = responseJson.name;
        } else {
          usernameFromResponse = data.login;
          name = data.name;
        }

        setUserData({ ...userData, username: usernameFromResponse, name });
        setUsername(usernameFromResponse);
        setFormState('default');
        setTicketGenerationState('default');

        // Prefetch GitHub avatar
        new Image().src = `https://github.com/${usernameFromResponse}.png`;

        // Prefetch the twitter share URL to eagerly generate the page
        fetch(`/tickets/${usernameFromResponse}`).catch(_ => {});
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
        setFormState('error');
        setErrorMsg('Error! Please try again.');
        setTicketGenerationState('default');
      });
  };

  return formState === 'error' ? (
    <div>
      <Retry
        message={errorMsg}
        onTryAgain={() => {
          setFormState('default');
          setTicketGenerationState('default');
        }}
      />
    </div>
  ) : (
    <Form ref={formRef} onSubmit={handleSubmit}>
      {username ? (
        <>
          <AuthenticatedButton appearance="outline" size="medium" type="submit" disabled>
            <Icon icon="verified" />
            {username}
          </AuthenticatedButton>
          {username && (
            <StyledLink
              href={`/stickers?username=${username}&name=${userData.name}`}
              LinkWrapper={LinkWrapper}
              withArrow
            >
              Get free stickers
            </StyledLink>
          )}
        </>
      ) : (
        <>
          <CustomizeButton
            appearance="secondary"
            size="medium"
            type="submit"
            disabled={
              !process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID ||
              formState === 'loading' ||
              Boolean(username)
            }
            onClick={() => {
              if (formRef && formRef.current && isMobileOrTablet()) {
                scrollTo(formRef.current, formRef.current.offsetHeight);
              }
            }}
          >
            <Icon icon="github" />
            Customize your ticket
          </CustomizeButton>
          <Info>Only public info is used</Info>
        </>
      )}
    </Form>
  );
};
