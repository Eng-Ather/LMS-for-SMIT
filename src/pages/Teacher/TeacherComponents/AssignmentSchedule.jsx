import React, { useState } from 'react';

const branches = ['Mathematics', 'Science', 'English', 'History', 'Computer Science'];
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

export default function AssignmentSchedule() {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');

  const [branchFilter, setBranchFilter] = useState('');
  const [teacherFilter, setTeacherFilter] = useState('');

  const handleAddAssignment = () => {
    // Ensure title and branch are entered before adding
    if (!newAssignment.title || !newAssignment.branch || !newAssignment.teacher) {
      setError('Title, Branch, and Teacher are required!');
      return;
    }

    setAssignments([...assignments, { ...newAssignment, id: Date.now().toString() }]);
    setNewAssignment({});
    setIsModalOpen(false);
    setError('');
  };

  // Filter assignments based on branch and teacher
  const filteredAssignments = assignments.filter((assignment) => {
    const matchesBranch = branchFilter ? assignment.branch === branchFilter : true;
    const matchesTeacher = teacherFilter ? assignment.teacher === teacherFilter : true;
    return matchesBranch && matchesTeacher;
  });

  return (
    <div className="min-h-screen p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center">Teacher Assignment List</h1>

      {/* Filter Section */}
      <div className="mb-6 flex justify-between">
        <div>
          <label htmlFor="branch-filter" className="mr-2">Filter by Branch:</label>
          <select
            id="branch-filter"
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="teacher-filter" className="mr-2">Filter by Teacher:</label>
          <select
            id="teacher-filter"
            value={teacherFilter}
            onChange={(e) => setTeacherFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">All</option>
            {/* Dynamically populate teacher options */}
            {[...new Set(assignments.map((a) => a.teacher))].map((teacher) => (
              <option key={teacher} value={teacher}>{teacher}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Assignment List (Table Format) */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2 bg-gray-100">Teacher Name</th>
              <th className="border px-4 py-2 bg-gray-100">Branch</th>
              <th className="border px-4 py-2 bg-gray-100">Assignment Name</th>
              <th className="border px-4 py-2 bg-gray-100">Description</th>
              <th className="border px-4 py-2 bg-gray-100">Due Date</th>
              <th className="border px-4 py-2 bg-gray-100">Submission Link</th>
              <th className="border px-4 py-2 bg-gray-100">File</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssignments.map((assignment) => (
              <tr key={assignment.id}>
                <td className="border px-4 py-2">{assignment.teacher}</td>
                <td className="border px-4 py-2">{assignment.branch}</td>
                <td className="border px-4 py-2">{assignment.title}</td>
                <td className="border px-4 py-2">{assignment.description || 'N/A'}</td>
                <td className="border px-4 py-2">{assignment.dueDate || 'N/A'}</td>
                <td className="border px-4 py-2">
                  {assignment.link ? (
                    <a href={assignment.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      {assignment.link}
                    </a>
                  ) : 'N/A'}
                </td>
                <td className="border px-4 py-2">
                  {assignment.file ? (
                    <a href={URL.createObjectURL(assignment.file)} download className="text-blue-500">
                      Download File
                    </a>
                  ) : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
        >
          Add Assignment
        </button>
      </div>

      {/* Modal for Adding Assignment */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl mb-4">Add New Assignment</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            {/* Assignment Title */}
            <input
              type="text"
              placeholder="Assignment Title"
              value={newAssignment.title || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            {/* Teacher Name */}
            <input
              type="text"
              placeholder="Teacher Name"
              value={newAssignment.teacher || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, teacher: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            {/* Branch Selection */}
            <select
              value={newAssignment.branch || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, branch: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            >
              <option value="">Select Branch</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>

            {/* Assignment Description */}
            <textarea
              placeholder="Assignment Description (Optional)"
              value={newAssignment.description || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            {/* Due Date */}
            <input
              type="date"
              value={newAssignment.dueDate || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            {/* Submission Link (Netlify or Vercel) */}
            <input
              type="url"
              placeholder="Submission Link (Optional)"
              value={newAssignment.link || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, link: e.target.value })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            {/* File Upload (Optional) */}
            <input
              type="file"
              onChange={(e) => setNewAssignment({ ...newAssignment, file: e.target.files[0] })}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />

            <div className="flex justify-between">
              <button
                onClick={handleAddAssignment}
                className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600"
              >
                Add
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
