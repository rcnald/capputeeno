import { IconProps } from '../Icons'

export function Bag({ size, className }: IconProps) {
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
        d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"
        className={className}
      />
      <path
        stroke="#737380"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20 7H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
        className={className}
      />
      <path
        stroke="#737380"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 11a4 4 0 0 1-8 0"
        className={className}
      />
    </svg>
  )
}
