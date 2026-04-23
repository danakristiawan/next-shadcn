"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BookOpen, Bot, CameraIcon, ChartBarIcon, CircleHelpIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, FileTextIcon, FolderIcon, House, Import, LayoutDashboardIcon, ListIcon, SearchIcon, Settings2, Settings2Icon, SettingsIcon, SquareTerminal, UsersIcon } from "lucide-react"
import { NavMain } from "./nav-main"
import { NavDocuments } from "./nav-documents"
import { NavPlatform } from "./nav-platform"
import { NavSecondary } from "./nav-secondary"
import Link from "next/link"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://aset-satu.kemenkeu.go.id/api/photo/GetPhotoUrl/9Gocqw58s8pxpQaC7yEVHv8QLqh-AzK23xyCObK-HwQ",
  },
  tasks: [
    {
      title: "Dashboard",
      url: "/tasks/dashboard",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Users",
      url: "/tasks/users",
      icon: (
        <ListIcon
        />
      ),
    },
    {
      title: "Pegawai",
      url: "/tasks/pegawai",
      icon: (
        <ChartBarIcon
        />
      ),
    },
  ],
  platform: [
    {
      title: "Playground",
      url: "#",
      icon: (
        <FolderIcon
        />
      ),
      isActive: false,
      items: [
        {
          title: "Project",
          url: "/platform/playground/project",
        },
        {
          title: "Team Support System",
          url: "/platform/playground/team-support-system",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: (
        <FolderIcon
        />
      ),
      isActive: false,
      items: [
        {
          title: "Explorer",
          url: "/platform/models/explorer",
        },
      ],
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "/documents/data-library",
      icon: (
        <DatabaseIcon
        />
      ),
    },
    {
      name: "Reports",
      url: "/documents/reports",
      icon: (
        <FileChartColumnIcon
        />
      ),
    },
  ],
  secondary: [
    {
      title: "Profile",
      url: "/secondary/profile",
      icon: (
        <UsersIcon
        />
      ),
    },
    {
      title: "Settings",
      url: "/secondary/settings",
      icon: (
        <SettingsIcon
        />
      ),
    },
  ],
}

export function AppSidebar() {
  return (
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5"
              >
                <Link href="/">
                  <House className="!size-5" />
                  <span className="text-base font-semibold">Prototype.</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.tasks} />
          <NavDocuments items={data.documents} />
          <NavPlatform items={data.platform} />
          <NavSecondary items={data.secondary} className="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
          <div className="flex justify-center items-center">
            <small className="text-xs">Powered By Prototype.</small>
          </div>
          {/* <NavUser user={data.user} /> */}
        </SidebarFooter>
      </Sidebar>
  )
}