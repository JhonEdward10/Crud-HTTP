import React from 'react'


const Form = ({createUsers, getAllUsers, update, objectUpdate,setObjectUpdate,register,handleSubmit,reset,setIsShow}) => {
  
    const defaultValue = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: "",
      }; 

    const submit = (data) => {
        if (objectUpdate?.id !== undefined) {
            update(objectUpdate.id, data)
            setObjectUpdate("")
            getAllUsers()
        }else{
            createUsers(data);
            getAllUsers()
          }

          reset(defaultValue);
          setIsShow(false)
        };

  return (

    <form className='form' onSubmit={handleSubmit(submit)}>
        <h2>New User</h2>
        <div>
            <div className="input">
                <label htmlFor="name" className="form-label">
                    <i class="fas fa-user"></i>
                </label>
                <span className="form-line"> </span>
                <input type="text" id="name" className="form-input" placeholder="First Name" {...register("first_name")} />
                <span className="form-line">  </span>
                <input type="text" id="last-name" className="form-input" placeholder="Last Name" {...register("last_name")} />
            </div>

            <div className="input">
                <label htmlFor="email" className="form-label">
                    <i class="fas fa-envelope"></i>
                </label>
                <span className="form-line">                  </span>
                <input type="text" id="email" className="form-input" placeholder="Email" {...register("email")} />
            </div>

            <div className="input">
                <label htmlFor="password" className="form-label">
                    <i class="fas fa-lock"></i>
                </label>
                <span className="form-line"> </span>
                <input type="password" id="password" className="form-input" placeholder="Password" {...register("password")} />
            </div>

            <div className="input">
                <label htmlFor="date" className="form-label">
                    <i class="fas fa-birthday-cake"></i>
                </label>
                <span className="form-line"> </span>
                <input type="date" id="date" className="form-input" placeholder="Birthday" {...register("birthday")} />
            </div>

            <button className="form-submit">Create User</button>
            
        </div>

    </form>
  );
};

export default Form;