import Detail from "../Detail/Detail";

export default function List(props) {
  const { users, handleDelete } = props;
  return (
    <div>
      {users.length > 0 &&
        users.map((user, index) => {
          return <Detail key={index} user={user} handleDelete={handleDelete} />;
        })}
    </div>
  );
}
