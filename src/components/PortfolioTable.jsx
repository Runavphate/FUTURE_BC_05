import React from "react";

const PortfolioTable = ({ tokens, prices }) => {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Token</th>
          <th>Amount</th>
          <th>Price (USD)</th>
          <th>Total Value (USD)</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => {
          const price = prices[token.id]?.usd || 0;
          const value = price * token.amount;

          return (
            <tr key={token.id}>
              <td>{token.name}</td>
              <td>{token.amount}</td>
              <td>${price.toFixed(2)}</td>
              <td>${value.toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PortfolioTable;
