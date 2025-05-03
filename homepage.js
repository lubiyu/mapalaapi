import React, { useState, useEffect } from 'react';

function App() {
  const [view, setView] = useState(null);
  const [data, setData] = useState([]);

  const API_BASE_URL = "http://localhost:5000"; // Replace with your API URL

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  const handleClick = (type) => {
    setView(type);
    fetchData(type);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>University Portal</h1>

      <div>
        <button onClick={() => handleClick('students')} style={{ margin: '10px' }}>
          Students
        </button>
        <button onClick={() => handleClick('subjects')} style={{ margin: '10px' }}>
          Courses
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {view === 'students' && (
          <>
            <h2>Student List ([
        ['id' => 1, 'name' => 'John Doe', 'age' => 20, 'grade' => 'A', 'email' => 'john@example.com'],
        ['id' => 2, 'name' => 'Jane Smith', 'age' => 21, 'grade' => 'B', 'email' => 'jane@example.com'],
        ['id' => 3, 'name' => 'Mike Johnson', 'age' => 19, 'grade' => 'A', 'email' => 'mike@example.com'],
        ['id' => 4, 'name' => 'Sarah Williams', 'age' => 22, 'grade' => 'C', 'email' => 'sarah@example.com'],
        ['id' => 5, 'name' => 'Tom Brown', 'age' => 20, 'grade' => 'B', 'email' => 'tom@example.com']
    ]
    )</h2>
            <ul>
              {data.map((student, index) => (
                <li key={index}>
                  {student.name} — {student.program}
                </li>
              ))}
            </ul>
          </>
        )}

        {view === 'subjects' && (
          <>
            <h2>Courses ([
        ['id' => 1, 'name' => 'Mathematics', 'credits' => 4, 'professor' => 'Dr. Smith', 'room' => '101'],
        ['id' => 2, 'name' => 'Physics', 'credits' => 3, 'professor' => 'Dr. Johnson', 'room' => '202'],
        ['id' => 3, 'name' => 'Chemistry', 'credits' => 4, 'professor' => 'Dr. Williams', 'room' => '303'],
        ['id' => 4, 'name' => 'Biology', 'credits' => 3, 'professor' => 'Dr. Brown', 'room' => '404'],
        ['id' => 5, 'name' => 'Computer Science', 'credits' => 4, 'professor' => 'Dr. Davis', 'room' => '505']
    ];)</h2>
            <ul>
              {data.map((subject, index) => (
                <li key={index}>
                  Year {subject.year}: {subject.subject}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
