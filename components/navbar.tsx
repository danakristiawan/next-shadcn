"use client"

import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Settings, BellIcon, LogOut, User } from "lucide-react";
import { ThemeSwitch } from "./theme-switch";
import { usePathname } from "next/navigation"
import Link from "next/link";

const Navbar = () => {
    const formatTitle = (text: string) => {
    if (!text) return "Home"
    return text
        .replace(/-/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}
    const pathname = usePathname()
    const lastSegment = pathname.split("/").filter(Boolean).pop() || ""
    const title = formatTitle(lastSegment)

    return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:m-1"
        />
        <h1 className="text-base font-small">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
            <ThemeSwitch/>
            <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:my-2"
            />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="scale-75 grayscale">
                        <AvatarImage src="https://aset-satu.kemenkeu.go.id/api/photo/GetPhotoUrl/8OfoK9jsM0DhPLJFYzCLzQjAtWxBh1iALzwSNJaZgIs" alt="shadcn" />
                        <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="end"
            sideOffset={4}
          >
                    <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src="https://aset-satu.kemenkeu.go.id/api/photo/GetPhotoUrl/8OfoK9jsM0DhPLJFYzCLzQjAtWxBh1iALzwSNJaZgIs" alt="shadcn" />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">John Doe Soeprapto</span>
                        <span className="truncate text-xs text-muted-foreground">
                            john.doe@proto.com
                        </span>
                        </div>
                    </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <Link href="/secondary/profile">
                                <User />
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link href="/secondary/settings">
                                <Settings />
                                Settings
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogOut />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </header>
    );
};

export default Navbar;