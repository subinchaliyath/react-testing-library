import "./App.css";
import SendMoney from "./components/SendMoney";
import Users from "./components/Users";
import DataGridPage from "./components/DataGridPage";

function App() {
  return (
    <>
      <SendMoney user="subin"/>
      <Users/>
      <DataGridPage/>
    </>
  );
}

export default App;
