import './usersStyles.css';
export function ButtonSelect({ person, onHandleNewUser }) {
  return (
    <button
      
      className="buttonSelect"
      onClick={(e) => onHandleNewUser(person.id)}
    >
      SELECT
    </button>
  );
}
