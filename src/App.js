import logo from './logo.svg';
import './App.css';
import AppComponent from './components/app'; // Importing the corrected App component

function App() {
  return (
    <div className="App">
      <AppComponent /> {/* Component names should be capitalized */}
    </div>
  );
}

export default App;
