import {createContext, ReactNode, useState } from 'react'
import {dark, light} from './themes/index'

export interface ThemeContextData {
  children: ReactNode
}
export interface Theme {
  theme: DefaultTheme;
  handleToggleTheme: () => void; 
}
export interface DefaultTheme {
  title: string,
  colors: {
    background: string,
    color: string
  },
}
export const ThemeContext = createContext({} as Theme)

export const ThemeContextProvider = ({children}:ThemeContextData) => {
const [theme, setTheme] = useState(light)

const handleToggleTheme = () =>{
  setTheme(theme.title === 'dark' ? light : dark)
}

  return (

    <ThemeContext.Provider value={{theme, handleToggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
  
}