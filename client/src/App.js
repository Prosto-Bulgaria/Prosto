
import './App.css';

import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Main/Navigation/Navigation';
import Footer from './components/Main/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Route path="/" component={Home} />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
