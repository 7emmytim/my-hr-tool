import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/AuthLayout'
import UnAuthLayout from './components/UnAuthLayout'
import { useAuth } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {

  const [auth] = useAuth()

  return (
    <BrowserRouter>
      <ThemeProvider>
        {auth ? <AuthLayout /> : <UnAuthLayout />}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App