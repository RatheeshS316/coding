import { createContext, useState } from 'react';
import Compo from './Compo';

// Create the context outside the component
export const DarkColorContext = createContext();

const App = () => {
  const [dark, setDark] = useState("light");

  const toggleTheme = () => {
    setDark(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <DarkColorContext.Provider value={{ dark, toggleTheme }}>
      <button onClick={toggleTheme}>Choose Theme</button>
      <h1>App {dark}</h1>
      <Compo />
    </DarkColorContext.Provider>
  );
};

export default App;
