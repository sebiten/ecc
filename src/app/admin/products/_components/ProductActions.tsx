import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router"
import { useTransition } from "react"

export function ActiveToggleDropdownItem({
    id,
    isAvailableForPurchase,
  }: {
    id: string
    isAvailableForPurchase: boolean
  }) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return
      <DropdownMenuItem>

      </DropdownMenuItem>

  }