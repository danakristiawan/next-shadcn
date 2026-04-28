import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getUsers } from "@/server/users"
import { Button } from "./ui/button"

export default async function UsersTable() {
  const users = await getUsers()
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>email</TableHead>
          <TableHead>username</TableHead>
          <TableHead>created_at</TableHead>
          <TableHead>updated_at</TableHead>
          <TableHead>action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.createdAt.toLocaleString()}</TableCell>
            <TableCell>{user.updatedAt.toLocaleString()}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
