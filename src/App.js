import Login from "./components/Compose/Compose";
import SelectedMailHome from "./components/Home/SelectedMailHome/SelectedMailHome";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import SelectedMailHistory from "./components/History/SelectedMailHistory/SelectedMailHistory";
import History from "./components/History/History";
import Home from "./components/Home/Home";
import Compose from "./components/Compose/Compose";
function App() {
  return (
    <div className="App">
      <Navigationbar />
      {/* <SelectedMailHistory /> */}
      <Compose />
    </div>
  );
}

export default App;
