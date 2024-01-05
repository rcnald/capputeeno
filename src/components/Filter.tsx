import { Chevron } from '@/utils/Icons/Chevron'
import { ComponentProps } from 'react'

interface OptionsProps extends ComponentProps<'li'> {
  children: string
}

interface FiltersDataProps {
  name: string
  id: string
}

export default function Filter() {
  return (
    <div className="">
      <button
        id="orderProductsBy"
        aria-haspopup="true"
        aria-expanded="false"
        className="group flex text-zinc-400 hover:text-zinc-700"
      >
        Organizar por
        <Chevron
          size="24px"
          className="stroke-zinc-400 group-hover:stroke-zinc-700"
        />
      </button>

      <ul aria-labelledby="orderProductsBy" className="rounded bg-white">
        {filters.map((filter) => {
          return (
            <Options key={filter.id} id={filter.id}>
              {filter.name}
            </Options>
          )
        })}
      </ul>
    </div>
  )
}

function Options({ children, ...props }: OptionsProps) {
  return (
    <li {...props}>
      <button>{children}</button>
    </li>
  )
}

const filters: Array<FiltersDataProps> = [
  { name: 'Novidades', id: 'news' },
  { name: 'Preço: Maior - menor', id: 'price-to-low' },
  { name: 'Preço: Menor - maior', id: 'price-to-high' },
  { name: 'Mais vendidos', id: 'best-sellers' },
]
