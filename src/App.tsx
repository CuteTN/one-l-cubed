import { AppRouter } from "routers/router.component";
import { AppNavBar } from "./components/common/AppNavBar/AppNavBar.component";
import { ThemesProvider } from "./contexts/themes-provider/themes.provider";

function App() {
  return (
    <div className="App">
      <ThemesProvider>
        <AppNavBar />
        <AppRouter />
      </ThemesProvider>
    </div>
  );
}

export default App;