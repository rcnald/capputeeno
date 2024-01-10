import Image from 'next/image'

export default function Products() {
  return <Product type={'caneca'} name={'black ring'} price={34} />
}

interface ProductProps {
  type: string
  name: string
  price: number
}

function Product({ type, name, price }: ProductProps) {
  return (
    <article data-type={type} className="w-fit rounded-t-lg">
      <Image
        src="https://source.unsplash.com/random"
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
