import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IchorDashboard from './demos/ichor'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IchorDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App