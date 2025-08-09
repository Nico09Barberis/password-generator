import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Generator from "./pages/GeneratorPage";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<Generator />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
