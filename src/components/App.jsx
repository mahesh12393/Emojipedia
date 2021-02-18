import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

function createCard(emojipedia) {
  return (
    <Entry
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
