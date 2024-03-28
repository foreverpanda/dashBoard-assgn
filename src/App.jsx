import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Dashboard from "./components/dashBoard/Dashboard";
import ProductContainer from "./components/dashBoard/ProductSection/ProductContainer";

function App() {
  return (
    <div className="flex bg-bg-main h-screen  overflow-x-hidden">
      <SideBar />
      <Dashboard/>
    </div>
  );
}

export default App;
