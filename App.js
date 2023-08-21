import React from "react";
import Navbar from "./components/Navbar";
import CreateIssueForm from "./components/Issue_form_creation";
//import App from "./App.css";

//import Display_Output from "./components/Display_Output";

//import CreateIssue from "./CreateIssue";
//import Create_IssueButton from "./components/Create_IssueButton";
function App() {
  // const [issues, setIssues] = useState([]);

  const handleCreateIssue = (newIssue) => {
    //setIssues([...issues, newIssue]);
  };
  //const handleCreateIssue = () => {

  //  console.log("Create Issue button clicked");
  return (
    <div className="App">
      <Navbar onCreateIssue={handleCreateIssue} />
    </div>
  );
}
export default App;
