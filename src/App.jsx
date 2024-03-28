import './App.css'
import SideBar from './components/sideBar/SideBar'
import Dashboard from './components/dashBoard/Dashboard'

function App() {

  return (
    <div className='flex bg-bg-main h-screen w-screen ' >
    
      <SideBar/>
      <Dashboard/>
      
    </div>
  )
}

export default App
