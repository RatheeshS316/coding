import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import { deleteUser } from '../slices/userSlice';


const User = () => {
  const dispatch = useDispatch();

const user = useSelector((state) => state.userdata.user)
console.log(user);


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addUser = (event) =>{
   event.preventDefault(); 
    dispatch(setUser(data))
  }

  const deleteUserinfo = (index) =>{
    dispatch(deleteUser(index))
  }

  return (
    <div style={{ padding: "20px"  }}>
      
        <h4>name</h4>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      
      
        <h4>email</h4>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <h4>password</h4>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      
        <h4>phone</h4>
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <br />
        <button onClick={addUser}>Add</button>
     
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div>
            {user?.map((user, index) => {
              return (
                <div key={index}>
                  <h2>Name: {user.name}</h2>
                  <h2>Email: {user.email}</h2>
                  <h2>Password: {user.password}</h2>
                  <h2>Phone: {user.phone}</h2>
                  <button onClick={() => deleteUserinfo(index)}>Delete info</button>
                </div>
              );
            })}
          </div>
    </div>
  );
};

export default User;
