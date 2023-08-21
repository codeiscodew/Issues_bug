import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreateIssueForm() {
  const [projectName, setProjectName] = useState("");
  const [status, setStatus] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [submittedIssue, setSubmittedIssue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      projectName,
      status,
      issueDescription,
      assignee,
    };

    setSubmittedIssue(newIssue);
    // Reset form fields
    setProjectName("");
    setStatus("");
    setIssueDescription("");
    setAssignee("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <label>Issue Description:</label>
        <textarea
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)}
        />
        <label>Assignee:</label>
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedIssue && (
        <div>
          <h2>Submitted Issue Details:</h2>
          <p>Project Name: {submittedIssue.projectName}</p>
          <p>Status: {submittedIssue.status}</p>
          <p>Issue Description: {submittedIssue.issueDescription}</p>
          <p>Assignee: {submittedIssue.assignee}</p>
        </div>
      )}
    </div>
  );
}

export default CreateIssueForm;
