import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import React, { useState } from "react";
import Data from "./Data";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <div className="App">
        <main>
          <section className="container">
            <h3>{people.length} Birthdays Today</h3>
            <List people={people} />
            <button
              onClick={() => {
                setPeople([]);
              }}
            >
              Clear All
            </button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
