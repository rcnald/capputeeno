import { cn } from '@/lib/utils'
import { Icons } from '@/utils/Icons'
import { useRouter } from 'next/navigation'

export default function Return({ className }: { className?: string }) {
  const router = useRouter()
  return (
    <button
      onClick={router.back}
      className={cn(
        'flex w-fit items-center gap-2 text-lg font-medium transition-all hover:text-zinc-400',
        className,
      )}
    >
      <Icons.Return size="24" /> Voltar
    </button>
  )
}
