import "../src/styles/App.css";
import Website from "./pages/website";

/**
 * Main program that starts the program front end
 */

/**
 * A function that reders the entire APP in the top level.
 *
 * @returns The entire Map app and its relative components
 */
function App() {
  return (
    <div className="App">
      <Website />
    </div>
  );
}

export default App;
