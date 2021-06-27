import Login from "./components/Login/Login";
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
      {/* <Home token={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDgzYmIyY2E2ODM4NmI1ZDg3YjNkMiIsImlhdCI6MTYyNDc4MzgwMH0.KLk2ZoA36SrUj0f4ig1pbOYBg7vkfZYKkaWyoBKXXxk"}/> */}
      {/* <History token={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZDgzYmIyY2E2ODM4NmI1ZDg3YjNkMiIsImlhdCI6MTYyNDc4MzgwMH0.KLk2ZoA36SrUj0f4ig1pbOYBg7vkfZYKkaWyoBKXXxk"}/> */}
      {/* <Compose /> */}
      <Login />
    </div>
  );
}

export default App;
