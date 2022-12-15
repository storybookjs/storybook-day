import { styled } from '@storybook/theming';
import { styles } from '@storybook/components-marketing';

const { breakpoints } = styles;

const SVG = styled.svg`
  display: block;
  width: 136px;

  @media (min-width: ${breakpoints[1]}px) {
    max-height: 100px;
    margin-right: 20px;
    margin-left: -10px;
  }
`;

export function VersionIcon() {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 118 101" aria-label="7.0">
      <g clipPath="url(#a)">
        <g filter="url(#b)">
          <path
            fill="#000"
            fillOpacity="0.15"
            d="M16.32 80.757l25.629-50.73v-.411h-29.75v-9.122h41.05v9.328L27.647 80.757H16.319zm36.118.648c-1.785 0-3.315-.628-4.59-1.883-1.275-1.256-1.903-2.786-1.883-4.59-.02-1.767.608-3.277 1.883-4.532 1.275-1.256 2.805-1.884 4.59-1.884 1.726 0 3.227.628 4.502 1.883 1.295 1.256 1.952 2.766 1.972 4.532-.02 1.197-.334 2.285-.942 3.266a6.762 6.762 0 01-2.354 2.354 6.124 6.124 0 01-3.178.854zm30.653.5c-4.845 0-9.004-1.226-12.476-3.678-3.453-2.472-6.11-6.032-7.974-10.682-1.844-4.669-2.766-10.289-2.766-16.86.02-6.572.951-12.163 2.795-16.773 1.864-4.63 4.522-8.16 7.974-10.593 3.472-2.433 7.621-3.65 12.447-3.65 4.826 0 8.975 1.217 12.447 3.65 3.472 2.432 6.131 5.963 7.975 10.593 1.863 4.63 2.795 10.22 2.795 16.772 0 6.592-.932 12.222-2.795 16.89-1.844 4.65-4.503 8.2-7.975 10.653-3.452 2.452-7.601 3.678-12.447 3.678zm0-9.21c3.767 0 6.739-1.854 8.916-5.562 2.197-3.727 3.296-9.21 3.296-16.449 0-4.786-.5-8.808-1.5-12.064-1.001-3.256-2.414-5.709-4.238-7.356-1.824-1.668-3.982-2.502-6.474-2.502-3.746 0-6.709 1.864-8.886 5.591-2.178 3.708-3.276 9.152-3.296 16.331-.02 4.807.461 8.848 1.442 12.124 1 3.276 2.413 5.747 4.237 7.415 1.825 1.648 3.992 2.472 6.503 2.472z"
          ></path>
        </g>
        <mask
          id="c"
          style={{ maskType: 'alpha' }}
          width="95"
          height="64"
          x="11"
          y="18"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="#000"
            d="M15.562 80l25.63-50.73v-.412h-29.75v-9.122h41.05v9.328L26.891 80h-11.33zm36.12.647c-1.786 0-3.316-.627-4.591-1.883-1.275-1.255-1.903-2.785-1.883-4.59-.02-1.766.608-3.276 1.883-4.532 1.275-1.255 2.805-1.883 4.59-1.883 1.727 0 3.227.628 4.502 1.883 1.295 1.256 1.952 2.766 1.972 4.532a6.283 6.283 0 01-.942 3.266 6.763 6.763 0 01-2.354 2.354 6.125 6.125 0 01-3.178.853zm30.653.5c-4.846 0-9.005-1.226-12.477-3.678-3.453-2.471-6.11-6.032-7.974-10.681-1.844-4.669-2.766-10.29-2.766-16.86.02-6.573.951-12.163 2.795-16.773 1.864-4.63 4.522-8.161 7.975-10.594 3.472-2.432 7.62-3.648 12.447-3.648 4.825 0 8.974 1.216 12.447 3.648 3.472 2.433 6.13 5.964 7.974 10.593 1.863 4.63 2.795 10.221 2.795 16.773 0 6.591-.932 12.221-2.795 16.89-1.844 4.65-4.502 8.2-7.975 10.652-3.452 2.453-7.601 3.679-12.447 3.679zm0-9.21c3.766 0 6.738-1.853 8.915-5.561 2.198-3.727 3.296-9.21 3.296-16.449 0-4.786-.5-8.808-1.5-12.064-1.001-3.257-2.414-5.709-4.238-7.357-1.824-1.667-3.982-2.5-6.474-2.5-3.746 0-6.709 1.863-8.886 5.59-2.177 3.708-3.276 9.151-3.296 16.331-.02 4.806.461 8.847 1.442 12.123 1 3.276 2.413 5.748 4.237 7.416 1.825 1.648 3.992 2.471 6.504 2.471z"
          ></path>
        </mask>
        <g mask="url(#c)">
          <g clipPath="url(#d)">
            <path fill="#2A0481" d="M-44.573-8.67H146.57V93.301H-44.573z"></path>
            <circle cx="5.611" cy="79.419" r="47.787" fill="url(#e)"></circle>
            <circle cx="5.611" cy="29.205" r="47.787" fill="url(#f)"></circle>
            <circle cx="99.514" cy="29.205" r="47.787" fill="url(#g)"></circle>
            <circle cx="99.514" cy="79.419" r="47.787" fill="url(#h)"></circle>
          </g>
          <g style={{ mixBlendMode: 'overlay' }} opacity="0.5">
            <path
              fill="url(#i)"
              d="M90.853 38.431h46.24v61.225h-46.24z"
              transform="rotate(90 90.853 38.431)"
            ></path>
            <path
              fill="url(#j)"
              d="M90.853 38.431h46.24v61.225h-46.24z"
              transform="rotate(90 90.853 38.431)"
            ></path>
          </g>
          <path
            fill="#fff"
            d="M104.105 4.638h31.938v44.66h-31.938zM5.481-11.264h31.938v44.66H5.481z"
            style={{ mixBlendMode: 'overlay' }}
            opacity="0.2"
          ></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="e"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(0 47.7874 -47.7874 0 5.61 79.42)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F77"></stop>
          <stop offset="1" stopColor="#F77" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="f"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90 -11.797 17.408) scale(47.7874)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC077"></stop>
          <stop offset="1" stopColor="#FFC077" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="g"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90 35.155 64.36) scale(47.7874)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF778F"></stop>
          <stop offset="1" stopColor="#FF778F" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="h"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(90 10.047 89.467) scale(47.7874)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#77FFF7"></stop>
          <stop offset="1" stopColor="#77FFF7" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="j"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(43.03372 16.17368 -20.27646 53.95009 90.853 76.37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4179D9" stopOpacity="0.9"></stop>
          <stop offset="1" stopColor="#A257B9" stopOpacity="0.01"></stop>
        </radialGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h118v100.757H0z"></path>
        </clipPath>
        <clipPath id="d">
          <path fill="#fff" d="M-44.573-8.67H146.57V93.301H-44.573z"></path>
        </clipPath>
        <linearGradient
          id="i"
          x1="139.442"
          x2="175.356"
          y1="118.518"
          y2="58.759"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6CFA"></stop>
          <stop offset="1" stopColor="#F27739"></stop>
        </linearGradient>
        <filter
          id="b"
          width="116.829"
          height="84.956"
          x="0.839"
          y="8.309"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_407_13823"></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="5.68"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_407_13823"
            result="effect2_dropShadow_407_13823"
          ></feBlend>
          <feBlend in="SourceGraphic" in2="effect2_dropShadow_407_13823" result="shape"></feBlend>
        </filter>
      </defs>
    </SVG>
  );
}
