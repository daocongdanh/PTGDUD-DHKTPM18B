import { useRef, useState } from "react";
import List from "../List/List";

export default function MyComponent() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    { id: Date.now(), name: "Nguyen Van A", age: 20 },
    { id: Date.now(), name: "Nguyen Van B", age: 21 },
  ]);
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => {
      return [user, ...prev];
    });
    formRef.current.reset();
    setUser(null);
  };
  const handleDelete = (id) => {
    setUsers((prev) => {
      return prev.filter((u) => u.id !== id);
    });
  };
  return (
    <div>
      <p>Hello world</p>
      <div style={{ color: "red", fontWeight: "bold" }}>
        <p>My name is: {user?.name} </p>
        <p>Age: {user?.age} </p>
        <p>Address: IUH</p>
        <form ref={formRef} action="" onSubmit={handleSubmit}>
          <div>
            <span>Your name:</span>
            <input
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, id: Date.now(), name: e.target.value };
                })
              }
              required
              type="text"
              name=""
              id=""
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <span>Your Age:</span>
            <input
              onChange={(e) =>
                setUser((prev) => {
                  return { ...prev, id: Date.now(), age: e.target.value };
                })
              }
              required
              type="number"
              name=""
              id=""
            />
          </div>
          <button>Submit</button>
        </form>
        <List users={users} handleDelete={handleDelete} />
      </div>
    </div>
  );
}
