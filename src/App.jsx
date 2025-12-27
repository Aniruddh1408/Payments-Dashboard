import { useState } from "react";
import companies from "./data/companies";
import "./index.css";

function App() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);

  const selectedCompany = companies[selectedCompanyIndex];
  const accounts = selectedCompany.accounts;
  const selectedAccount = accounts[selectedAccountIndex];

  return (
    <div className="app">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>EazyPayouts</h2>

        <ul>
         <li className="active">Loads</li>
         <li>Statements</li>
         <li>Transactions</li>
        </ul>

      </div>

      {/* Main Content */}
      <div className="main">
        
        {/* Top bar */}
        <div className="top-bar">
          <select
            value={selectedCompanyIndex}
            onChange={(e) => {
              setSelectedCompanyIndex(Number(e.target.value));
              setSelectedAccountIndex(0);
            }}
          >
            {companies.map((company, index) => (
              <option key={index} value={index}>
                {company.name}
              </option>
            ))}
          </select>

          <select
            value={selectedAccountIndex}
            onChange={(e) =>
              setSelectedAccountIndex(Number(e.target.value))
            }
          >
            {accounts.map((account, index) => (
              <option key={index} value={index}>
                {account.name}
              </option>
            ))}
          </select>
        </div>

        {/* Balance */}
        <div className="balance-card">
          <h3>Available Balance</h3>
          <p>₹ {selectedAccount.balance.toLocaleString()}</p>
        </div>

        {/* Transactions Table */}
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Credit</th>
              <th>UTR/RRN</th>
              <th>A/c No / UPI</th>
            </tr>
          </thead>
          <tbody>
            {selectedAccount.transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.date}</td>
                <td>₹ {tx.credit}</td>
                <td>{tx.utr}</td>
                <td>{tx.account}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
