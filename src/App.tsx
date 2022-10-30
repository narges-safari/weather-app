import Weather from "./pages/Weather";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./App.theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Weather />
    </ThemeProvider>
  );
}

export default App;
