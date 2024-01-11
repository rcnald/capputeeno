import useQueryParam from '@/hooks/useQueryParam'
import { fakeFetchProducts } from '@/lib/utils'
import Image from 'next/image'

interface ProductProps {
  type: string
  name: string
  price: number
  imageUrl: string
}

// interface ProductsProps {
//   category: string
//   filter: string
//   page: string
// }

export default function Products() {
  const { getQuery } = useQueryParam()
  const page = getQuery('page', '1')
  const category = getQuery('category', 'all')
  const filter = getQuery('filter', 'news')
  const products = fakeFetchProducts(category, page, filter)
  return (
    <div className="flex flex-wrap gap-8 py-20">
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
