import { Route, Routes } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Lessons from "./pages/Lessons";
import { useApp } from "./context/AppContext";

function App() {
  const { isOpen } = useApp();

  return (
    <div className="flex">
      <Sidebar />
      <main
        className={`
        ml-20
        transition-all duration-300

        ${isOpen ? "lg:ml-64" : "lg:ml-20"}
      `}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/lessons" element={<Lessons />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;