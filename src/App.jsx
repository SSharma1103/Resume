import Name from "./components/name";
import Stack from "./components/stack";
import Project from "./components/projects";
import Goals from "./components/goal";
import MaskTextSplit from "./components/masktextsplit";
import StackingCards from "./components/cards";
import TrailCursor from "./components/cursor";


function App() {
  return (
    <>
    <TrailCursor/>
    <MaskTextSplit/>
      
      <StackingCards/>
      <Project/>
      <Goals/>
    </>
  );
}

export default App;

