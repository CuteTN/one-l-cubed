import { CommonComponentsDemo } from "./components/demo/CommonComponentsDemo.component";
import { ThemesProvider } from "./contexts/themes-provider/themes.provider";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
        <CommonComponentsDemo />
      </ThemesProvider>
    </div>
  );
}

export default App;

