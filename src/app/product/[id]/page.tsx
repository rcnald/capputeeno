'use client'

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
    <div className="grid min-h-[calc(100vh-60px)] place-content-center bg-zinc-200 p-7">
      <div className="flex max-w-[1110px] gap-8">
        <Image src={product.image_url} width={640} height={580} alt="" />
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
            <span className="text-xl text-black">R$ 40,00</span>
            <span className="text-xs">
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </span>
            <div className="mt-8 text-zinc-700">
              <h2 className="text-base font-medium uppercase">Descrição</h2>
              <p className="text-sm">{product.description}</p>
            </div>
          </div>
          <button className=" flex justify-center rounded bg-cyan-800 py-2">
            <Icons.Bag size="24" className="text-white" />
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}
