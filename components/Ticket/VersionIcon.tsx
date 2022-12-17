import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';

const { breakpoints } = styles;

const SVG = styled.svg`
  display: block;
  width: 100px;

  @media (min-width: ${breakpoints[1]}px) {
    max-height: 100px;
    margin-right: 20px;
  }
`;

export function VersionIcon() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="102"
      height="100"
      fill="none"
      viewBox="0 0 102 100"
    >
      <g clipPath="url(#a)">
        <g filter="url(#b)">
          <path
            fill="#000"
            fillOpacity="0.15"
            d="M7.562 80l25.63-50.73v-.412H3.442v-9.122h41.05v9.328L18.891 80H7.561zm36.12.647c-1.786 0-3.316-.627-4.591-1.883-1.275-1.255-1.903-2.785-1.883-4.59-.02-1.766.608-3.276 1.883-4.532 1.275-1.255 2.805-1.883 4.59-1.883 1.727 0 3.227.628 4.502 1.883 1.295 1.256 1.952 2.766 1.972 4.532a6.283 6.283 0 01-.942 3.266 6.763 6.763 0 01-2.354 2.354 6.125 6.125 0 01-3.178.853zm30.653.5c-4.846 0-9.005-1.226-12.477-3.678-3.452-2.471-6.11-6.032-7.974-10.681-1.844-4.669-2.766-10.29-2.766-16.86.02-6.573.951-12.163 2.795-16.773 1.864-4.63 4.522-8.161 7.975-10.594 3.472-2.432 7.62-3.648 12.447-3.648 4.825 0 8.974 1.216 12.447 3.648 3.472 2.433 6.13 5.964 7.974 10.593 1.863 4.63 2.795 10.221 2.795 16.773 0 6.591-.932 12.221-2.795 16.89-1.844 4.65-4.502 8.2-7.975 10.652-3.452 2.453-7.601 3.679-12.447 3.679zm0-9.21c3.766 0 6.738-1.853 8.915-5.561 2.198-3.727 3.296-9.21 3.296-16.449 0-4.786-.5-8.808-1.5-12.064-1.001-3.257-2.414-5.709-4.238-7.357-1.824-1.667-3.982-2.5-6.474-2.5-3.746 0-6.709 1.863-8.886 5.59-2.177 3.708-3.276 9.151-3.296 16.331-.02 4.806.461 8.847 1.442 12.123 1 3.276 2.413 5.748 4.237 7.416 1.825 1.648 3.992 2.471 6.504 2.471z"
          ></path>
        </g>
        <mask
          id="c"
          style={{ maskType: 'alpha' }}
          width="95"
          height="64"
          x="3"
          y="18"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#fff"
            d="M7.562 80l25.63-50.73v-.412H3.442v-9.122h41.05v9.328L18.891 80H7.561zm36.12.647c-1.786 0-3.316-.627-4.591-1.883-1.275-1.255-1.903-2.785-1.883-4.59-.02-1.766.608-3.276 1.883-4.532 1.275-1.255 2.805-1.883 4.59-1.883 1.727 0 3.227.628 4.502 1.883 1.295 1.256 1.952 2.766 1.972 4.532a6.283 6.283 0 01-.942 3.266 6.763 6.763 0 01-2.354 2.354 6.125 6.125 0 01-3.178.853zm30.653.5c-4.846 0-9.005-1.226-12.477-3.678-3.452-2.471-6.11-6.032-7.974-10.681-1.844-4.669-2.766-10.29-2.766-16.86.02-6.573.951-12.163 2.795-16.773 1.864-4.63 4.522-8.161 7.975-10.594 3.472-2.432 7.62-3.648 12.447-3.648 4.825 0 8.974 1.216 12.447 3.648 3.472 2.433 6.13 5.964 7.974 10.593 1.863 4.63 2.795 10.221 2.795 16.773 0 6.591-.932 12.221-2.795 16.89-1.844 4.65-4.502 8.2-7.975 10.652-3.452 2.453-7.601 3.679-12.447 3.679zm0-9.21c3.766 0 6.738-1.853 8.915-5.561 2.198-3.727 3.296-9.21 3.296-16.449 0-4.786-.5-8.808-1.5-12.064-1.001-3.257-2.414-5.709-4.238-7.357-1.824-1.667-3.982-2.5-6.474-2.5-3.746 0-6.709 1.863-8.886 5.59-2.177 3.708-3.276 9.151-3.296 16.331-.02 4.806.461 8.847 1.442 12.123 1 3.276 2.413 5.748 4.237 7.416 1.825 1.648 3.992 2.471 6.504 2.471z"
          ></path>
        </mask>
        <g mask="url(#c)">
          <path fill="url(#text-gradient)" d="M1 16h100v68H1z"></path>
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h102v100H0z"></path>
        </clipPath>
        <filter
          id="b"
          width="116.829"
          height="84.956"
          x="-7.918"
          y="7.552"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.757"></feOffset>
          <feGaussianBlur stdDeviation="0.757"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_582_14724"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="5.68"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_582_14724"
            result="effect2_dropShadow_582_14724"
          ></feBlend>
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_582_14724" result="shape"></feBlend>
        </filter>
        <linearGradient id="text-gradient" gradientTransform="rotate(290deg)">
          <stop offset="0%" stop-color="hsl(271deg 59% 42%)" />
          <stop offset="20%" stop-color="hsl(209deg 100% 44%)" />
          <stop offset="29%" stop-color="hsl(198deg 100% 45%)" />
          <stop offset="36%" stop-color="hsl(184deg 100% 42%)" />
          <stop offset="43%" stop-color="hsl(165deg 66% 54%)" />
          <stop offset="50%" stop-color="hsl(108deg 54% 63%)" />
          <stop offset="57%" stop-color="hsl(57deg 72% 47%)" />
          <stop offset="64%" stop-color="hsl(36deg 100% 55%)" />
          <stop offset="71%" stop-color="hsl(20deg 100% 63%)" />
          <stop offset="80%" stop-color="hsl(358deg 100% 68%)" />
          <stop offset="100%" stop-color="hsl(340deg 100% 64%)" />
        </linearGradient>
      </defs>
    </SVG>
  );
}
