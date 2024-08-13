import { jsx as _jsx } from "react/jsx-runtime";
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
    return _jsx(Website, {});
}
export default App;
