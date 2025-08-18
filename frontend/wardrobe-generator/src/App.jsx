import Generator from "./components/Generator";
import GeneratorTitle from "./components/GeneratorTitle";

function App() {
  return (
    <div class="d-flex flex-column justify-content-center align-items-center">
      <GeneratorTitle />
      <Generator />
    </div>
  );
}

export default App;
