import { Icons } from '@/utils/Icons'
import { useState } from 'react'

export default function Select({ defaultValue }: { defaultValue: number }) {
  const [selectedOption, setSelectedOption] = useState<number>(defaultValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="relative w-fit min-w-14 select-none">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer justify-between rounded-md border border-solid border-zinc-400 bg-zinc-200 p-2"
      >
        {options.find((option) => option === selectedOption)}
        <Icons.Chevron size="24" />
      </div>
      <ul
        data-open={isOpen}
        className="absolute top-[110%] z-50 hidden w-full cursor-pointer flex-col rounded-md border border-solid border-zinc-400 bg-zinc-200 p-2 data-[open=true]:flex"
      >
        {options.map((option) => {
          return (
            <Option
              key={option}
              isSelected={option === selectedOption}
              onClick={() => {
                setSelectedOption(option)
                setIsOpen((prev) => !prev)
              }}
            >
              {option}
            </Option>
          )
        })}
      </ul>
    </div>
  )
}

function Option({
  onClick,
  children,
  isSelected,
}: {
  onClick: () => void
  children: number
  isSelected: boolean
}) {
  return (
    <li
      onClick={onClick}
      data-selected={isSelected}
      className="flex w-full justify-center rounded-md hover:bg-zinc-300 data-[selected=true]:bg-zinc-300"
    >
      {children}
    </li>
  )
}

const options = Array.from({ length: 5 }, (_, i) => i + 1)
