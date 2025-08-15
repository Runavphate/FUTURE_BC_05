import React, { useEffect, useState } from "react";
import PortfolioTable from "./components/PortfolioTable";
import { fetchPrices } from "./utils/fetchPrices";
import "./App.css";
import "./PortfolioTable.css";

function App() {
  const [prices, setPrices] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const tokens = [
    { id: "bitcoin", name: "Bitcoin", amount: 0.5 },
    { id: "ethereum", name: "Ethereum", amount: 2 },
    { id: "solana", name: "Solana", amount: 10 },
    { id: "cardano", name: "Cardano", amount: 100 },
    { id: "polkadot", name: "Polkadot", amount: 50 },
    { id: "dogecoin", name: "Dogecoin", amount: 1000 },
    { id: "avalanche-2", name: "Avalanche", amount: 20 },
    { id: "chainlink", name: "Chainlink", amount: 30 },
    { id: "uniswap", name: "Uniswap", amount: 25 },
    { id: "litecoin", name: "Litecoin", amount: 5 },
  ];

  const ids = tokens.map((token) => token.id);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    }
  },);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
  const getPrices = async () => {
    const fetched = await fetchPrices(ids);
    setPrices(fetched);
  };

  getPrices();

  const interval = setInterval(getPrices, 60000);
  return () => clearInterval(interval);
}, [ids]);

  const toggleMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <button onClick={toggleMode} className="mode-toggle">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <PortfolioTable tokens={tokens} prices={prices} />
      </div>
    </div>
  );
}

export default App;
