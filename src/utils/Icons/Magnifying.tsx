import { IconProps } from '../Icons'

export function Magnifying({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 24 24`}
      className={className}
    >
      <circle
        cx="11.059"
        cy="11.059"
        r="7.062"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className={className}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m20.003 20.003-3.951-3.951"
        className={className}
      />
    </svg>
  )
}
