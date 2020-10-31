import Header from "./App/components/Header";
import Navbar from "./App/components/Navbar";
import Routes from "./Routes";
import './App.css'
import CreateTweetButton from "./App/components/CreateTweetButton";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes />
      <CreateTweetButton />
      <Navbar />
    </div>
  );
}

export default App;
