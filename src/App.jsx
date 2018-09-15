class IssueList extends React.Component {
  render() {
    return (
      <div>This is a placeholder for the issue list.</div>
    );
  }
}

const element = <IssueList />;

// Render the element in the contents div
ReactDOM.render(element, document.getElementById('contents'));
