import Navbar from "./components/Navbar";
import Sidebar from './components/SideBar';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router> <div className="App">
     <Navbar />
     <Sidebar />
    
    </div></Router>
   
  )
}

export default App
