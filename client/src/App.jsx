
import { Route, Routes} from "react-router-dom";
import { AuthContext } from './contexts/AuthContext';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses'
import Navigation from './components/Main/Navigation/Navigation';
import Footer from './components/Main/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import './App.css'

function App() {

  return (
    <>
      <AuthContext.Provider value={true}>
        <div className="App bg-background_dark text-text_dark">
            <Navigation />
            <main>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/courses" element={<Courses/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    </AuthContext.Provider>
    </>
  )
}

export default App
