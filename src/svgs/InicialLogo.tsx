import { SVGProps } from 'react';

// SVGProps<SVGSVGElement> para tipar props
type TSVGElementProps = SVGProps<SVGSVGElement>

export const InicialLogo = (props: TSVGElementProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1024}
    height={1024}
    viewBox="0 0 1024 1024"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)" filter="url(#b)">
      <path
        fill="#F1F1F1"
        d="m56.284 550.241-.951-1.759c12.753-6.898 28.625-15.481 36.916-29.567 8.172-13.887 8.355-32.743.478-49.211-6.704-14.016-19.018-26.573-35.611-36.313-3.273-1.922-6.709-3.743-10.032-5.504-8.031-4.256-16.336-8.658-23.184-14.903-9.431-8.601-16.568-23.034-11.249-35.891a23.855 23.855 0 0 1 20.678-14.467l.112 1.997a21.86 21.86 0 0 0-18.948 13.248c-4.942 11.947 1.84 25.505 10.755 33.636 6.66 6.074 14.852 10.415 22.773 14.613 3.342 1.771 6.797 3.603 10.108 5.546 16.938 9.943 29.526 22.798 36.402 37.174 8.161 17.061 7.947 36.637-.559 51.089-8.573 14.566-24.716 23.297-37.688 30.312Z"
      />
      <path
        fill="#F1F1F1"
        d="M46.004 373.167c9.665 0 17.5-3.805 17.5-8.5 0-4.694-7.835-8.5-17.5-8.5s-17.5 3.806-17.5 8.5c0 4.695 7.835 8.5 17.5 8.5ZM60.004 429.167c9.665 0 17.5-3.805 17.5-8.5 0-4.694-7.835-8.5-17.5-8.5s-17.5 3.806-17.5 8.5c0 4.695 7.835 8.5 17.5 8.5ZM28.004 438.167c9.665 0 17.5-3.805 17.5-8.5 0-4.694-7.835-8.5-17.5-8.5s-17.5 3.806-17.5 8.5c0 4.695 7.835 8.5 17.5 8.5ZM78.004 485.167c9.665 0 17.5-3.805 17.5-8.5 0-4.694-7.835-8.5-17.5-8.5s-17.5 3.806-17.5 8.5c0 4.695 7.835 8.5 17.5 8.5ZM113.004 485.167c9.665 0 17.5-3.805 17.5-8.5 0-4.694-7.835-8.5-17.5-8.5s-17.5 3.806-17.5 8.5c0 4.695 7.835 8.5 17.5 8.5Z"
      />
      <path
        fill="#E6E6E6"
        d="M757.671 464H472.838a25.492 25.492 0 0 1-25.464-25.464V25.464A25.494 25.494 0 0 1 472.838 0h284.833a25.491 25.491 0 0 1 25.464 25.464v413.072A25.492 25.492 0 0 1 757.671 464Z"
      />
      <path
        fill="#fff"
        d="M758.173 447.753H472.337a7.856 7.856 0 0 1-7.85-7.849V24.096a7.855 7.855 0 0 1 7.85-7.85h285.836a7.855 7.855 0 0 1 7.849 7.85v415.808a7.857 7.857 0 0 1-7.849 7.849ZM614.171 9.965a2.166 2.166 0 1 0 .001-4.333 2.166 2.166 0 0 0-.001 4.333Z"
      />
      <path
        fill="#3F3D56"
        d="M730.465 290.05H500.044a.72.72 0 0 1-.721-.721V178.888c0-.192.075-.375.211-.51a.717.717 0 0 1 1.02 0 .72.72 0 0 1 .211.51v109.72h229.7a.72.72 0 0 1 0 1.442Z"
      />
      <path
        fill="#6C63FF"
        d="M549.275 282.117h-20.958a2.142 2.142 0 0 1-2.141-2.14v-28.89a2.145 2.145 0 0 1 2.141-2.141h20.958a2.144 2.144 0 0 1 2.14 2.141v28.89a2.142 2.142 0 0 1-2.14 2.14ZM587.494 282.117h-20.958a2.143 2.143 0 0 1-2.14-2.14v-56.293a2.143 2.143 0 0 1 2.14-2.14h20.958a2.143 2.143 0 0 1 2.141 2.14v56.293a2.147 2.147 0 0 1-2.141 2.14ZM625.713 282.117h-20.958a2.142 2.142 0 0 1-2.14-2.14v-28.89a2.14 2.14 0 0 1 2.14-2.141h20.958a2.144 2.144 0 0 1 2.14 2.141v28.89a2.142 2.142 0 0 1-2.14 2.14ZM663.932 282.117h-20.958a2.095 2.095 0 0 1-2.14-2.043v-67.303a2.096 2.096 0 0 1 2.14-2.044h20.958a2.094 2.094 0 0 1 1.492.58c.402.383.635.909.649 1.464v67.303a2.094 2.094 0 0 1-2.141 2.043ZM702.151 282.117h-20.958a2.143 2.143 0 0 1-2.14-2.14v-86.58a2.14 2.14 0 0 1 2.14-2.14h20.958a2.14 2.14 0 0 1 2.141 2.14v86.58a2.145 2.145 0 0 1-2.141 2.14Z"
      />
      <path
        fill="#3F3D56"
        d="M538.796 240.293a4.327 4.327 0 1 0 0-8.653 4.327 4.327 0 0 0 0 8.653ZM577.015 212.169a4.326 4.326 0 1 0 .001-8.653 4.326 4.326 0 0 0-.001 8.653ZM615.234 240.293a4.327 4.327 0 1 0 0-8.653 4.327 4.327 0 0 0 0 8.653ZM653.453 198.468a4.326 4.326 0 1 0 .001-8.653 4.326 4.326 0 0 0-.001 8.653ZM691.672 182.604a4.327 4.327 0 1 0 0-8.653 4.327 4.327 0 0 0 0 8.653Z"
      />
      <path
        fill="#3F3D56"
        d="m615.325 236.935-38.31-28.694-37.787 28.302-.865-1.154 38.652-28.951 38.128 28.559 37.888-41.463.153-.062 38.219-15.399.539 1.338-38.067 15.338-38.55 42.186Z"
      />
      <path
        fill="#9F616A"
        d="M278.628 224.485a9.984 9.984 0 0 0-7.666 3.584l-44.81-1.401-1.753-7.554-23.19 11.316 3 20.689 68.29-8.744a9.989 9.989 0 0 0 8.993 1.685 9.997 9.997 0 0 0-2.864-19.575ZM195.627 537.085h12.26l5.833-47.288-18.095.001.002 47.287Z"
      />
      <path
        fill="#2F2E41"
        d="m192.5 533.083 24.144-.001h.001a15.389 15.389 0 0 1 15.387 15.386v.5l-39.531.001-.001-15.886Z"
      />
      <path
        fill="#9F616A"
        d="m149.367 527.336 11.778 3.404 18.732-43.81-17.383-5.023-13.127 45.429Z"
      />
      <path
        fill="#2F2E41"
        d="m147.474 522.623 23.195 6.702a15.386 15.386 0 0 1 10.51 19.054l-.139.48-37.977-10.974 4.411-15.262ZM180.572 331.748s-4.361 12.166 2.518 28.766l5.309 68.368 1.57 97.232h22.351l13.526-99.122 8.123-89.878-53.397-5.366Z"
      />
      <path
        fill="#2F2E41"
        d="M168.001 331.748s-4.361 12.166 2.518 28.766l5.309 68.368-26.429 92.603h22.35l41.526-94.493 8.124-89.878-53.398-5.366Z"
      />
      <path
        fill="#9F616A"
        d="M233.567 174.938c13.565 0 24.561-10.997 24.561-24.561 0-13.565-10.996-24.561-24.561-24.561s-24.561 10.996-24.561 24.561c0 13.564 10.996 24.561 24.561 24.561Z"
      />
      <path
        fill="#CBCBCB"
        d="m236.852 210.121-4.977-23.126-25.344-14.39-5.14 7.195s-36.264 9.529-31.878 51.172c4.386 41.642 2.386 61.642 2.386 61.642l-10 46s3.078.529 73.729 12.871l3-100-1.776-41.364Z"
      />
      <path
        fill="#000"
        d="m212.266 435.17-23.015 46.489v13.326l23.015-59.815Z"
        opacity={0.1}
      />
      <path
        fill="#2F2E41"
        d="M207.085 158.145c2.342 6.272 11.203 7.141 14.329 1.221.243-.46.441-.941.591-1.439.856-2.844.318-5.976 1.899-8.695a4.588 4.588 0 0 1 1.605-1.658c5.256-3.1 10.43 6.737 15.317 3.985 2.997-1.688 2.356-6.588 5.023-8.76 3.52-2.867 8.605 1.403 13.118.915 5.022-.542 7.398-6.904 6.307-11.835-1.332-6.015-6.037-10.896-11.558-13.627-5.522-2.731-11.795-3.556-17.953-3.709-6.997-.174-14.318.569-20.234 4.309-7.194 4.547-11.247 13.014-12.145 21.478-.545 5.148 1.789 12.694 3.701 17.815Z"
      />
      <path
        fill="#3F3D56"
        d="M327.44 326.732c.036 0 .072 0 .109-.002a72.884 72.884 0 0 0 69.072-71.969 72.884 72.884 0 0 0-67.442-73.498 1.659 1.659 0 0 0-1.258.436 1.655 1.655 0 0 0-.538 1.205l-1.593 142.145a1.666 1.666 0 0 0 1.65 1.683Z"
      />
      <path
        fill="#E6E6E6"
        d="M270.279 204.768c.568.006 1.11.238 1.507.643l48.935 50.044a2.13 2.13 0 0 1 .609 1.518l-.763 68.017a2.116 2.116 0 0 1-.691 1.549 2.168 2.168 0 0 1-.749.448 2.16 2.16 0 0 1-.866.112 73.356 73.356 0 0 1-62.451-45.444 73.361 73.361 0 0 1 12.839-76.162 2.143 2.143 0 0 1 1.63-.725Z"
      />
      <path
        fill="#6C63FF"
        d="M320.039 180.682a2.15 2.15 0 0 1 1.957 1.312c.113.27.169.56.164.852l-.687 61.369a2.14 2.14 0 0 1-2.577 2.067 2.14 2.14 0 0 1-1.088-.597l-42.701-43.67a2.138 2.138 0 0 1 .115-3.101 73.513 73.513 0 0 1 44.684-18.23c.044-.002.089-.003.133-.002Z"
      />
      <path
        fill="#9F616A"
        d="M253.628 252.485a9.984 9.984 0 0 0-7.666 3.584l-44.81-1.401-1.753-7.554-23.19 11.316 3 20.689 68.29-8.744a9.989 9.989 0 0 0 8.993 1.685 9.997 9.997 0 0 0-2.864-19.575Z"
      />
      <path
        fill="#CBCBCB"
        d="m172.431 266.951-1.246-61.633a16.32 16.32 0 0 1 16.153-16.65 16.33 16.33 0 0 1 11.648 4.721 16.314 16.314 0 0 1 4.839 11.599v45.043l-31.394 16.92ZM386 550H5a.998.998 0 0 1-1-1 1 1 0 0 1 1-1h381a.997.997 0 0 1 1 1 .997.997 0 0 1-1 1Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M4 0h779.135v550.241H4z" />
      </clipPath>
      <filter
        id="b"
        width={1024}
        height={1024}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_108_4" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_108_4"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
