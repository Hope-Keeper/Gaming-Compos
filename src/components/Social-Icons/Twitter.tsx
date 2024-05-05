import { type FunctionComponent } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TwitterProps {}

const Twitter: FunctionComponent<TwitterProps> = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.10352e-05 8.29286C6.10352e-05 3.71392 3.71203 0.00195312 8.29097 0.00195312H31.7092C36.2881 0.00195312 40.0001 3.71392 40.0001 8.29286V31.711C40.0001 36.29 36.2881 40.002 31.7092 40.002H8.29097C3.71203 40.002 6.10352e-05 36.29 6.10352e-05 31.711V8.29286Z"
        fill="#EAEBF0"
      />
      <g filter="url(#filter0_i_1593_16027)">
        <g filter="url(#filter1_i_1593_16027)">
          <path
            d="M25.0732 12.3662H27.8306L21.8064 19.2515L28.8934 28.6208H23.3444L18.9982 22.9383L14.0251 28.6208H11.266L17.7095 21.2562L10.9109 12.3662H16.6008L20.5294 17.5602L25.0732 12.3662ZM24.1054 26.9703H25.6333L15.7706 13.93H14.131L24.1054 26.9703Z"
            fill="#011222"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1593_16027"
          x="9.20062"
          y="9.89746"
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
            result="effect1_innerShadow_1593_16027"
          />
        </filter>
        <filter
          id="filter1_i_1593_16027"
          x="10.9109"
          y="12.3662"
          width="17.9825"
          height="16.8367"
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
          <feGaussianBlur stdDeviation="0.290909" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1593_16027"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default Twitter
