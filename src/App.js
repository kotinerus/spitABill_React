import { useState } from "react";
import { Users } from "./UsersComponents/Users";
import { Actions } from "./ActionsComponents/Actions";

export default function App() {
  
  const persons = [
    {
      id: 1,
      name: "Robert",
      img: "https://i.pravatar.cc/512?img=68",
      balance: 0,
    },
    {
      id: 2,
      name: "Sara",
      img: "https://i.pravatar.cc/512?img=29",
      balance: -500,
    },
    {
      id: 3,
      name: "Bob",
      img: "https://i.pravatar.cc/512?img=12",
      balance: 30,
    },
  ];
  const [currUser, setCurrUser] = useState("Robert");
  const [paying, setPaying] = useState(Number(0));
  const [totalBill, setTotalBill] = useState("0");
  const [friends, setFriends] = useState(persons)
  const [addFriend, setAddFriend] = useState(0)
  
  function handleSetAddFriend(){
    setAddFriend(!addFriend)
  }
  function handleNewUser(e) {
    e.preventDefault()
   const name = e.target.querySelector('input').value
   const img = e.target.querySelector('img').src
   setFriends([...persons,{ id: persons.length+1,
    name: name,
    img: img,
    balance: 0,}])
    handleSetAddFriend()
  }

  function handleSetPaying(e) {
    setPaying(e);
  }
  function handleInputBill(e) {
    setTotalBill(e.replace(/^0+/, ""));
  }
  function handlePayment(e){
  e.preventDefault()
  const myHalf = e.target.querySelector('#yourExpense').querySelector('input').value
  let money = 0
  
  if(Number(paying)===0){
     money =  (-(totalBill- myHalf))
  }else{
    money = myHalf
  }
  setFriends(person => person.map( person=>  person.name === currUser? {...person, balance: Number(person.balance)+Number(money)}:person ))
  document.querySelector('#actionContainer').classList.add('hidden')
  }


  return (
    <div className="mainContainer">
      <Users
        onSetCurrUser={setCurrUser}
        onSetTotalBill={handleInputBill}
        onHandleNewUser={handleNewUser}
        persons={friends}
        handleSetAddFriend={handleSetAddFriend}
        addFriend={addFriend}
      />
      <Actions
        currUser={currUser}
        paying={paying}
        onPaying={handleSetPaying}
        totalBill={totalBill}
        onInputBill={handleInputBill}
        handlePayment={handlePayment}
      />
    </div>
  );
}
