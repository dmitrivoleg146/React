import React from 'react'

const List = (props) => {
    const names = ["Pedro", "Jake", "Jessica", "Mika", "Dustin", "Lukas"];
    let users= [
        {name:"Pedro", age:22},
        {name:"Oleh", age:20},
        {name:"Julliet", age:29}
    ];
    let newUsers=[
       {game:"Football", time:[12, 17]},
       {game:"Soccer", time:[34,10]}
    ];

    

  return (
    <div>
        {props.name} {props.age}
        {names.map((name,key)=>{
            return <h1 key={key}>{name}</h1>
        })}
        {users.map((user,key)=>{
            return <h1 key={key}>{user.name} - {user.age}</h1>
        })}
        {newUsers.map((userNew,key)=>{
            return <div key={key}>{userNew.game} - {userNew.time[0]}</div>
        })}
    </div>
  )
}

export default List