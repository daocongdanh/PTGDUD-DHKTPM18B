import "./style.css";
export default function MyTable(props) {
  const { data } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Start</th>
            <th>Rate</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.start.toFixed(2)}</td>
                <td>{item.rate}</td>
                <td>{item.result.toFixed(2)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
