import ThemeProvider from "./provider/ThemeProvider";
import Header from "./_components/header";
import Content from "./_components/content";

function App() {
  
  
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
