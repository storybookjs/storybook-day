import { styles } from '@storybook/components-marketing';
import { StorybookDayLogo } from '@components/StorybookDayLogo';
import { Logos } from '@storybook/design-system';
import { TicketProfile } from './TicketProfile';
import { SHORT_DATE, SHORT_TIME, SHORT_TIMEZONE } from '@lib/constants';

// const { color, spacing, typography, text } = styles;
const border = 'rgba(0, 0, 0, 0.2)';
export const color = {
  secondary: '#1EA7FD',
  darkest: '#333333'
};

export const spacing = {
  borderRadius: {
    small: 5
  }
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  weight: {
    regular: '400'
  },
  size: {
    s2: 14
  }
} as const;

const TicketShape = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 494 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: 'flex',
      filter: 'drop-shadow(0px 52px 39px rgba(0, 0, 0, 0.1))'
      // filter:
      //   'drop-shadow(0px 52px 39px rgba(0, 0, 0, 0.05)) drop-shadow(0px 130px 104px rgba(0, 0, 0, 0.05)) drop-shadow(0px 13px 26px rgba(0, 0, 0, 0.1)) drop-shadow(0px 1.3px 3.9px rgba(0, 0, 0, 0.1))'
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

const ChromaticLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 429 84"
    role="img"
    style={{
      width: 102,
      height: 20,
      marginLeft: 10,
      filter: 'grayscale(1)'
    }}
  >
    <defs>
      <path
        id="chromatic_svg__a"
        d="m51.87 61.316-6.674-3.851 20.078-11.581c.77-.445 1.495-.954 2.17-1.523 2.61 3.716 2.866 8.61.54 12.639a11.848 11.848 0 0 1-10.23 5.895c-2.057 0-4.09-.546-5.884-1.58zm-1.608 2.782c.77.445 1.574.819 2.405 1.12C50.75 69.332 46.638 72 41.98 72c-6.502 0-11.795-5.287-11.795-11.785V37.051l10.187 5.878v14.536c0 .574.307 1.104.804 1.391l9.086 5.242zm-24.025-1.205a11.84 11.84 0 0 1-10.225-5.891 11.702 11.702 0 0 1-1.176-8.944 11.704 11.704 0 0 1 5.495-7.157l6.672-3.85.001 23.16c0 .888.076 1.77.231 2.642-.332.027-.666.04-.998.04zM52.2 34.268l-10.184 5.875-12.6-7.267a1.612 1.612 0 0 0-1.607 0l-9.086 5.241c-.77.443-1.496.95-2.172 1.521-2.608-3.715-2.863-8.609-.539-12.639a11.848 11.848 0 0 1 10.229-5.896c2.055 0 4.09.548 5.884 1.582L52.2 34.268zM41.98 12c6.505 0 11.795 5.287 11.795 11.788v7.7l-20.072-11.58a14.916 14.916 0 0 0-2.408-1.122C33.211 14.669 37.325 12 41.98 12zm26.003 15.003c3.25 5.629 1.314 12.851-4.319 16.1L43.589 54.683V42.932l12.599-7.269c.498-.287.805-.817.805-1.391V23.788c0-.885-.08-1.767-.232-2.636a11.842 11.842 0 0 1 11.222 5.851z"
      ></path>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="#333"
        d="M328.513 28.754c8.296 0 14.538 4.567 14.538 14.51v19.88h-8.294l.244-4.808c-2.467 3.607-5.75 5.53-10.842 5.53-6.817 0-12.406-3.125-12.406-10.661 0-6.978 5.752-10.019 13.555-10.102h9.449c0-5.372-2.465-7.616-6.9-7.616-3.57 0-5.947 1.205-7.724 2.737l-5.992-3.376-.085-.083c.053-.06.104-.123.157-.178 3.024-3.43 7.11-5.833 14.3-5.833zm6.244 22.604v-2.645h-8.872c-3.615 0-5.998 1.284-5.998 4.253 0 2.884 2.3 4.405 6.572 4.405 4.847 0 8.298-2.326 8.298-6.013zm87.602 1.428L429 56.529c-3.266 4.436-8.587 7.337-14.611 7.337-9.935 0-17.986-7.862-17.986-17.557 0-9.695 8.05-17.555 17.986-17.555 6.015 0 11.32 2.889 14.59 7.309l-6.642 3.745a10.47 10.47 0 0 0-7.948-3.625c-5.72 0-10.374 4.542-10.374 10.126 0 5.582 4.654 10.127 10.374 10.127 3.199 0 6.063-1.42 7.97-3.65zm-291.403 0 6.641 3.743c-3.266 4.436-8.587 7.337-14.611 7.337-9.935 0-17.986-7.862-17.986-17.557 0-9.695 8.05-17.555 17.986-17.555 6.015 0 11.32 2.889 14.59 7.309l-6.642 3.745a10.47 10.47 0 0 0-7.948-3.625c-5.72 0-10.374 4.542-10.374 10.126 0 5.582 4.654 10.127 10.374 10.127 3.199 0 6.064-1.42 7.97-3.65zm121.446-23.31h8.296l-.164 5.772c2.302-4.248 5.833-6.494 10.27-6.494 5.008 0 8.298 2.322 10.103 6.412 2.71-4.007 6.817-6.412 11.827-6.412 8.131 0 12.976 5.292 12.976 13.867v20.523h-8.293v-19.72c0-4.651-1.727-7.216-6.491-7.216-4.842 0-7.721 2.887-7.721 8.5v18.436h-8.293v-19.72c0-4.651-1.646-7.216-6.41-7.216-4.93 0-7.804 2.887-7.804 8.5v18.436h-8.296V29.476zM143.595 10h8.294v25.407c2.22-4.167 6.328-6.653 11.506-6.653 7.634 0 12.894 5.292 12.894 14.432v19.958h-8.3V43.826c0-4.811-2.297-7.618-7.147-7.618-5.42 0-8.953 3.208-8.953 8.66v18.276h-8.294V10zm84.235 18.754c9.94 0 17.989 7.86 17.989 17.555s-8.05 17.557-17.989 17.557c-9.931 0-17.986-7.862-17.986-17.557 0-9.695 8.055-17.555 17.986-17.555zm0 7.43c-5.717 0-10.373 4.541-10.373 10.125 0 5.582 4.656 10.127 10.373 10.127 5.726 0 10.381-4.545 10.381-10.127 0-5.584-4.655-10.126-10.38-10.126zm-43.295-6.708h8.3l-.085 6.331c2.305-5.29 6.245-6.974 10.024-6.974 1.768 0 3.16.29 4.345.78.467.19 1.443.648 2.393 1.342 0 0-1.15 1.396-2.161 3.094-1.016 1.7-1.702 3.522-1.702 3.522-1.314-.64-2.63-1.124-4.517-1.124-4.929 0-8.297 2.806-8.297 10.344v16.353h-8.3V29.476zm196.257 33.72v-33.72h8.392v33.72h-8.392zm-1.316-46.805c0-3.05 2.55-5.3 5.511-5.3 2.962 0 5.513 2.25 5.513 5.3 0 3.21-2.551 5.378-5.513 5.378-2.961 0-5.511-2.167-5.511-5.378zm-24.733 35.406V36.3h-5.183v-6.824h5.183V10h8.309v19.477h9.214V36.3h-9.214v15.655c0 3.855 1.317 4.98 3.455 4.98 1.975 0 3.209-.884 4.113-1.607l3.95 5.459C372.84 62.394 370.126 64 365.684 64c-6.499 0-10.942-3.212-10.942-12.203z"
      ></path>
      <circle cx="42" cy="42" r="42" fill="#333333"></circle>
      <use fill="#FFF" xlinkHref="#chromatic_svg__a"></use>
    </g>
  </svg>
);

interface TicketOGImageProps {
  size?: number;
  name?: string;
  ticketNumber?: number;
  username?: string;
  style?: React.CSSProperties;
}

const Top = ({ tickerNumber }: { tickerNumber: string }) => (
  <div
    style={{
      display: 'flex',
      width: '100%',
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
      {tickerNumber}
    </div>
  </div>
);

const Bottom = () => (
  <div
    style={{
      width: '100%',
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
      <ChromaticLogo />
    </div>
    <span>storybook.js.org/day</span>
  </div>
);

const styles = {
  info: {
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '16px'
  }
};

const Middle = ({
  name,
  username,
  ticketNumber
}: {
  name: string;
  username: string;
  ticketNumber: string;
}) => (
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
    <div
      style={{
        display: 'flex',
        gap: '40px',
        justifyContent: 'flex-start'
      }}
    >
      <div>
        <div>{SHORT_TIME}</div>
        <div>{SHORT_TIMEZONE}</div>
      </div>
      <div>
        <div>{SHORT_DATE}</div>
        <div>Online event</div>
      </div>
    </div>
    <TicketProfile name={name} username={username} ticketNumber={ticketNumber} />
  </div>
);

export const TicketOGImage = ({ name, username, ticketNumber, ...props }: TicketOGImageProps) => {
  const numDigits = `${ticketNumber}`.length;
  const prefix = `000000`.slice(numDigits);
  const formattedTickerNumber = `#${prefix}${ticketNumber}`;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${'http://localhost:3000/day/gradient-backdrop.svg'})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: 494,
          height: 350,
          transform: 'scale(3)'
        }}
      >
        <TicketShape />
        <div
          style={{
            display: 'flex',
            flex: '1',
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
              width: '100%',
              border: `1px solid ${border}`,
              borderRadius: '7px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Top */}
            <Top tickerNumber={formattedTickerNumber} />
            {/* Middle */}
            <Middle name={name} username={username} ticketNumber={formattedTickerNumber} />
            {/* Bottom */}
            <Bottom />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div
  //     style={{
  //       position: 'relative',
  //       width: 500
  //     }}
  //     {...props}
  //   >
  //     <TicketShape />
  //     <div
  //       style={{
  //         zIndex: '1',
  //         position: 'absolute',
  //         top: 0,
  //         width: '100%',
  //         height: '100%',
  //         padding: '20px 40px'
  //       }}
  //     >
  //       <div
  //         style={{
  //           border: `1px solid ${border}`,
  //           borderRadius: '7px',
  //           height: '100%',
  //           display: 'flex',
  //           flexDirection: 'column'
  //         }}
  //       >
  //         <div
  //           style={{
  //             display: 'flex',
  //             alignItems: 'center',
  //             justifyContent: 'space-between',
  //             padding: '17px 20px 15px',
  //             borderBottom: `1px solid ${border}`
  //           }}
  //         >
  //           <StorybookDayLogo style={{ height: 24 }} />
  //           <div
  //             style={{
  //               borderRadius: `${spacing.borderRadius.small}px`,
  //               padding: `4px 8px 4px 8px`,
  //               border: `1px solid ${color.secondary}`,
  //               color: `${color.secondary}`,
  //               fontFamily: `${typography.type.code}`,
  //               fontWeight: `400`,
  //               fontSize: `${typography.size.s2}px`,
  //               lineHeight: `16px`
  //             }}
  //           >
  //             {formattedTickerNumber}
  //           </div>
  //         </div>
  //         <div
  //           style={{
  //             flex: '1',
  //             display: 'flex',
  //             flexDirection: 'column',
  //             justifyContent: 'center',
  //             gap: 15,
  //             paddingLeft: 40
  //           }}
  //         >
  //           {/* <TicketProfile name={name} username={username} ticketNumber={formattedTickerNumber} /> */}
  //         </div>
  //         <div
  //           style={{
  //             fontSize: 14,
  //             fontWeight: 400,
  //             lineHeight: '20px',
  //             color: `${color.darkest}`,
  //             display: 'flex',
  //             alignItems: 'center',
  //             justifyContent: 'space-between',
  //             padding: '17px 20px 15px',
  //             borderTop: `1px solid ${border}`,
  //             textAlign: 'center'
  //           }}
  //         >
  //           <div style={{ display: 'flex', alignItems: 'center', opacity: 0.9 }}>
  //             <div
  //               style={{
  //                 color: color.darkest,
  //                 fontSize: typography.size.s2, // 14
  //                 fontWeight: typography.weight.regular,
  //                 lineHeight: '20px'
  //               }}
  //             >
  //               Brought to you by
  //             </div>
  //             <Logos.Chromatic
  //               style={{
  //                 height: 20,
  //                 marginLeft: 10,
  //                 filter: 'grayscale(1)'
  //               }}
  //             />
  //           </div>
  //           <span>storybook.js.org/day</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
