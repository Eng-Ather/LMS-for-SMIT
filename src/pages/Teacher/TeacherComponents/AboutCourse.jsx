import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { AuthContext } from '../../../context/context';

const columns = [
  {
    title: 'Course Name',
    dataIndex: 'courseName',
    sorter: (a, b) => a.courseName.length - b.courseName.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Course ID',
    dataIndex: 'courseId',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Topics',
    dataIndex: 'topics',
    render: (topics) => (
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    ),
  },
];

const CourseTable = () => {
  const [data, setData] = useState([]); // Table data source
  const [loading, setLoading] = useState(true); // Loading state
  const { user } = useContext(AuthContext);

     const cdata = user;
  useEffect(() => {
    const fetchData = async () => {

      try {
        const courseId =  cdata.userId;; // Replace with dynamic ID if needed
        const response = await axios.get(`http://localhost:5000/course-outline/${courseId}`);

        if (response.data && response.data.course) {
          const courseData = response.data.course;
          setData([
            {
              key: courseData.courseId,
              courseName: courseData.courseName,
              courseId: courseData.courseId,
              description: courseData.description,
              topics: courseData.topics || [],
            },
          ]);
        }
      } catch (error) {
        console.error('Error fetching course data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('Table params:', pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      onChange={onChange}
      pagination={{ pageSize: 5 }}
    />
  );
};

export default CourseTable;
