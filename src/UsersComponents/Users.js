import { useState } from "react";
import { Tile } from "./Tile";
import './usersStyles.css';

export function Users({addFriend, handleSetAddFriend, onSetCurrUser, onSetTotalBill,persons, onHandleNewUser }) {
  
  const [name, setName] = useState('')
  
  function handleSetCurrUser(id) {
    onSetTotalBill("0");
    const person = persons.filter((obj) => {
      return obj.id === id;
    });

    onSetCurrUser(person[0].name);
  }
 
  function handleSetName(e){
    setName(e)
  }
  
  return (
    <div className="usersContainer">
      
      {persons.map((person) => (
        <Tile
          person={person}
          key={person.id}
          onSetCurrUser={handleSetCurrUser}
        />
      ))}
      <ButtonAdd  onHandleNewUser={onHandleNewUser} addFriend={addFriend} handleSetAddFriend={handleSetAddFriend} name={name} handleSetName={handleSetName}/>
    </div>
  );
}
function ButtonAdd({onHandleNewUser, handleSetAddFriend,addFriend, name, handleSetName}){
 return( <>
 {addFriend?(
    <form className="tileContainer newUser" onSubmit={e => onHandleNewUser(e)}>
      <img src="https://i.pravatar.cc/512"></img>
      <input type="text" value={name} onChange={e=>handleSetName(e.target.value)} ></input>
      <button>ADD</button>
    </form>)
  : <button  className="buttonAdd" onClick={handleSetAddFriend}>ADD FRIEND</button>}
 

 </>)
}
