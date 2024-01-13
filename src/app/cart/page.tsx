'use client'

import Return from '@/components/Return'
import Select from '@/components/Select'
import { cn } from '@/lib/utils'
import { Saira } from 'next/font/google'
import Image from 'next/image'

const saira = Saira({ subsets: ['latin'], weight: '400' })

export default function Page() {
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
              Total (3 produtos) <strong>R$161,00</strong>
            </span>
          </div>
          <ul className="flex flex-col gap-5">
            <Product />
            <Product />
            <Product />
          </ul>
        </section>
        <section className="flex h-full max-h-[600px] w-full max-w-sm flex-col justify-between bg-white p-6">
          <div className="flex flex-col gap-3">
            <h1 className="font-saira text-xl font-semibold text-zinc-700">
              Resumo do pedido
            </h1>
            <Prices name="Subtotal de produtos" value="161,00" />
            <Prices name="Entrega" value="161,00" />
            <hr />
            <Prices
              name="Total"
              value="40,00"
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

function Product() {
  return (
    <li className="relative flex rounded-xl bg-white">
      <Image
        src={
          'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg'
        }
        width={256}
        height={211}
        alt="dada"
        className="rounded-l-xl"
      />
      <div className="flex flex-col justify-between px-8 py-4 text-zinc-600">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-light ">Caneca de cerâmica rústica</h2>
          <p className="text-xs">
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Select defaultValue={1} />
          <span className="font-bold text-black">R$3232</span>
        </div>
      </div>
    </li>
  )
}
