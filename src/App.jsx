const continents = ['Africa','America','Asia','Australia','Europe'];
const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join(' ');

// Create a simple nested React element
const element = (
  <div title="Outer div">
    <h1>{message}</h1>
  </div>
);

// Render the element in the contents div
ReactDOM.render(element, document.getElementById('contents'));
