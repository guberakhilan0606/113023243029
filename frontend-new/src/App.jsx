import { useEffect } from "react";
import { Log } from "./middleware/logger";

function App() {

  useEffect(() => {
    Log(
      "frontend",
      "info",
      "component",
      "Campus notifications page loaded"
    );
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>
      <p>Notification system for students.</p>
    </div>
  );
}

export default App;