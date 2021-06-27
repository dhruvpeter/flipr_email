import logo from './logo.svg';
import './App.css';
import Login from './components/Compose/Compose'

import Navigationbar from "./components/Navigationbar/Navigationbar";
import SelectedMailHistory from "./components/History/SelectedMailHistory/SelectedMailHistory";
import History from "./components/History/History";
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <SelectedMailHistory />
    
    </div>
  );
}

export default App;
