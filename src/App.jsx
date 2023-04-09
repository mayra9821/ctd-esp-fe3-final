import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
