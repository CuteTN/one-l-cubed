import { AppNavBar } from "./components/app/AppNavBar/AppNavBar.component";
import { CommonComponentsDemo } from "./components/demo/CommonComponentsDemo.component";
import { ThemesProvider } from "./contexts/themes-provider/themes.provider";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
        <AppNavBar />
        <CommonComponentsDemo />
      </ThemesProvider>
    </div>
  );
}

export default App;

