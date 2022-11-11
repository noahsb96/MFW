import "./App.css";

async function fetchMerch() {
  const response = await fetch(
    `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/`
  );
  const merch = await response.json();
  return merch;
}

function App() {
  fetchMerch().then((data) => console.log("here is the merch", data.merch));

  return <div className="App">React App</div>;
}

export default App;
