
import './App.css';

import { Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Main/Navigation/Navigation';
import Footer from './components/Main/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
