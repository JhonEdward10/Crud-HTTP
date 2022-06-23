import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from './components/CardUser'
import Form from './components/Form'
import { useForm } from 'react-hook-form'

const URL = 'https://users-crud1.herokuapp.com/users/';

function App() {

  const [users, setUsers] = useState()
  const [isShow, setIsShow] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()
  const { register, handleSubmit, reset } = useForm();

  const getAllUsers = () => {
    axios.get(URL)
    .then((res)=> setUsers(res.data))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers])


  const deleteUsers = id => {
    axios.delete(`${URL}${id}/`)
    .then((res) => console.log(res.data)
    ,getAllUsers())
    .catch(error => console.log(error))
  }


  const createUsers = newUser => {
    axios.post(`${URL}`, newUser)
    .then(res=> console.log(res.data),
    getAllUsers())
    .catch(error => console.log(error))
  }

  const update = (id,updateUser) =>{

    axios.patch(`${URL}${id}/`,updateUser)
    .then((res)=>console.log(res.data),
    getAllUsers(),
    setIsShow(false))
    .catch(error=>console.log(error))
}

const showForm = ()=> {
  const obj = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: "",
  }

  reset(obj)
  setIsShow(!isShow)
}

  return (
    <div className="App">

      <div className='formulario'>

        <div className='container-buttonshow'>
          <button onClick={showForm} className='showbutton'>{isShow ? "Hide Form" : "Create User"}</button>
        </div>

        <div className='user-form'>
        {
          isShow && <Form 
          createUsers={createUsers} 
          getAllUsers={getAllUsers} 
          update={update}
          setObjectUpdate={setObjectUpdate}
          setIsShow={setIsShow}
          objectUpdate={objectUpdate}
          register={register}
          handleSubmit={handleSubmit}
          reset={reset}
          />
        }
        </div>
      </div>

      <div className='users-cards'>
        {
          users?.map(user => (
          <CardUser         
          key={user.id}
          user= {user}
          deleteUsers={deleteUsers}
          setObjectUpdate={setObjectUpdate}
          setIsShow={setIsShow}
          reset={reset}
          />
          )
          )
          }  

      </div>

    </div>
  )
}

export default App
