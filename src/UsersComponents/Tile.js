import { ButtonSelect } from "./ButtonSelect";
import './usersStyles.css';

export function Tile({ person, onSetCurrUser }) {
  const personBalance = person.balance !== 0;

  return (
    <div className="tileContainer">
      <img src={person.img} alt="personImg" />
      <div className="tileContainer-text">
        <h2>{person.name}</h2>
        {personBalance && (
          <p style={person.balance < 0 ? { color: "green" } : { color: "red" }}>
            {person.balance > 0
              ? `You owe ${person.name} ${person.balance}$`
              : `${person.name} owe you ${Math.abs(person.balance)}$`}
          </p>
        )}
      </div>
      <ButtonSelect person={person} onHandleNewUser={onSetCurrUser} />
    </div>
  );
}
