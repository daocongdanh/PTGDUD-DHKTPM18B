export default function Button(props) {
  const { Icon, title, color, bg } = props;

  return (
    <div>
      <button
        style={{
          color: color,
          backgroundColor: bg,
        }}
      >
        <Icon />
        {title}
      </button>
    </div>
  );
}
