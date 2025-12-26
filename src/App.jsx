function App() {
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
          <select>
            <option>Company</option>
          </select>

          <select>
            <option>Account</option>
          </select>
        </div>

        {/* Balance */}
        <div style={{ marginTop: "20px" }}>
          <h3>Available Balance</h3>
          <p>₹ 0</p>
        </div>

        {/* Table */}
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
            <tr>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
