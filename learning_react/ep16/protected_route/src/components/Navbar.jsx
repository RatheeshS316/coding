import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../slices/userSlice'

const Navbar = () => {
    const user = useSelector((state)=>state.userdata.user);
    const navigate = useNavigate();
    const dispatch =useDispatch();

    const logout = () =>{
        dispatch(removeUser());
    }

    const handleClick =( path)=>{
        navigate(path);
    }
  return (
    <nav>
        <h1>Navbar</h1>
        <ul>
            {!user && (
                <li onClick={() => handleClick('/login')}>login</li>
            )}

            {user && (
                <>
                    <li onClick={() => handleClick('/settings')}>Settings</li>
                    <li onClick={logout}>Logout</li>
                </>
            )}
                        

        </ul>
    </nav>
  ) 
}

export default Navbar







                    /* {!user && (
                <li onClick={() => handleClick('/login')}>login</li>
            )}

            {user && (
                <>
                    <li onClick={() => handleClick('/settings')}>Settings</li>
                    <li onClick={() =>{handleClick}}>Logout</li>
                </>
            )} */