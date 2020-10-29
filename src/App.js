import Header from "./App/components/Header";
import Navbar from "./App/components/Navbar";
import Routes from "./Routes";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <div className="create_tweet">
              <i className="fas fa-feather-alt"></i>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
