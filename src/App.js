import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Card from './Card';
import Form from './Form';

// const themes = {
//   'dark': {
//     blackgroundColor: 'black',
//     color: 'white'
//   },
//   'light': {
//     blackgroundColor: 'white',
//     color: 'black'
//   }
// }

// export const ThemeContext = React.createContext();



function App() {
  // const [theme, setTheme] = useState(themes.dark);
  return (
    <div>
      <Form />
      {/* <ThemeContext.Provider value={theme}>
        <Button />
        <Card />
        <button onClick={() => setTheme(themes.light)}>Modo claro</button>
        <button onClick={() => setTheme(themes.dark)}>Modo Oscuro</button>
      </ThemeContext.Provider> */}
    </div>
  );
}

export default App;
