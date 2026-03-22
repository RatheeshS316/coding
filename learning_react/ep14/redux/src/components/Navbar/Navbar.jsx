import { useNavigate } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    }

  return (
    <div>
    <nav>
      <h1 id={'header'}>Home Page</h1>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li onClick={()=>{
            handleClick('/')
          }}>Home</li>
          <li onClick={()=>{
            handleClick('/about')
          }}>About</li>
          <li onClick={()=>{
            handleClick('/contact')
          }}>Contact</li>
          <li onClick={()=>{
            handleClick('/user')
          }}>User</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
