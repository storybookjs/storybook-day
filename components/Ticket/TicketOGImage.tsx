import { styles } from '@storybook/components-marketing';
import { TicketProfile } from './TicketProfile';
import { FC } from 'react';
import { StorybookDayLogo } from '@components/StorybookDayLogo';
import { Logos } from '@storybook/design-system';

const { color, spacing, typography, text, breakpoints } = styles;
const border = 'rgba(0, 0, 0, 0.2)';

const TicketShape: FC = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 494 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    visibility="desktop"
    style={{
      display: 'block',
      filter:
        'drop-shadow(0px 52.2449px 39.1837px rgba(0, 0, 0, 0.05)) drop-shadow(0px 130.612px 104.49px rgba(0, 0, 0, 0.05)) drop-shadow(0px 13.0612px 26.1224px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1.30612px 3.91837px rgba(0, 0, 0, 0.1))'
    }}
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
  </svg>
);

interface TicketOGImageProps {
  size?: number;
  name?: string;
  ticketNumber?: number;
  username?: string;
  style?: React.CSSProperties;
}

export const TicketOGImage = ({ name, username, ticketNumber, ...props }: TicketOGImageProps) => {
  const numDigits = `${ticketNumber}`.length;
  const prefix = `000000`.slice(numDigits);
  const formattedTickerNumber = `#${prefix}${ticketNumber}`;

  return (
    <div
      style={{
        flex: 'none',
        position: 'relative',
        transform: 'translateZ(0)',
        width: 500
      }}
      {...props}
    >
      <TicketShape />
      <div
        style={{
          zIndex: '1',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          padding: '20px 40px'
        }}
      >
        <div
          style={{
            border: `1px solid ${border}`,
            borderRadius: '7px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '17px 20px 15px',
              borderBottom: `1px solid ${border}`
            }}
          >
            <StorybookDayLogo style={{ height: 24 }} />
            <div
              style={{
                borderRadius: `${spacing.borderRadius.small}px`,
                padding: `4px 8px 4px 8px`,
                border: `1px solid ${color.secondary}`,
                color: `${color.secondary}`,
                fontFamily: `${typography.type.code}`,
                fontWeight: `400`,
                fontSize: `${typography.size.s2}px`,
                lineHeight: `16px`
              }}
            >
              {formattedTickerNumber}
            </div>
          </div>
          <div
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 15,
              paddingLeft: 40
            }}
          >
            <TicketProfile name={name} username={username} ticketNumber={formattedTickerNumber} />
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '20px',
              color: `${color.darkest}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '17px 20px 15px',
              borderTop: `1px solid ${border}`,
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
              <div
                style={{
                  color: color.darkest,
                  fontSize: typography.size.s2, // 14
                  fontWeight: typography.weight.regular,
                  lineHeight: '20px'
                }}
              >
                Brought to you by
              </div>
              <Logos.Chromatic
                style={{
                  height: 20,
                  marginLeft: 10,
                  filter: 'grayscale(1)'
                }}
              />
            </div>
            <span>storybook.js.org/day</span>
          </div>
        </div>
      </div>
    </div>
  );
};
