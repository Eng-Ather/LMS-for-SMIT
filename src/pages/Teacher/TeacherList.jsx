import React, { useState } from 'react';

const TeacherList = () => {
  const [filter, setFilter] = useState('');

  // Mock data for teachers
  const teachers = [
    { id: 1, name: "Dr. Smith", field: "IT", branch: "Main Campus", timing: "9:00 AM - 5:00 PM" },
    { id: 2, name: "Prof. Johnson", field: "Cybersecurity", branch: "Downtown", timing: "10:00 AM - 6:00 PM" },
    { id: 3, name: "Ms. Williams", field: "IT", branch: "West Wing", timing: "8:00 AM - 4:00 PM" },
    { id: 4, name: "Mr. Brown", field: "Cybersecurity", branch: "Main Campus", timing: "11:00 AM - 7:00 PM" },
    { id: 5, name: "Dr. Davis", field: "IT", branch: "East Wing", timing: "9:30 AM - 5:30 PM" },
  ];

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(filter.toLowerCase()) ||
    teacher.field.toLowerCase().includes(filter.toLowerCase()) ||
    teacher.branch.toLowerCase().includes(filter.toLowerCase()) ||
    teacher.timing.toLowerCase().includes(filter.toLowerCase())
  );

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#e6f3ff', // Light blue background
      borderRadius: '10px',
    },
    header: {
      backgroundColor: '#0066cc', // Darker blue for header
      color: 'white',
      padding: '20px',
      borderRadius: '10px 10px 0 0',
    },
    title: {
      margin: '0',
      fontSize: '24px',
    },
    filterInput: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
      borderRadius: '5px',
      border: '1px solid #0066cc',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    th: {
      backgroundColor: '#00cc66', // Light green for table header
      color: 'white',
      padding: '12px',
      textAlign: 'left',
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #e6f3ff',
    },
    evenRow: {
      backgroundColor: '#f0f8ff', // Very light blue for even rows
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Teacher List</h1>
      </header>
      <input
        type="text"
        placeholder="Filter by name, field, branch, or timing"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={styles.filterInput}
      />
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Field</th>
            <th style={styles.th}>Branch</th>
            <th style={styles.th}>Timing</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((teacher, index) => (
            <tr key={teacher.id} style={index % 2 === 0 ? styles.evenRow : {}}>
              <td style={styles.td}>{teacher.name}</td>
              <td style={styles.td}>{teacher.field}</td>
              <td style={styles.td}>{teacher.branch}</td>
              <td style={styles.td}>{teacher.timing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;

