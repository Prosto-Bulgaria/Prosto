import './App.css';
import Home from './components/Home/Home';
import Navigation from './components/Main/Navigation/Navigation';
import Footer from './components/Main/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
