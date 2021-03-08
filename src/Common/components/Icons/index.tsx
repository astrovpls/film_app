import React from 'react'
import s from './Icons.module.scss'

interface Icon {
  className?: string
}

export const Loader: React.FC<Icon> = props => {
  return (
    <svg
      className={`icon ${props?.className}`}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#858585"
      viewBox="0 0 500 750"
    >
      <g fill="none" fillRule="evenodd" strokeWidth="2">
        <circle cx="250" cy="375" r="1">
          <animate
            attributeName="r"
            begin="0s"
            calcMode="spline"
            dur="1.8s"
            keySplines="0.165, 0.84, 0.44, 1"
            keyTimes="0; 1"
            repeatCount="indefinite"
            values="1; 20"
          ></animate>
          <animate
            attributeName="stroke-opacity"
            begin="0s"
            calcMode="spline"
            dur="1.8s"
            keySplines="0.3, 0.61, 0.355, 1"
            keyTimes="0; 1"
            repeatCount="indefinite"
            values="1; 0"
          ></animate>
        </circle>
        <circle cx="250" cy="375" r="1">
          <animate
            attributeName="r"
            begin="-0.9s"
            calcMode="spline"
            dur="1.8s"
            keySplines="0.165, 0.84, 0.44, 1"
            keyTimes="0; 1"
            repeatCount="indefinite"
            values="1; 20"
          ></animate>
          <animate
            attributeName="stroke-opacity"
            begin="-0.9s"
            calcMode="spline"
            dur="1.8s"
            keySplines="0.3, 0.61, 0.355, 1"
            keyTimes="0; 1"
            repeatCount="indefinite"
            values="1; 0"
          ></animate>
        </circle>
      </g>
    </svg>
  )
}

export const EventPlaceholder: React.FC<Icon> = props => {
  return (
    <svg
      className={`icon ${props?.className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="750"
      fill="none"
      viewBox="0 0 500 750"
    >
      <path
        stroke="#4A5568"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.33"
        d="M136.333 131v10.667V131zM131 136.333h10.667H131zm8 32V179v-10.667zm-5.333 5.334h10.666-10.666zm24-42.667l6.096 18.285L179 155l-15.237 5.715L157.667 179l-6.096-18.285L136.333 155l15.238-5.715L157.667 131z"
      ></path>
    </svg>
  )
}

export const ImagePlaceholder: React.FC<Icon> = props => (
  <svg
    className={`icon ${props?.className}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 500 750"
  >
    <path fill="#fff" d="M0 0H500V750H0z"></path>
    <path
      stroke="#4A5568"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
      d="M175.333 279v42.667V279zM154 300.333h42.667H154zm32 128V471v-42.667zm-21.333 21.334h42.666-42.666zm96-170.667l24.384 73.141L346 375l-60.949 22.859L260.667 471l-24.384-73.141L175.333 375l60.95-22.859L260.667 279z"
    ></path>
  </svg>
)

interface Progress {
  className?: string,
  percentage?: number
}

export const Progress: React.FC<Progress> = ({ className, percentage = 0 }) => {
  const radius = 28
  const circumference = 6.28 * radius
  const part = percentage
    ? circumference * (1 - percentage / 100)
    : circumference
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
      className={`${s.progress} ${className}`}
    >
      <rect width="64" height="64" fill="#F4F5F7" rx="32"></rect>
      <circle
        className={s.arc}
        xmlns="http://www.w3.org/2000/svg"
        cx="32"
        cy="32"
        r={radius}
        stroke="#0A89A9"
        strokeDasharray={circumference}
        strokeDashoffset={part}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      ></circle>

      <circle cx="32" cy="32" r="27" fill="#F4F5F7"></circle>
      <text
        xmlns="http://www.w3.org/2000/svg"
        x={percentage === 100 || !percentage ? '11' : '17'}
        y="41"
      >
        {percentage ? percentage : 'N/A'}
      </text>
    </svg>
  )
}