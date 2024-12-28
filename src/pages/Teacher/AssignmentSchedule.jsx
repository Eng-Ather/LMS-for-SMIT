
import  useState  from 'react'

const branches = ['Mathematics', 'Science', 'English', 'History', 'Computer Science']
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']

export default function AssignmentSchedule() {
  const [assignments, setAssignments] = useState([])
  const [newAssignment, setNewAssignment] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddAssignment = () => {
    if (newAssignment.title && newAssignment.branch && newAssignment.time) {
      setAssignments([...assignments, { ...newAssignment, id: Date.now().toString() }])
      setNewAssignment({})
      setIsModalOpen(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
        Teacher Assignment Schedule
      </h1>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Branch / Time</th>
              {timeSlots.map((time) => (
                <th key={time} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>{time}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr key={branch}>
                <td style={{ border: '1px solid #ddd', padding: '8px', fontWeight: 'bold' }}>{branch}</td>
                {timeSlots.map((time) => {
                  const assignment = assignments.find(a => a.branch === branch && a.time === time)
                  return (
                    <td key={`${branch}-${time}`} style={{ border: '1px solid #ddd', padding: '8px' }}>
                      {assignment ? (
                        <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: '4px', borderRadius: '4px' }}>
                          {assignment.title}
                        </div>
                      ) : (
                        <div style={{ height: '24px' }}></div>
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: '#008CBA',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add Assignment
        </button>
      </div>
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '300px'
          }}>
            <h2 style={{ marginBottom: '10px' }}>Add New Assignment</h2>
            <input
              type="text"
              placeholder="Assignment Title"
              value={newAssignment.title || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
              style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box' }}
            />
            <select
              value={newAssignment.branch || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, branch: e.target.value })}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            >
              <option value="">Select Branch</option>
              {branches.map((branch) => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
            <select
              value={newAssignment.time || ''}
              onChange={(e) => setNewAssignment({ ...newAssignment, time: e.target.value })}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            >
              <option value="">Select Time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                onClick={handleAddAssignment}
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Add
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
