import { IconProps } from '../Icons'

export function Return({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.364 3.636a9 9 0 0 1 0 12.728 9 9 0 1 1 0-12.728"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8 11 5.5 8.5 8 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 14h1.25a2.75 2.75 0 0 0 2.75-2.75v0a2.75 2.75 0 0 0-2.75-2.75H5.5"
      />
    </svg>
  )
}
