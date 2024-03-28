import './App.css'
import SideBar from './components/sideBar/SideBar'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className='flex bg-green-200 h-screen w-screen ' >
    
      <SideBar/>
      <Dashboard/>
    </div>
  )
}

export default App
