export default function Detail(props) {
  const { user, handleDelete } = props;

  const handleRemove = () => handleDelete(user?.id);
  return (
    <div style={{ color: "blueviolet" }}>
      <p>User name is: {user?.name}</p>
      <p>User Age: {user?.age}</p>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
}
