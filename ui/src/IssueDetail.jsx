import React from 'react';

export default function IssueDetail({ issue }) {
  if (issue) {
    return (
      <div>
        <h3>Description</h3>
        <pre>{issue.description}</pre>
      </div>
    );
  }
  return null;
}
