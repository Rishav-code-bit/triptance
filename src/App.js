import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

    return (
        <div>
            <p>{currDate}</p>
            <h1>{currTime}</h1>
        </div>
    );
};

export default App;