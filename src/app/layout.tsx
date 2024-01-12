import Cart from '@/components/Cart'
import Search from '@/components/Search'
import type { Metadata } from 'next'
import { Saira, Saira_Stencil_One as SairaStencilOne } from 'next/font/google'
import './globals.css'

const sairaStencilOne = SairaStencilOne({ subsets: ['latin'], weight: '400' })
const saira = Saira({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'A E-commerce coffe based',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <header className="flex justify-between gap-6 bg-white px-7">
          <span
            className={`${sairaStencilOne.className} text-4.25xl text-zinc-700`}
          >
            capputeeno
          </span>
          <div className="flex w-full max-w-96 items-center gap-6">
            <Search placeholder="Procurando por algo específico?" />
            <Cart />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
