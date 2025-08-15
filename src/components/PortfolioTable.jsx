import React from "react";
import "./PortfolioTable.css"; // Import the custom CSS

const PortfolioTable = ({ tokens, prices }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="portfolio-table-container">
      <h2 className="portfolio-title">Your Token Portfolio</h2>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Token</th>
            <th>Amount</th>
            <th>Price (USD)</th>
            <th>Total Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.length === 0 ? (
            <tr>
              <td colSpan="4" className="empty-row">No tokens in portfolio</td>
            </tr>
          ) : (
            tokens.map((token) => {
              const price = prices[token.id]?.usd || 0;
              const value = price * token.amount;

              return (
                <tr key={token.id}>
                  <td>{token.name}</td>
                  <td>{token.amount}</td>
                  <td>{formatter.format(price)}</td>
                  <td>{formatter.format(value)}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
