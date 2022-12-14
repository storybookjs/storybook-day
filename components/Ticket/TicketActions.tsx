import { useEffect, useRef, useState } from 'react';
import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { Button, Icon, Clipboard } from '@storybook/design-system';
import { SITE_URL, TWEET_TEXT } from '@lib/constants';
import { withPrefix } from '@lib/with-prefix';

const { color } = styles;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  box-shadow: 0 2px 5px 0 ${color.border};
`;

interface TicketActionsProps {
  username: string;
}

export const TicketActions = ({ username }: TicketActionsProps) => {
  const [imgReady, setImgReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const downloadLink = useRef<HTMLAnchorElement>();
  const permalink = encodeURIComponent(`${SITE_URL}/tickets/${username}`);
  const text = encodeURIComponent(TWEET_TEXT);
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=storybookjs&text=${text}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`;
  const downloadUrl = withPrefix(`/api/ticket-images/${username}`);
  const copyUrl = `${SITE_URL}/tickets/${username}`;

  useEffect(() => {
    setImgReady(false);

    const img = new Image();

    img.src = downloadUrl;
    img.onload = () => {
      setImgReady(true);
      setLoading(false);
      if (downloadLink.current) {
        downloadLink.current.click();
        downloadLink.current = undefined;
      }
    };
  }, [downloadUrl]);

  return (
    <Wrapper>
      <Clipboard toCopy={copyUrl}>
        <StyledButton appearance="inverseSecondary" size="medium" ButtonWrapper="div">
          <Icon icon="copy" />
          Copy URL
        </StyledButton>
      </Clipboard>
      <StyledButton
        appearance="inverseSecondary"
        size="medium"
        isLink
        rel="noopener noreferrer"
        target="_blank"
        href={tweetUrl}
      >
        <Icon icon="twitter" />
        Tweet
      </StyledButton>
      <StyledButton
        appearance="inverseSecondary"
        size="medium"
        isLink
        rel="noopener noreferrer"
        target="_blank"
        href={linkedInUrl}
      >
        <Icon icon="linkedin" />
        Share
      </StyledButton>
      <StyledButton
        appearance="inverseSecondary"
        size="medium"
        isLink
        rel="noopener noreferrer"
        target="_blank"
        href={loading ? undefined : downloadUrl}
        onClick={e => {
          if (imgReady) return;

          e.preventDefault();
          downloadLink.current = e.currentTarget as HTMLAnchorElement;
          // Wait for the image download to finish
          setLoading(true);
        }}
        download="ticket.png"
      >
        <Icon icon="download" />
        Download
      </StyledButton>
    </Wrapper>
  );
};
