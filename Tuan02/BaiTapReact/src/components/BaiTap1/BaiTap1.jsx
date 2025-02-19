import { useState } from "react";

export default function BaiTap1() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("Danh");
  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setResult(name)}>Click</button>
      <p>Hello: {result}</p>
    </div>
  );
}
