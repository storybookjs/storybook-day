import { css, styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';
import { FC } from 'react';

const { breakpoints } = styles;

const Wrapper = styled.div`
  position: relative;
`;

const Shadow = styled.div`
  position: absolute;
  inset: 0;
  inset: 40px 20px;
  z-index: -1;
  border-radius: 7px;

  box-shadow: 0px 52.2449px 39.1837px rgba(7, 6, 6, 0.05),
    0px -52.2449px 39.1837px rgba(7, 6, 6, 0.05), 0px 130.612px 104.49px rgba(0, 0, 0, 0.05),
    0px -130.612px 104.49px rgba(0, 0, 0, 0.05), 0px 13.0612px 26.1224px rgba(0, 0, 0, 0.1),
    0px -13.0612px 26.1224px rgba(0, 0, 0, 0.1), 0px 1.30612px 3.91837px rgba(0, 0, 0, 0.1),
    0px -1.30612px 3.91837px rgba(0, 0, 0, 0.1);

  @media (min-width: ${breakpoints[1]}px) {
    inset: 20px 40px;

    box-shadow: 0px 52.2449px 39.1837px rgba(7, 6, 6, 0.05),
      0px -52.2449px 39.1837px rgba(7, 6, 6, 0.05), 0px 130.612px 104.49px rgba(0, 0, 0, 0.05),
      0px -130.612px 104.49px rgba(0, 0, 0, 0.05), 0px 13.0612px 26.1224px rgba(0, 0, 0, 0.1),
      0px -13.0612px 26.1224px rgba(0, 0, 0, 0.1), 0px 1.30612px 3.91837px rgba(0, 0, 0, 0.1),
      0px -1.30612px 3.91837px rgba(0, 0, 0, 0.1);
  }

  /* Use this as the fallback shadow on iOS Safari */
  display: block;
`;

const SVG = styled.svg<{ visibility: 'desktop' | 'mobile' }>`
  display: block;
  filter: drop-shadow(0px 13.0612px 26.1224px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 1.30612px 3.91837px rgba(0, 0, 0, 0.1));

  @supports (-webkit-touch-callout: none) {
    filter: drop-shadow(0px 13.0612px 26.1224px rgba(0, 0, 0, 0.1));
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      filter: none;
    }
  }

  ${props =>
    props.visibility === 'desktop'
      ? css`
          display: none;

          @media (min-width: ${breakpoints[1]}px) {
            display: block;
          }
        `
      : css`
          display: block;

          @media (min-width: ${breakpoints[1]}px) {
            display: none;
          }
        `};
`;

const TicketHorizontal: FC = props => (
  <SVG
    width="100%"
    height="100%"
    viewBox="0 0 494 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    visibility="desktop"
    {...props}
  >
    <defs>
      <linearGradient
        id="ticket-hologram-gradient"
        x1="105"
        y1="319"
        x2="599"
        y2="29"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0156834" stopColor="#FC521F" />
        <stop offset="0.265625" stopColor="#66FC1F" />
        <stop offset="0.479167" stopColor="#1FC0C0" />
        <stop offset="0.734375" stopColor="#7A718B" />
        <stop offset="1" stopColor="#DD1FFC" />
      </linearGradient>

      <clipPath id="svgPath">
        <path
          fill="#000"
          d="M0 330V203.293c11.652-4.118 20-15.231 20-28.293s-8.348-24.175-20-28.293V20C0 8.954 8.954 0 20 0h454c11.046 0 20 8.954 20 20v126.373c-12.171 3.823-21 15.194-21 28.627 0 13.433 8.829 24.804 21 28.627V330c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20Z"
        />
      </clipPath>
    </defs>
    <path
      d="M0 330V203.293c11.652-4.118 20-15.231 20-28.293s-8.348-24.175-20-28.293V20C0 8.954 8.954 0 20 0h454c11.046 0 20 8.954 20 20v126.373c-12.171 3.823-21 15.194-21 28.627 0 13.433 8.829 24.804 21 28.627V330c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20Z"
      opacity="0.95"
      fill="#fff"
    />
    <path
      d="M0 330V203.293c11.652-4.118 20-15.231 20-28.293s-8.348-24.175-20-28.293V20C0 8.954 8.954 0 20 0h454c11.046 0 20 8.954 20 20v126.373c-12.171 3.823-21 15.194-21 28.627 0 13.433 8.829 24.804 21 28.627V330c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20Z"
      opacity="0.1"
      fill="url(#ticket-hologram-gradient)"
    />
  </SVG>
);

const TicketVertical: FC = props => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    fill="none"
    viewBox="0 0 350 495"
    visibility="mobile"
    {...props}
  >
    <defs>
      <clipPath id="svgPath">
        <path
          d="M20 1h126.707c4.118 11.652 15.231 20 28.293 20s24.175-8.348 28.293-20H330c11.046 0 20 8.954 20 20v454c0 11.046-8.954 20-20 20H203.627c-3.823-12.171-15.194-21-28.627-21-13.433 0-24.804 8.829-28.627 21H20c-11.046 0-20-8.954-20-20V21C0 9.954 8.954 1 20 1z"
          opacity="0.95"
          stroke="#000000"
        ></path>
      </clipPath>
      <linearGradient
        id="ticket-hologram-gradient-vertical"
        x1="105"
        y1="319"
        x2="599"
        y2="29"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0156834" stopColor="#FC521F" />
        <stop offset="0.265625" stopColor="#66FC1F" />
        <stop offset="0.479167" stopColor="#1FC0C0" />
        <stop offset="0.734375" stopColor="#7A718B" />
        <stop offset="1" stopColor="#DD1FFC" />
      </linearGradient>
    </defs>
    <path
      d="M20 1h126.707c4.118 11.652 15.231 20 28.293 20s24.175-8.348 28.293-20H330c11.046 0 20 8.954 20 20v454c0 11.046-8.954 20-20 20H203.627c-3.823-12.171-15.194-21-28.627-21-13.433 0-24.804 8.829-28.627 21H20c-11.046 0-20-8.954-20-20V21C0 9.954 8.954 1 20 1z"
      opacity="0.95"
      fill="#fff"
    ></path>
    <path
      d="M20 1h126.707c4.118 11.652 15.231 20 28.293 20s24.175-8.348 28.293-20H330c11.046 0 20 8.954 20 20v454c0 11.046-8.954 20-20 20H203.627c-3.823-12.171-15.194-21-28.627-21-13.433 0-24.804 8.829-28.627 21H20c-11.046 0-20-8.954-20-20V21C0 9.954 8.954 1 20 1z"
      opacity="0.1"
      fill="url(#ticket-hologram-gradient-vertical)"
    ></path>
  </SVG>
);

export const TicketShape = () => {
  return (
    <Wrapper>
      <Shadow />
      <TicketVertical />
      <TicketHorizontal />
    </Wrapper>
  );
};
