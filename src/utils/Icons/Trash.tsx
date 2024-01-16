import { IconProps } from '../Icons'

export function Trash({ size, className }: IconProps) {
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
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M16.138 21h-8.28a2.001 2.001 0 0 1-1.995-1.853L4.966 7H19l-.867 12.142A2 2 0 0 1 16.138 21v0Z"
        clip-rule="evenodd"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 11v6M4 7h16m-3 0-1.013-2.702A2 2 0 0 0 14.114 3H9.886a2 2 0 0 0-1.873 1.298L7 7m8.43 4L15 17m-6.43-6L9 17"
      />
    </svg>
  )
}
