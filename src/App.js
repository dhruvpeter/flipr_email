import Login from "./components/Login/Login";
import SelectedMailHome from "./components/Home/SelectedMailHome/SelectedMailHome";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import SelectedMailHistory from "./components/History/SelectedMailHistory/SelectedMailHistory";
import History from "./components/History/History";
import Home from "./components/Home/Home";
import Compose from "./components/Compose/Compose";
import AlertSuccess from "./components/Compose/AlertSuccess/AlertSuccess";
import AlertFailure from "./components/Compose/AlertFailure/AlertFailure";
function App() {
  return (
    <div className="App">
      <Navigationbar />
      <AlertFailure />
    </div>
  );
}

export default App;
