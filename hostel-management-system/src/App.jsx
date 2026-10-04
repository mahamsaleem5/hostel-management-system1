import { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ali",
      email: "ali@gmail.com",
      room: "A-101"
    },
    {
      id: 2,
      name: "Sara",
      email: "sara@gmail.com",
      room: "B-202"
    }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const addStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      email,
      room
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
    setRoom("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div>
      <h1>Hostel Management System</h1>

      <h2>Student Registration</h2>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Room Number"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      <h2>Students</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <p>Room: {student.room}</p>

          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;