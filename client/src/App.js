import './App.css';
import HomeComponent from './components/HomeComponent/HomeComponent';
import NavigationComponent from './components/NavigationComponent/NavigationComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationComponent></NavigationComponent>
      </header>
        <HomeComponent></HomeComponent>
        <footer>
          <FooterComponent></FooterComponent>
        </footer>
    </div>
  );
}

export default App;
