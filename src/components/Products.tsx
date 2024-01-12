import useQueryParam from '@/hooks/useQueryParam'
import { fakeFetchProducts } from '@/lib/utils'
import Image from 'next/image'

interface ProductProps {
  type: string
  name: string
  price: number
  imageUrl: string
}

export default function Products() {
  const { getQuery } = useQueryParam()
  const products = fakeFetchProducts({
    category: getQuery('category', 'all'),
    page: getQuery('page', '1'),
    filter: getQuery('filter', 'news'),
    query: getQuery('query', ''),
  })
  return (
    <div className="flex flex-1 flex-wrap gap-8 py-10">
      {products.map((product) => {
        return (
          <Product
            type={product.category}
            name={product.name}
            price={product.price_in_cents}
            imageUrl={product.image_url}
            key={product.id}
          />
        )
      })}
    </div>
  )
}

function Product({ type, name, price, imageUrl }: ProductProps) {
  return (
    <article data-type={type} className="w-fit rounded-t-lg">
      <Image
        src={imageUrl}
        width={256}
        height={300}
        alt="Picture of the author"
      ></Image>
      <div className="flex flex-col gap-2 bg-white px-3 py-2">
        <h1 className="capitalize text-zinc-400">{name}</h1>
        <hr />
        <span className="font-semibold text-black">R$ {price}</span>
      </div>
    </article>
  )
}