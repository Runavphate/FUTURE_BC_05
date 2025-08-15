import React, { useEffect, useState } from "react";
import PortfolioTable from "./components/PortfolioTable";
import { fetchPrices } from "./utils/fetchPrices";
import "./PortfolioTable.css";

function App() {
  const [prices, setPrices] = useState({});
  const [darkMode, setDarkMode] = useState(false);

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
    async function getPrices() {
      const priceData = await fetchPrices(ids);
      setPrices(priceData);
    }

    getPrices();

    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="app-wrapper">
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <h1 className="app-title">Crypto Portfolio Tracker</h1>
        <PortfolioTable tokens={tokens} prices={prices} />
      </div>
    </div>
  );
}

export default App;
