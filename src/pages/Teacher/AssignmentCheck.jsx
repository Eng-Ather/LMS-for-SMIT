import { useState } from "react";

const AssignmentChecker = () => {
  const [teacherName, setTeacherName] = useState("Mr. Bilal");
  const [branchFilter, setBranchFilter] = useState("");
  const [courseFilter, setCourseFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState(""); // Added time filter state

  // Extended array to include 30 students
  const assignments = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    rollNumber: `A${String(i + 1).padStart(3, "0")}`,
    branch: ["Gulshan Branch", "Liaquatabad Branch", "Malir Branch", "Sher Shah Branch"][
      i % 4
    ],
    course: [
      "Web Development",
      "Graphic Design",
      "Coding",
      "Chatbot",
      "Python",
      "Video Editing",
      "Photo Editing",
    ][i % 7],
    submissionTime: `2023-12-28T${String(10 + (i % 10)).padStart(2, "0")}:${
      (i % 6) * 10
    }:00`,
    githubRepo: `https://github.com/student${i + 1}/project-repo`,
    theoryRepo: `https://theory.example.com/student${i + 1}/project-repo`,
  }));

  const branches = [...new Set(assignments.map((assignment) => assignment.branch))];
  const courses = [...new Set(assignments.map((assignment) => assignment.course))];

  const timeRanges = [
    { label: "5 AM - 7 AM", value: "05:00-07:00" },
    { label: "7 AM - 9 AM", value: "07:00-09:00" },
    { label: "9 AM - 11 AM", value: "09:00-11:00" },
    { label: "11 AM - 1 PM", value: "11:00-13:00" },
    { label: "1 PM - 3 PM", value: "13:00-15:00" },
    { label: "3 PM - 5 PM", value: "15:00-17:00" },
    { label: "5 PM - 7 PM", value: "17:00-19:00" },
    { label: "7 PM - 9 PM", value: "19:00-21:00" },
    { label: "9 PM - 11 PM", value: "21:00-23:00" },
    { label: "Night", value: "00:00-05:00" },
  ];

  const filteredAssignments = assignments.filter((assignment) => {
    const assignmentTime = new Date(assignment.submissionTime);
    const assignmentHour = assignmentTime.getHours();
    const assignmentMinutes = assignmentTime.getMinutes();
    const timeFilterRange = timeFilter ? timeFilter.split("-") : null;

    const isTimeInRange =
      timeFilterRange &&
      assignmentHour >= parseInt(timeFilterRange[0]) &&
      (assignmentHour < parseInt(timeFilterRange[1]) ||
        (assignmentHour === parseInt(timeFilterRange[1]) &&
          assignmentMinutes === 0));

    return (
      (!branchFilter || assignment.branch === branchFilter) &&
      (!courseFilter || assignment.course === courseFilter) &&
      (!timeFilter || isTimeInRange)
    );
  });

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        width: "100%",
        padding: "20px",
        backgroundColor: "#f9fdf9", // Light green background
      }}
    >
      {/* Header Section */}
      <header
        style={{
          marginBottom: "20px",
          textAlign: "center",
          backgroundColor: "#f0faff", // Light blue background
          padding: "20px",
          borderRadius: "10px", // Curvy corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#007acc", // Blue title
            marginBottom: "20px",
          }}
        >
          Assignment Checker
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Allows flexibility for smaller screens
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* Teacher Name Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#ffffff", // White background
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
          >
            <label
              htmlFor="teacherName"
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#006400", // Dark green text
              }}
            >
              Teacher Name:
            </label>
            <input
              id="teacherName"
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "16px",
                width: "200px",
              }}
            />
          </div>

          {/* Branch Filter */}
          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "#ffffff", // White background
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
          >
            <option value="">Filter by Branch</option>
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>

          {/* Course Filter */}
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "#ffffff", // White background
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
          >
            <option value="">Filter by Course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>

          {/* Time Filter */}
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              backgroundColor: "#ffffff", // White background
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow
            }}
          >
            <option value="">Filter by Time</option>
            {timeRanges.map((timeRange) => (
              <option key={timeRange.value} value={timeRange.value}>
                {timeRange.label}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ marginTop: "20px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "#007acc", // Blue subheading
          }}
        >
          List of Students for {courseFilter || "All Courses"} in{" "}
          {branchFilter || "All Branches"} at{" "}
          {timeFilter
            ? timeRanges.find((range) => range.value === timeFilter)?.label
            : "All Times"}
        </h2>
        {filteredAssignments.length > 0 ? (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#e0f7fa" }}> {/* Light blue header */}
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "2px solid #007acc" }}>Name</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "2px solid #007acc" }}>Roll Number</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "2px solid #007acc" }}>Branch</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "2px solid #007acc" }}>Course</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "2px solid #007acc" }}>Submission Time</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "2px solid #007acc" }}>GitHub Repo</th>
                <th style={{ padding: "10px", textAlign: "left", borderBottom: "2px solid #007acc" }}>Theory Repo</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssignments.map((assignment, index) => (
                <tr
                  key={assignment.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f0fff0" : "#e6ffe6", // Alternating light green rows
                  }}
                >
                  <td style={{ padding: "10px" }}>{assignment.name}</td>
                  <td style={{ padding: "10px" }}>{assignment.rollNumber}</td>
                  <td style={{ padding: "10px" }}>{assignment.branch}</td>
                  <td style={{ padding: "10px" }}>{assignment.course}</td>
                  <td style={{ padding: "10px" }}>{new Date(assignment.submissionTime).toLocaleString()}</td>
                  <td style={{ padding: "10px" }}>
                    <a
                      href={assignment.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#007acc" }} // Blue links
                    >
                      GitHub Link
                    </a>
                  </td>
                  <td style={{ padding: "10px" }}>
                    <a
                      href={assignment.theoryRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#007acc" }} // Blue links
                    >
                      Theory Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ fontSize: "18px", color: "#777", textAlign: "center" }}>
            No students found for the selected branch, course, or time.
          </p>
        )}
      </section>
    </div>
  );
};

export default AssignmentChecker;
