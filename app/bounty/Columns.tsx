"use client"

import { ColumnDef } from "@tanstack/react-table"
import { BountyType } from "./page"

export const columns: ColumnDef<BountyType>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className="max-w-2xl truncate">{row.getValue("title")}</div>
    }
  },
  {
    accessorKey: "techStack",
    header: "Tech Stack",
  },
  {
    accessorKey: "threadLink",
    header: "Twitter Thread",
  },
  {
    accessorKey: "githubRepo",
    header: "Github",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "interestedPeople",
    header: "Interested People",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
]
