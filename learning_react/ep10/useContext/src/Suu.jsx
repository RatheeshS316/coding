import { useContext } from 'react';
import { DarkColorContext } from './App'; // Adjust path if needed

const Suu = () => {
  const { dark } = useContext(DarkColorContext);

  const colornote = {
    color: dark === 'light' ? 'black' : 'white',
    backgroundColor: dark === 'light' ? 'white' : 'black',
    padding: '10px'
  };

  return (
    <div>
      <h1 style={colornote}>Suu</h1>
    </div>
  );
};

export default Suu;
