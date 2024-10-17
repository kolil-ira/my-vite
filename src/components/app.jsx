import React, { useState } from 'react'; 

function AppComponent() { 
    const [count, setCount] = useState(0); 

    const incrementCounter = () => {
        setCount(count + 1); 
    };

    return (
      <div className="App">
        <h1>Hello, My name is Ira!</h1>
        <h2>Counter: {count}</h2>
        <button onClick={incrementCounter}>Increase</button>
      </div>
    );
}

export default AppComponent; 
