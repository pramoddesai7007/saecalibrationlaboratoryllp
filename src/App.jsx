import "./App.css";

import Index from "./Routes/Index";

import { ContextProvider } from "./Pages/ContextApi";
import CallibrationService from "./Pages/CallibrationService";

function App() {
  return (
    <ContextProvider>
      <Index />
      {/* <CallibrationService/> */}
    </ContextProvider>
 
  );
}

export default App;
