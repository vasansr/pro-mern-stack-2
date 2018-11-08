import React from 'react';
import { Link } from 'react-router-dom';

function IssueRow({ issue }) {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ''}</td>
      <td>{issue.title}</td>
      <td><Link to={`/edit/${issue.id}`}>Edit</Link></td>
    </tr>
  );
}

export default function IssueTable({ issues }) {
  const issueRows = issues.map(issue => (
    <IssueRow key={issue.id} issue={issue} />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Due Date</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </table>
  );
}
