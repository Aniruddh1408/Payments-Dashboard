import { useState } from "react";
import companies from "./data/companies";

function App() {
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  const [selectedAccountIndex, setSelectedAccountIndex] = useState(0);

  const selectedCompany = companies[selectedCompanyIndex];
  const accounts = selectedCompany.accounts;
  const selectedAccount = accounts[selectedAccountIndex];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          borderRight: "1px solid #ddd",
          padding: "20px"
        }}
      >
        <h2>EazyPayouts</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Loads</li>
          <li>Statements</li>
          <li>Transactions</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          
          {/* Company dropdown */}
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

          {/* Account dropdown */}
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
        <div style={{ marginTop: "20px" }}>
          <h3>Available Balance</h3>
          <p>₹ {selectedAccount.balance.toLocaleString()}</p>
        </div>

        {/* Transactions Table (NOW DYNAMIC) */}
        <table border="1" width="100%" style={{ marginTop: "20px" }}>
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
