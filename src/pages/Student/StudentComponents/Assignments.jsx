'use client'

import React, { useState } from "react"
import Modal from "./Modal.jsx"

// Button component
const Button = ({ children, className, variant, size, ...props }) => {
  const baseClass = "px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantClass = variant === "ghost" ? "text-gray-600 hover:bg-gray-100" : "bg-indigo-500 text-white hover:bg-indigo-600"
  const sizeClass = size === "icon" ? "p-2" : ""
  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Input component
const Input = ({ className, ...props }) => {
  return <input className={`border rounded px-3 py-2 ${className}`} {...props} />
}

// Table components
const Table = ({ children }) => <table className="min-w-full divide-y divide-gray-200">{children}</table>
const TableHeader = ({ children }) => <thead className="bg-gray-50">{children}</thead>
const TableBody = ({ children }) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>
const TableRow = ({ children }) => <tr>{children}</tr>
const TableHead = ({ children, className }) => <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>{children}</th>
const TableCell = ({ children }) => <td className="px-6 py-4 whitespace-nowrap">{children}</td>

// Tabs components
const Tabs = ({ children, defaultValue, className }) => {
  return <div className={`border-b border-gray-200 ${className}`}>{children}</div>
}
const TabsList = ({ children }) => <nav className="-mb-px flex space-x-8" aria-label="Tabs">{children}</nav>
const TabsTrigger = ({ children, value }) => {
  return (
    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
      {children}
    </a>
  )
}

// Checkbox component
const Checkbox = ({ checked, onCheckedChange }) => {
  return (
    <input
      type="checkbox"
      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
    />
  )
}

// Dropdown components
const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, setIsOpen })
      )}
    </div>
  )
}
const DropdownMenuTrigger = ({ children, isOpen, setIsOpen }) => {
  return React.cloneElement(children, {
    onClick: () => setIsOpen(!isOpen),
    'aria-expanded': isOpen
  })
}
const DropdownMenuContent = ({ children, isOpen, align = "right" }) => {
  if (!isOpen) return null
  return (
    <div className={`origin-top-${align} absolute ${align}-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        {children}
      </div>
    </div>
  )
}
const DropdownMenuItem = ({ children }) => {
  return (
    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
      {children}
    </a>
  )
}

// Icon components
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
)
const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)
const HelpCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const MoreHorizontalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>
)

// Sample data
const assignments = [
  {
    id: 1,
    title: "Introduction to Statistics and Graph...",
    date: "June 11, 2024 10:51 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 2,
    title: "Measures of Central Tendency and Sprea...",
    date: "June 11, 2024 10:48 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 3,
    title: "Structure and Function of Cell...",
    date: "June 11, 2024 10:46 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 2,
    title: "Measures of Central Tendency and Sprea...",
    date: "June 11, 2024 10:48 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 2,
    title: "Measures of Central Tendency and Sprea...",
    date: "June 11, 2024 10:48 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 2,
    title: "Measures of Central Tendency and Sprea...",
    date: "June 11, 2024 10:48 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 2,
    title: "Measures of Central Tendency and Sprea...",
    date: "June 11, 2024 10:48 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 2,
    title: "Measures of Central Tendency and Sprea...",
    date: "June 11, 2024 10:48 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  {
    id: 2,
    title: "Measures of Central Tendency and Sprea...",
    date: "June 11, 2024 10:48 AM",
    author: "Steve@myinstitute.com",
    status: "Publish"
  },
  // Add more sample data as needed
]

export default function AssignmentsPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [selectedItems, setSelectedItems] = useState([])

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(assignments.map(a => a.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (id, checked) => {
    if (checked) {
      setSelectedItems([...selectedItems, id])
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id))
    }
  }

  return (
    <>
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Assignments</h1>
        <Modal/>
      </div>

      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="submitted">submitted</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="Rejected">Rejected</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative">
          
          <Input
            placeholder="Search Assignment"
            className="pl-8 w-[250px]"
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Checkbox
                checked={selectedItems.length === assignments.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell>
                <Checkbox
                  checked={selectedItems.includes(assignment.id)}
                  onCheckedChange={(checked) => handleSelectItem(assignment.id, checked)}
                />
              </TableCell>
              <TableCell>{assignment.title}</TableCell>
              <TableCell>{assignment.date}</TableCell>
              <TableCell>{assignment.author}</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {assignment.status}
                </span>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    

      
      
      </>
  )
}

