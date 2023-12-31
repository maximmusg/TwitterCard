import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
import { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <TwitterFollowCard userName="maximmusg" name="Gomez Maximiliano" />
      <TwitterFollowCard
        isFollowing
        userName="kikobeats"
        name="Gomez Ezequiel"
      />
      <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
      <TwitterFollowCard userName="drsdavidsoft" name="Gomez david" />
    </div>
  );
};

export default App;
