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

  const inputIsValid = inputByUser.duration>=1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  // +: The plus sign (+) in this context acts as the unary plus operator. Its primary purpose here is to convert newValue to a number, assuming it's a string or another data type that can be coerced into a number. If newValue is already a number, the plus operator has no effect.

  return (
    <>
    <Header />
    <UserInput userInput={inputByUser} onInputChange={handleChange}/>
    {
      !inputIsValid && <p className="center">Please enter a duration greater than zero</p>
    }
    {
    inputIsValid &&
    <Results input={inputByUser} />
    }
    </>
  )
}

export default App
