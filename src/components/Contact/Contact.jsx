export default function Contact({ name, number, onDelete }) {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}


