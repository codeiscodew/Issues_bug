import React, { useState } from "react";
//import CreateIssue from "../CreateIssue";
//import Create_IssueButton from "./Create_IssueButton";
//import { Link } from "react-router-dom";
import Modal from "react-modal";
//import { Display_Output } from "./Display_Output.1";
import "./Create_Button.css";

function Navbar({ onCreateIssue }) {
  const [assigneeName, setAssigneeName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [submittedIssue, setSubmittedIssue] = useState(null);

  /*const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      projectName,
      status,
      issueDescription,
      assignee,
    };

    
  }; */

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav style={{ backgroundColor: "#333", padding: "10px 0", color: "#fff" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div>
          <button onClick={openModal}>Create Issue</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Create Issue Modal"
          >
            {/* Add your form fields here */}
            <h2>Create Issue</h2>
            <form>
              <label>Project Name:</label>
              <form>
                <select>
                  <option value="">Select a Project</option>
                  <option value="new">Full Stack Development</option>
                  <option value="assigned">Machine Learning</option>
                </select>
              </form>

              <br />
              <label>Short Summary:</label>
              <input
                type="text" //value={shortSummary}
              />
              <br />
              <label>Status:</label>
              <form>
                <select>
                  <option value="">Select a Status</option>
                  <option value="new">New</option>
                  <option value="assigned">Assigned</option>
                  <option value="open">Open</option>
                  <option value="fixed">Fixed</option>
                  <option value="pending-retest">Pending Retest</option>
                  <option value="retest">Retest</option>
                  <option value="re-open">ReOpen</option>
                  <option value="verified">Verified</option>
                  <option value="closed">Closed</option>
                </select>
              </form>

              <label>Issue Description:</label>
              <textarea
                rows="3"
                //value={issueDescription}
              />
              <br />

              <label>Assignee:</label>
              <input type="text" value={assigneeName} />

              <div>
                <button type="submit">Submit</button>
              </div>
              <div>
                <button onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </Modal>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
