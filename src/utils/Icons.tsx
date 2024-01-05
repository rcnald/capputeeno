import { ElementType } from 'react'
import { Bag } from './Icons/Bag'
import { Chevron } from './Icons/Chevron'
import { Magnifying } from './Icons/Magnifying'

export type IconProps = {
  size: string
  className?: string
}

type IconType = {
  [key: string]: ElementType
}

export const Icons: IconType = {
  Magnifying,
  Bag,
  Chevron,
}
