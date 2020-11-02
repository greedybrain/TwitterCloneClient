// import Header from "./App/components/Header";
import Navbar from "./App/components/Navbar";
import Routes from "./Routes";
import './App.css'
import CreateTweetButton from "./App/components/CreateTweetButton";
import AccountInfo from "./App/components/AccountInfo";
import { useState } from "react";

function App() {
  const [accountInfoDisplayed, setAccountInfoDisplayed] = useState(false)
  return (
    <div className="App">
      {/* <Header /> */}
      {
        accountInfoDisplayed && (
          <AccountInfo accountInfoDisplayed={accountInfoDisplayed} setAccountInfoDisplayed={setAccountInfoDisplayed} />
        )
      }
      <Routes setAccountInfoDisplayed={setAccountInfoDisplayed} />
      <CreateTweetButton />
      <Navbar />
    </div>
  );
}

export default App;
