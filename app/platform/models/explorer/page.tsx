import UsersTable from "@/components/users-table"
import UserForm from "@/components/forms/user-form"

export const dynamic = "force-dynamic"

export default function Explorer() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-4">
          <div className="px-4 text-sm lg:px-6">
            <h2 className="text-2xl font-bold tracking-tight">Users</h2>
            <p className="text-muted-foreground">
              Manage your users and their permissions.
            </p>
          </div>
          <div className="flex gap-2 px-4 lg:px-6">
            <UserForm />
          </div>
          <div className="flex flex-col gap-4 px-4 lg:px-6">
            <UsersTable />
          </div>
        </div>
      </div>
    </div>
  )
}
