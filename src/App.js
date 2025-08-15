import React, { useEffect, useState } from "react";
import PortfolioTable from "./components/PortfolioTable";
import { fetchPrices } from "./utils/fetchPrices";

function App() {
  const [prices, setPrices] = useState({});

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

    // Optional: auto-refresh every 60s
    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{padding: "20px", fontFamily: "Arial" }}>
      <h1>Crypto Portfolio Tracker</h1>
      <PortfolioTable tokens={tokens} prices={prices} />
    </div>
  );
}

export default App;
