import './App.css';

import { Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses'
import Navigation from './components/Main/Navigation/Navigation';
import Footer from './components/Main/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
