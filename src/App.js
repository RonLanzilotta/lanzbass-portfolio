import { useState, useEffect } from "react";
import Nav from "./Nav.jsx";
import Entry from "./Entry.jsx";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = () => {
    fetch(`http://localhost:3000/`)
      .then((res) => res.json())
      .then((data) => setEntries(data));
  };

  return (
    <main>
      <Nav className="nav"/>
      <Entry entries={entries} />
    </main>
  );
}

export default App;
