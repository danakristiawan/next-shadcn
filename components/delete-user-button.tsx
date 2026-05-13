"use client"

import { deleteUser } from "@/server/users"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { useState } from "react"
import { Loader2 } from "lucide-react"

export default function DeleteUserButton({ id }: { id: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  async function handleDelete() {
    try {
      setIsLoading(true)
      await deleteUser(id)
      toast.success("User deleted successfully!")
    } catch (error) {
      console.error("Error deleting user:", error)
      toast.error("Failed to delete user.")
    } finally {
      setIsOpen(false)
      setIsLoading(false)
      router.refresh()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <Button
          variant="destructive"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Delete User"
          )}
        </Button>
      </DialogContent>
    </Dialog>
  )
}
