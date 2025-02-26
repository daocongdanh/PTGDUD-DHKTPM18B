import { useState } from "react";
import MyTable from "../MyTable/MyTable";

export default function MyComponent() {
  const [data, setData] = useState(null);
  const [result, setResult] = useState([]);
  const input = ["start", "rate", "goal"];
  const handleChange = (type, value) => {
    setData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  const handleLaiKep = (start, rate) => {
    let amout = start * (1 + rate / 100);
    return amout;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const array = [];
    array.push({
      year: new Date().getFullYear(),
      start: data.start,
      rate: data.rate,
      result: handleLaiKep(data.start, data.rate),
    });
    var target = handleLaiKep(data.start, data.rate);
    while (target <= data.goal) {
      const lastResult = array[array.length - 1];
      const newYear = lastResult.year + 1;
      const newStart = lastResult.result;
      const newResult = handleLaiKep(lastResult.result, lastResult.rate);
      target = newResult;
      array.push({
        year: newYear,
        start: newStart,
        rate: data.rate,
        result: newResult,
      });
    }
    setResult(array);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        {input.map((item) => (
          <div key={item} style={{ marginBottom: "10px" }}>
            <label htmlFor={item} style={{ marginRight: "20px" }}>
              {item}:
            </label>
            <input
              onChange={(e) => handleChange(item, parseInt(e.target.value))}
              min={1}
              type="number"
              id={item}
              required
            />
          </div>
        ))}
        <button type="submit">Calculator</button>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MyTable data={result} />
      </div>
    </div>
  );
}
