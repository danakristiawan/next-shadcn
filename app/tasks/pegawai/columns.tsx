"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Hris = {
  idPegawai: string;
  nama: string;
  nip18: string;
  email: string;
  namaSatker: string;
  jabatan: Jabatan[];
  pangkat: Pangkat;
};
export type Jabatan = {
  namaJabatan: string;
};
export type Pangkat = {
  kodeGolongan: string;
  namaPangkat: string;
};

export const columns: ColumnDef<Hris>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama" />
    ),
  },
  {
    accessorKey: "nip18",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nip" />
    ),
  },
  {
    id: "pangkat",
    accessorFn: (row) =>
      row.pangkat
        ? `${row.pangkat.namaPangkat} (${row.pangkat.kodeGolongan})`
        : "-",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pangkat" />
    ),
  },
  {
    id: "jabatan",
    accessorFn: (row) => row.jabatan?.map((j) => j.namaJabatan).join(", "),
    header: "Jabatan",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "namaSatker",
    header: "Satker",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const hris = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(hris.idPegawai)}
            >
              Copy hris ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
