'use client'

import React, { useState } from "react"

// ... (previous component definitions remain unchanged)

export default function AssignmentsPage() {
  const [selectedTab, setSelectedTab] = useState("all")
  const [selectedItems, setSelectedItems] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [githubLink, setGithubLink] = useState('')
  const [deployedLink, setDeployedLink] = useState('')

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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ githubLink, deployedLink })
    setIsModalOpen(false)
    setGithubLink('')
    setDeployedLink('')
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
    
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={() => setIsModalOpen(true)}
        >
          Submit New Assignment
        </button>
      </div>

      {/* ... (rest of the existing code remains unchanged) */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Submit New Assignment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">
                  GitHub Repo Link
                </label>
                <input
                  type="url"
                  id="githubLink"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="https://github.com/yourusername/your-repo"
                />
              </div>
              <div>
                <label htmlFor="deployedLink" className="block text-sm font-medium text-gray-700">
                  Deployed Assignment Link
                </label>
                <input
                  type="url"
                  id="deployedLink"
                  value={deployedLink}
                  onChange={(e) => setDeployedLink(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="https://your-deployed-assignment.com"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

