import { IconProps } from '../Icons'

export function Chevron({ size, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="#737380"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8 10 4 4 4-4"
        className={className}
      />
    </svg>
  )
}
