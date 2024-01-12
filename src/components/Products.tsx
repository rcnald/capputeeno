import useQueryParam from '@/hooks/useQueryParam'
import { cn, fakeFetchProducts } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface ProductProps {
  type: string
  name: string
  price: number
  imageUrl: string
  id: string
}

export default function Products({ className }: { className?: string }) {
  const { getQuery } = useQueryParam()
  const products = fakeFetchProducts({
    category: getQuery('category', 'all'),
    page: getQuery('page', '1'),
    filter: getQuery('filter', 'news'),
    query: getQuery('query', ''),
  })
  return (
    <ul className={cn('flex flex-wrap gap-8 py-10', className)}>
      {products.map((product) => {
        return (
          <Product
            type={product.category}
            name={product.name}
            price={product.price_in_cents}
            imageUrl={product.image_url}
            id={product.id}
            key={product.id}
          />
        )
      })}
    </ul>
  )
}

function Product({ type, name, price, imageUrl, id }: ProductProps) {
  return (
    <li data-type={type} className="w-fit rounded-t-lg">
      <Link href={`/product/${id}`} className="flex flex-1 flex-col">
        <Image
          src={imageUrl}
          width={256}
          height={300}
          alt="Picture of the author"
          className="h-[300px]"
        ></Image>
        <div className="flex flex-col gap-2 bg-white px-3 py-2">
          <h1 className="capitalize text-zinc-400">{name}</h1>
          <hr />
          <span className="font-semibold text-black">R$ {price}</span>
        </div>
      </Link>
    </li>
  )
}
