import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"

import { useState } from "react";


function App() {
  const [inputByUser, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    });
  }

  return (
    <>
    <Header />
    <UserInput userInput={inputByUser} onInputChange={handleChange}/>
    <Results input={inputByUser} />
    </>
  )
}

export default App
