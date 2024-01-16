import { Bag } from './Icons/Bag'
import { Chevron } from './Icons/Chevron'
import { Magnifying } from './Icons/Magnifying'
import { Return } from './Icons/Return'
import { Trash } from './Icons/Trash'

export type IconProps = {
  size: string
  className?: string
}

type IconType = {
  [key: string]: (props: IconProps) => JSX.Element
}

export const Icons: IconType = {
  Magnifying,
  Bag,
  Chevron,
  Return,
  Trash,
}
