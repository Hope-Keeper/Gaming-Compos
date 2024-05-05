/* eslint-disable @typescript-eslint/no-empty-interface */
import { type FunctionComponent } from 'react'

interface YouTubeProps {}

const YouTube: FunctionComponent<YouTubeProps> = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-6.10352e-05 8.29091C-6.10352e-05 3.71197 3.71191 0 8.29085 0H31.709C36.288 0 39.9999 3.71197 39.9999 8.29091V31.7091C39.9999 36.288 36.288 40 31.709 40H8.29085C3.71191 40 -6.10352e-05 36.288 -6.10352e-05 31.7091V8.29091Z"
        fill="#EAEBF0"
      />
      <g clipPath="url(#clip0_1593_16029)" filter="url(#filter0_i_1593_16029)">
        <path
          d="M30.5041 15.2402C30.3837 14.8107 30.1492 14.4218 29.8255 14.115C29.4926 13.7987 29.0846 13.5724 28.6401 13.4576C26.9762 13.019 20.3102 13.019 20.3102 13.019C17.5312 12.9874 14.7529 13.1265 11.991 13.4354C11.5464 13.5588 11.1392 13.7901 10.8056 14.1088C10.4778 14.4242 10.2403 14.8131 10.1163 15.2393C9.81835 16.8444 9.67358 18.4742 9.68396 20.1068C9.67333 21.7378 9.81774 23.3671 10.1163 24.9743C10.2377 25.3986 10.4742 25.7858 10.8029 26.0985C11.1316 26.4113 11.5409 26.6372 11.991 26.7568C13.677 27.1945 20.3102 27.1945 20.3102 27.1945C23.0927 27.2261 25.8746 27.0871 28.6401 26.7781C29.0846 26.6632 29.4926 26.437 29.8255 26.1207C30.1533 25.8079 30.3863 25.419 30.5032 24.9955C30.809 23.391 30.9576 21.7605 30.9471 20.1271C30.9701 18.4869 30.8216 16.8487 30.5041 15.2393V15.2402ZM18.191 23.1403V17.0741L23.7371 20.1076L18.191 23.1403Z"
          fill="#011222"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_1593_16029"
          x="9.68402"
          y="9.47363"
          width="21.2632"
          height="21.8445"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.581818" />
          <feGaussianBlur stdDeviation="1.09091" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1593_16029"
          />
        </filter>
        <clipPath id="clip0_1593_16029">
          <rect
            width="21.2632"
            height="21.2632"
            fill="white"
            transform="translate(9.68402 9.47363)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default YouTube
