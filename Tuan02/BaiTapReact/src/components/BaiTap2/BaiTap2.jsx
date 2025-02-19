import { useState } from "react";

export default function BaiTap2() {
  const [param, setParam] = useState({ a: 1, b: 1 });
  const [sum, setSum] = useState(2);

  const handleClick = () => {
    setSum(param.a + param.b);
  };
  return (
    <div>
      <input
        type="number"
        min={1}
        defaultValue={1}
        onChange={(e) => setParam({ ...param, b: parseInt(e.target.value) })}
      />
      <br />
      <input
        type="number"
        min={1}
        defaultValue={1}
        onChange={(e) => setParam({ ...param, a: parseInt(e.target.value) })}
      />
      <br />
      <button onClick={handleClick}>Tính tổng</button>
      <p>Result : {sum}</p>
    </div>
  );
}
