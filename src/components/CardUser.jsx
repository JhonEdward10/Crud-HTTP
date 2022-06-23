import React from 'react'

const CardUser = ({user, setObjectUpdate, deleteUsers,setIsShow, reset}) => {

    const updateUser = ()=> {
        setIsShow(true)
        const obj = {
          password: user.password,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          birthday: user.birthday,
        };
        reset(obj)
        setObjectUpdate(user)
      }

  return (
    <article className="users-list-container">
        <ul>
            <h2><i class="fas fa-user"></i> {user.first_name} {user.last_name}</h2>
            <li className="email"><i class="fas fa-envelope"></i> {user.email}</li>
            <li className="birthday"><i class="fas fa-birthday-cake"></i> {user.birthday} </li>

        </ul>

        <div className="container-buttons">
            <button onClick={()=>deleteUsers(user.id)} className="delete">
              <i class="fa-solid fa-trash-can"></i>
            </button>

            <button onClick={updateUser} className="update">
              <i class="fa-solid fa-file-pen"></i>
            </button>
        </div>
    </article>
  )
}

export default CardUser;