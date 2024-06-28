import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import userLogo from './assets/user-logo.svg'

function App() {


  const user = {
    name: 'Jose Miguel',
    profileImg: userLogo
  }
  
  return (
    <div className="min-h-screen bg-myColor_1">
      
        <Router>

          <header className="flex justify-between items-center p-4">

            <img src={user.profileImg} alt={user.name} />

            <nav className="flex gap-7 text-myColor_4 text-3xl font-extrabold ">
              
              <Link to="/" className="hover:scale-90 hover:text-white transition-transform duration-300 ease-in-out">Home</Link>
            
              <Link to="/login" className="hover:scale-90 hover:text-white  transition-transform duration-300 ease-in-out">Login</Link>
            
              <Link to="/register" className="hover:scale-90 hover:text-white transition-transform duration-300 ease-in-out">Register</Link>
            
            </nav>
          </header>

          <main className="h-auto min-h-min w-7/12 mx-auto mt-28 p-5 border-4 border-myColor_4 rounded-t-lg">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
            </Routes>
          </main>
          
        </Router>
      
    </div>
    
    
    
  )
}

export default App
