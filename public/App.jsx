// Create a simple nested React element
const element = (
  <div title="Outer div">
    <h1>Hello World!</h1>
  </div>
);

// Render the element in the contents div
ReactDOM.render(element, document.getElementById('contents'));
