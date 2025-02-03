/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const link = "https://wa.me/918432264787";
  const [interest, setInterest] = useState(false)
  const [interest1, setInterest1] = useState(false)
  const[interestData,setInterestData]=useState({})
  const[interestEmail,setInterestEmail]=useState(false)
  return (
    <Context.Provider
    value={{ interestEmail,setInterestEmail,link, interest, setInterest,interest1, setInterest1, interestData, setInterestData }}
  >
    {children}
  </Context.Provider>
  
  );
};
