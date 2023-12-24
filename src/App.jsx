import React from "react";
import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  return (
    <div className="App">
      <TwitterFollowCard userName="maximmusg" name="Gomez Maximiliano" />
      <TwitterFollowCard userName="kikobeats" name="Gomez Ezequiel" />
      <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard userName="drsdavidsoft" name="Gomez david" />
    </div>
  );
};

export default App;
