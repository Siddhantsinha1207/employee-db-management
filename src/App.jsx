import Employee from "./components/Employee";
import EmpContext from "./context/EmpContextProvider";

function App() {
  return (
    <div>
      <h1>Employee Database Management </h1>
      <EmpContext>
        <Employee />
      </EmpContext>
    </div>
  );
}

export default App;
