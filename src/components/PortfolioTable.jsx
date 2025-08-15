import React from "react";

const PortfolioTable = ({ tokens, prices }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
        <caption className="caption-top text-lg font-semibold px-4 py-2 text-gray-700">
          Portfolio Overview
        </caption>
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium text-gray-600">Token</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-600">Amount</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-600">Price (USD)</th>
            <th scope="col" className="px-6 py-3 font-medium text-gray-600">Total Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {tokens.length === 0 ? (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                No tokens in portfolio
              </td>
            </tr>
          ) : (
            tokens.map((token) => {
              const price = prices[token.id]?.usd || 0;
              const value = price * token.amount;

              return (
                <tr key={token.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-800">{token.name}</td>
                  <td className="px-6 py-4 text-gray-800">{token.amount}</td>
                  <td className="px-6 py-4 text-gray-800">{formatter.format(price)}</td>
                  <td className="px-6 py-4 text-gray-800 font-medium">
                    {formatter.format(value)}
                  </td>
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
