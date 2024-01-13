'use client'

import Return from '@/components/Return'
import { sections } from '@/lib/data'
import { fakeFetchProduct } from '@/lib/utils'
import { Icons } from '@/utils/Icons'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const product = fakeFetchProduct(params.id)
  if (!product) {
    notFound()
  }
  return (
    <main className="grid h-full place-content-center gap-5 bg-zinc-200 p-7">
      <Return />
      <section className="flex max-w-[1110px] gap-8">
        <Image src={product.image_url} width={640} height={580} alt="product" />
        <div className="flex flex-col justify-between gap-3">
          <div className=" flex flex-col gap-3 text-zinc-700">
            <span className="text-base capitalize">
              {
                sections.find(
                  (section) => section.category === product.category,
                )?.name
              }
            </span>
            <h1 className="text-4xl">{product.name}</h1>
            <span className="text-xl font-bold text-black">
              R$ {product.price_in_cents}
            </span>
            <span className="text-xs">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </span>
            <div className="mt-8 text-zinc-700">
              <h2 className="text-base font-medium uppercase">Descrição</h2>
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
          <button className=" flex justify-center gap-4 rounded bg-cyan-800 py-2 text-white">
            <Icons.Bag size="24" />
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    </main>
  )
}
