'use client'

import Return from '@/components/Return'
import Select from '@/components/Select'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Cart, cn, fakeFetchProduct } from '@/lib/utils'
import { Icons } from '@/utils/Icons'
import { Saira } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'

const saira = Saira({ subsets: ['latin'], weight: '400' })

export default function Page() {
  const [value, setValue] = useLocalStorage<Cart>('cart', [])
  const [cart, setCart] = useState(value)

  const totalPrice = cart.reduce((acc, item) => {
    const priceExists = fakeFetchProduct(item.id)?.price_in_cents
    if (priceExists) {
      return acc + priceExists * item.amount
    }
    return acc
  }, 0)

  function handleClick(id: string) {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
    setValue(newCart)
  }

  return (
    <div
      className={cn(
        'grid place-content-center gap-5 bg-zinc-200 p-7',
        saira.className,
      )}
    >
      <main className="flex gap-8">
        <section className="flex w-full flex-col gap-5">
          <Return />
          <div>
            <h1 className="text-2xl font-medium uppercase text-zinc-700">
              Seu carrinho
            </h1>
            <span>
              Total ({cart.length} produtos) <strong>R$ {totalPrice}</strong>
            </span>
          </div>
          <ul className="flex flex-col gap-5">
            {cart.map((item) => {
              const product = fakeFetchProduct(item.id)
              if (product) {
                return (
                  <Product
                    key={item.id}
                    amount={item.amount}
                    image={product.image_url}
                    description={product.description}
                    name={product.name}
                    price={product.price_in_cents}
                    onClick={() => handleClick(product.id)}
                  />
                )
              }
              return null
            })}
          </ul>
        </section>
        <section className="flex h-full max-h-[600px] w-full max-w-sm flex-col justify-between bg-white p-6">
          <div className="flex flex-col gap-3">
            <h1 className="font-saira text-xl font-semibold text-zinc-700">
              Resumo do pedido
            </h1>
            <Prices name="Subtotal de produtos" value={totalPrice.toString()} />
            <Prices name="Entrega" value="40,00" />
            <hr />
            <Prices
              name="Total"
              value={(totalPrice + 40).toString()}
              className="font-bold text-black"
            />
            <button className="rounded-md bg-green-700 py-3 text-white">
              Finalizar a compra
            </button>
          </div>
          <ul>
            <Links>Ajuda</Links>
            <Links>reembolsos</Links>
            <Links>entregas e frete</Links>
            <Links>trocas e devoluções</Links>
          </ul>
        </section>
      </main>
    </div>
  )
}

function Links({ children }: { children: string }) {
  return <li className="uppercase text-zinc-400 underline">{children}</li>
}

function Prices({ name, value, className }: { [P in string]: string }) {
  return (
    <div
      className={cn(
        'flex justify-between gap-4 text-nowrap text-zinc-500',
        className,
      )}
    >
      <span>{name}</span>
      <span>R$ {value}</span>
    </div>
  )
}

function Product({
  image,
  name,
  description,
  price,
  amount,
  onClick,
}: {
  image: string
  name: string
  description: string
  price: number
  amount: number
  onClick: () => void
}) {
  return (
    <li className="relative flex rounded-xl bg-white">
      <Image
        src={image}
        width={256}
        height={211}
        alt="dada"
        className="rounded-l-xl"
      />
      <div className="flex flex-col justify-between px-8 py-4 text-zinc-600">
        <div className="flex flex-col gap-3">
          <header className="flex justify-between">
            <h2 className="text-xl font-light ">{name}</h2>
            <button onClick={onClick}>
              <Icons.Trash size="24" className="text-red-600"></Icons.Trash>
            </button>
          </header>
          <p className="text-xs">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <Select defaultValue={amount} />
          <span className="font-bold text-black">R$ {price}</span>
        </div>
      </div>
    </li>
  )
}
