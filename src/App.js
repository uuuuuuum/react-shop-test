import { useState } from "react";
import "./App.css";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import CompletePage from "./pages/CompletePage/CompletePage";
import { OrderContextProvider } from "./contexts/OrderContext";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className="App" style={{ padding: "4rem" }}>
      <OrderContextProvider>
        {step === 0 && <OrderPage setStep={setStep} />}
        {step === 1 && <SummaryPage setStep={setStep} />}
        {step === 2 && <CompletePage setStep={setStep} />}
      </OrderContextProvider>
    </div>
  );
}

export default App;
