import { useEffect, useState } from "react";
import axios from "axios";
import { Log } from "./middleware/logger";

const API = "http://4.224.186.213/evaluation-service/notifications";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJndWJlcmFraGlsYW0uZGV2QGdtYWlsLmNvbSIsImV4cCI6MTc4MTY4MTM5OSwiaWF0IjoxNzgxNjgwNDk5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZmRkNWZkYzEtNGJhMy00YzBiLWIwZGUtMjI5ZDNlMTkyYTUxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZ3ViZXIgYWtoaWxhbiBzIiwic3ViIjoiY2Y0ZTg0MmUtOWMwMi00NWM5LTgwMjAtNTlmMDkzNzQwZDhlIn0sImVtYWlsIjoiZ3ViZXJha2hpbGFtLmRldkBnbWFpbC5jb20iLCJuYW1lIjoiZ3ViZXIgYWtoaWxhbiBzIiwicm9sbE5vIjoiMTEzMDIzMjQzMDI5IiwiYWNjZXNzQ29kZSI6Imp1RnBodiIsImNsaWVudElEIjoiY2Y0ZTg0MmUtOWMwMi00NWM5LTgwMjAtNTlmMDkzNzQwZDhlIiwiY2xpZW50U2VjcmV0IjoiVmF5Tnh5VUJ2bURzalBhQSJ9.UcP31mIvIir7UoO_d9tG_W3gxjoHMPhnJP4Oy_vEqTA";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    Log("frontend", "info", "api", "Fetching notifications");

    axios
      .get(API, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setNotes(res.data.notifications || []);
        Log("frontend", "info", "api", "Notifications fetched");
      })
      .catch(() => {
        Log("frontend", "error", "api", "Failed to fetch notifications");
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>
      <p>Total notifications: {notes.length}</p>

      {notes.map((item) => (
        <div
          key={item.ID}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <b>{item.Type}</b>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;